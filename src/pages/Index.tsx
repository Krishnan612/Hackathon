import { useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { PlanetGrid } from "@/components/PlanetGrid";
import { PlanetStory } from "@/components/PlanetStory";
import { Planet } from "@/types/planet";
import planetsData from "@/data/planets.json";
import spaceHero from "@/assets/space-hero.jpg";

const Index = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const planets = planetsData as Planet[];

  const handlePlanetClick = (planet: Planet) => {
    setSelectedPlanet(planet);
    setIsStoryOpen(true);
  };

  const handleCloseStory = () => {
    setIsStoryOpen(false);
    setTimeout(() => setSelectedPlanet(null), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={spaceHero}
            alt="Deep space with planets and nebulas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 cosmic-gradient opacity-60" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-glow">
            Journey Through Space
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Discover the captivating stories of our solar system's planets through immersive narratives, 
            stunning imagery, and scientific insights from NASA
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </header>

      {/* Planet Grid */}
      <main>
        <PlanetGrid planets={planets} onPlanetClick={handlePlanetClick} />
      </main>

      {/* Story Modal */}
      <PlanetStory
        planet={selectedPlanet}
        isOpen={isStoryOpen}
        onClose={handleCloseStory}
      />

  {/* Scroll To Top Button */}
  <ScrollToTopButton />

  {/* Footer */}
  <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-muted-foreground">
            Educational content inspired by NASA's planetary science missions
          </p>
          <p className="text-sm text-muted-foreground mt-2">
          <a href="">  Team Astro Innovators</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
