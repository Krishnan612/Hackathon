export interface Planet {
  id: string;
  name: string;
  subtitle: string;
  thumbnail: string;
  color: string;
  description: string;
  story: PlanetStory;
}

export interface PlanetStory {
  headline: string;
  introduction: string;
  sections: StorySection[];
  timeline: TimelineEvent[];
  facts: Fact[];
  externalLinks?: ExternalLink[];
  audioNarration?: string;
}

export interface StorySection {
  title: string;
  content: string;
  image?: string;
  video?: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface ExternalLink {
  title: string;
  url: string;
}
