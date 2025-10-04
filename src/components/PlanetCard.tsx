import { Card } from "@/components/ui/card";

import { Planet } from "@/types/planet";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { useRef, useState } from "react";

interface PlanetCardProps {
  planet: Planet;
  onClick: () => void;
}

export const PlanetCard = ({ planet, onClick }: PlanetCardProps) => {
  const { speak } = useTextToSpeech();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Toggle play/stop for planet sound
  const playPlanetSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!planet.planetSound) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(planet.planetSound);
      audioRef.current.onended = () => setIsPlaying(false);
    }
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative overflow-hidden cursor-pointer bg-card border-border hover:border-primary transition-all duration-500 planet-glow"
      aria-label={`Explore ${planet.name} story`}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={planet.thumbnail}
          alt={`${planet.name} - ${planet.subtitle}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${planet.color}20 0%, transparent 100%)`
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-glow transition-all">
          {planet.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 font-medium">
          {planet.subtitle}
        </p>
        <p className="text-foreground/80 text-sm leading-relaxed">
          {planet.description}
        </p>
        <div className="flex gap-2 mt-3">
          <button
            type="button"
            className="px-3 py-1 rounded bg-primary text-white hover:bg-primary/80 transition"
            onClick={(e) => {
              e.stopPropagation();
              // Use narration from planetNarrations if available, fallback to description
              const narration = planet.description;
              speak(narration);
            }}
            aria-label={`Listen to ${planet.name} narration`}
          >
            🔊 Listen
          </button>
          {planet.planetSound && (
            <button
              type="button"
              className="px-3 py-1 rounded bg-secondary text-foreground hover:bg-secondary/80 transition border border-border"
              onClick={playPlanetSound}
              aria-label={`Play ${planet.name} sound`}
            >
              {isPlaying ? "⏹️ Stop Sound" : "🎵 Play Sound"}
            </button>
          )}
        </div>
      </div>
        </Card>
        );
    };
