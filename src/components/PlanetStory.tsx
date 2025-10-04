import { useEffect, useState } from "react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { planetNarrations } from "@/data/planetNarrations";
import { X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Planet } from "@/types/planet";

interface PlanetStoryProps {
  planet: Planet | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlanetStory = ({ planet, isOpen, onClose }: PlanetStoryProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && planet) {
      setImageLoaded(false);
      // Announce to screen readers
      const announcement = `Now viewing story for ${planet.name}: ${planet.story.headline}`;
      const ariaLive = document.createElement("div");
      ariaLive.setAttribute("aria-live", "polite");
      ariaLive.setAttribute("class", "sr-only");
      ariaLive.textContent = announcement;
      document.body.appendChild(ariaLive);
      setTimeout(() => document.body.removeChild(ariaLive), 1000);
    }
  }, [isOpen, planet]);


  const { speak } = useTextToSpeech();
  if (!planet) return null;
  const { story } = planet;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-5xl h-[90vh] p-0 bg-card border-primary/20"
        aria-describedby="planet-story-description"
      >
        <DialogHeader className="sr-only">
          <h2>{story.headline}</h2>
        </DialogHeader>
        
        <ScrollArea className="h-full">
          <div className="relative">
            {/* Hero Section */}
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={planet.thumbnail}
                alt={`${planet.name} hero image`}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, hsl(var(--card)) 100%)`
                }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="animate-slide-in">
                  <h1 className="text-5xl font-bold text-foreground mb-2 text-glow">
                    {story.headline}
                  </h1>
                  <p className="text-xl text-foreground/90">
                    {planet.subtitle}
                  </p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-foreground hover:bg-background/20"
                onClick={onClose}
                aria-label="Close planet story"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-8 space-y-8">
              {/* Introduction */}
              <div id="planet-story-description" className="text-lg text-foreground/90 leading-relaxed animate-fade-in">
                {story.introduction}
              </div>

              <Separator className="bg-border" />

              {/* Story Sections */}
              {story.sections.map((section, index) => (
                <article 
                  key={index}
                  className="space-y-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-3xl font-bold text-foreground">
                    {section.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {section.content}
                  </p>
                  {section.image && (
                    <img
                      src={section.image}
                      alt={`${section.title} illustration`}
                      className="w-full rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  )}
                  {/* it is video section */}
                </article>
              ))}

              <Separator className="bg-border" />

              {/* Timeline */}
              <section className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Timeline</h3>
                <div className="space-y-4" role="list" aria-label="Historical timeline">
                  {story.timeline.map((event, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      role="listitem"
                    >
                      <div className="flex-shrink-0 w-32 font-bold text-primary">
                        {event.year}
                      </div>
                      <div className="flex-1 text-foreground/80">
                        {event.event}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="bg-border" />

              {/* Facts Grid */}
              <section className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Quick Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {story.facts.map((fact, index) => (
                    <div
                      key={index}
                      className="p-4 bg-background/50 rounded-lg border border-border animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="text-sm text-muted-foreground mb-1">
                        {fact.label}
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* External Links */}
              {story.externalLinks && story.externalLinks.length > 0 && (
                <>
                  <Separator className="bg-border" />
                  <section className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Learn More</h3>
                    <div className="flex flex-wrap gap-4">
                      {story.externalLinks.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="gap-2"
                          asChild
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${link.title} - opens in new tab`}
                          >
                            {link.title}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {/* Audio Narration (TTS) */}
              <>
                <Separator className="bg-border" />
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Audio Narration</h3>
                  <button
                    type="button"
                    className="px-3 py-1 rounded bg-primary text-white hover:bg-primary/80 transition"
                    onClick={() => {
                      const narration = planetNarrations[planet.name] || planet.description;
                      speak(narration);
                    }}
                    aria-label={`Listen to ${planet.name} narration`}
                  >
                    🔊 Audio Narration
                  </button>
                </section>
              </>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
