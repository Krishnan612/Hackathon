import { Card } from "@/components/ui/card";
import { Planet } from "@/types/planet";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

interface PlanetCardProps {
  planet: Planet;
  onClick: () => void;
}

export const PlanetCard = ({ planet, onClick }: PlanetCardProps) => {
  const { speak } = useTextToSpeech();
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
        <button
          type="button"
          className="mt-3 px-3 py-1 rounded bg-primary text-white hover:bg-primary/80 transition"
          onClick={(e) => {
            e.stopPropagation();
            speak(planet.description);
          }}
          aria-label={`Listen to ${planet.name} description`}
        >
          🔊 Listen
        </button>
      </div>
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
    </Card>
  );
};
