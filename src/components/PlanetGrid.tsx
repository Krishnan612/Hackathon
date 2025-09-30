import { Planet } from "@/types/planet";
import { PlanetCard } from "./PlanetCard";

interface PlanetGridProps {
  planets: Planet[];
  onPlanetClick: (planet: Planet) => void;
}

export const PlanetGrid = ({ planets, onPlanetClick }: PlanetGridProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-glow">
            Explore Our Solar System
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click on any planet to discover its fascinating story, scientific facts, and incredible imagery
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Solar system planets"
        >
          {planets.map((planet, index) => (
            <div
              key={planet.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              <PlanetCard
                planet={planet}
                onClick={() => onPlanetClick(planet)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
