# NASA Space Storytelling Website - Complete Development Guide

## 📋 Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Installation & Setup](#installation--setup)
3. [Data Model](#data-model)
4. [Component Documentation](#component-documentation)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Performance Optimization](#performance-optimization)
7. [Story Authoring Guide](#story-authoring-guide)
8. [NASA API Integration](#nasa-api-integration)
9. [Deployment](#deployment)
10. [Next Steps](#next-steps)

---

## 1. Architecture Overview

### File Structure
```
src/
├── assets/               # Images, videos, audio files
│   ├── space-hero.jpg
│   ├── earth.jpg
│   ├── mars.jpg
│   └── jupiter.jpg
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── PlanetCard.tsx   # Individual planet card
│   ├── PlanetGrid.tsx   # Grid layout for planets
│   └── PlanetStory.tsx  # Story modal/dialog
├── data/                # Data modules (imports images/audio so Vite bundles assets)
│   └── planets.ts       # Planet stories database
├── pages/               # Route pages
│   └── Index.tsx        # Main landing page
├── types/               # TypeScript definitions
│   └── planet.ts        # Planet data types
├── index.css            # Global styles & design tokens
└── main.tsx             # App entry point
```

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast HMR, optimized builds)
- **Styling**: Tailwind CSS with custom NASA theme
- **UI Components**: shadcn/ui (Radix primitives)
- **Routing**: React Router DOM
- **State**: React hooks (useState, useEffect)
- **Data Fetching**: React Query (recommended for NASA APIs)

---

## 2. Installation & Setup

### Required Packages
```bash
# Core dependencies (already included in Lovable projects)
npm install react react-dom react-router-dom
npm install -D typescript @types/react @types/react-dom

# UI & Styling (already included)
npm install tailwindcss tailwindcss-animate
npm install @radix-ui/react-dialog @radix-ui/react-scroll-area
npm install class-variance-authority clsx tailwind-merge

# Recommended additions for full features
npm install @tanstack/react-query  # API data fetching & caching
npm install framer-motion          # Advanced animations (optional)
npm install react-lazy-load-image-component  # Image lazy loading
```

### Environment Setup
Create a `.env.local` file in project root (for NASA API keys):
```env
VITE_NASA_API_KEY=your_nasa_api_key_here
```
Get your free NASA API key at: https://api.nasa.gov/

---

## 3. Data Model

### Planet Object Schema
```typescript
interface Planet {
  id: string;              // Unique identifier (e.g., "earth")
  name: string;            // Display name (e.g., "Earth")
  subtitle: string;        // Tagline (e.g., "The Blue Marble")
  thumbnail: string;       // Path to planet image
  color: string;           // Hex color for theming
  description: string;     // Short description for card
  story: PlanetStory;      // Full narrative content
}

interface PlanetStory {
  headline: string;              // Main story title
  introduction: string;          // Opening paragraph
  sections: StorySection[];      // Content sections
  timeline: TimelineEvent[];     // Historical events
  facts: Fact[];                 // Scientific data
  externalLinks?: ExternalLink[]; // NASA resources
  audioNarration?: string;       // Audio file URL
}

interface StorySection {
  title: string;      // Section heading
  content: string;    // Body text
  image?: string;     // Optional image URL
  video?: string;     // Optional video URL
}

interface TimelineEvent {
  year: string;       // Timeline date/year
  event: string;      // Description
}

interface Fact {
  label: string;      // Fact category (e.g., "Diameter")
  value: string;      // Fact value (e.g., "12,742 km")
}

interface ExternalLink {
  title: string;      // Link text
  url: string;        // External URL
}
```

### Planet data (src/data/planets.ts)
See `src/data/planets.ts` for examples. This TypeScript module imports assets so that Vite can bundle images and audio during the build. Structure:
```json
[
  {
    "id": "earth",
    "name": "Earth",
    "subtitle": "The Blue Marble",
    "thumbnail": "/src/assets/earth.jpg",
    "color": "#0077BE",
    "description": "Our home planet...",
    "story": {
      "headline": "Earth: The Only Known Harbor of Life",
      "introduction": "In the vast cosmic ocean...",
      "sections": [...],
      "timeline": [...],
      "facts": [...],
      "externalLinks": [...]
    }
  }
]
```

---

## 4. Component Documentation

### PlanetCard Component
**Purpose**: Displays individual planet as interactive card  
**Props**:
- `planet: Planet` - Planet data object
- `onClick: () => void` - Click handler

**Key Features**:
- Keyboard accessible (Enter/Space to activate)
- Hover animations (scale, glow effects)
- ARIA labels for screen readers
- Lazy-loaded images

**Usage**:
```tsx
<PlanetCard
  planet={earthData}
  onClick={() => handlePlanetClick(earthData)}
/>
```

### PlanetGrid Component
**Purpose**: Responsive grid layout for all planets  
**Props**:
- `planets: Planet[]` - Array of planet objects
- `onPlanetClick: (planet: Planet) => void` - Selection handler

**Key Features**:
- Responsive grid (1/2/3 columns)
- Staggered fade-in animations
- Semantic list markup for accessibility

**Usage**:
```tsx
<PlanetGrid
  planets={planetsData}
  onPlanetClick={handlePlanetClick}
/>
```

### PlanetStory Component
**Purpose**: Full-screen story modal with multimedia  
**Props**:
- `planet: Planet | null` - Selected planet (null when closed)
- `isOpen: boolean` - Modal visibility state
- `onClose: () => void` - Close handler

**Key Features**:
- Lazy-loaded images/videos
- Audio controls for narration
- Keyboard navigation (Esc to close)
- Screen reader announcements
- External link handling

**Usage**:
```tsx
<PlanetStory
  planet={selectedPlanet}
  isOpen={isStoryOpen}
  onClose={() => setIsStoryOpen(false)}
/>
```

### Interaction Flow
```
1. User sees PlanetGrid with cards
2. User clicks/keyboard activates PlanetCard
3. onClick triggers state update: setSelectedPlanet(planet)
4. setIsStoryOpen(true) opens PlanetStory modal
5. Modal loads media lazily (images, video, audio)
6. User reads story, views timeline, facts
7. User closes modal (X button, Esc key, outside click)
8. State resets: setIsStoryOpen(false)
```

---

## 5. Accessibility Guidelines

### WCAG 2.1 Level AA Compliance Checklist

#### Keyboard Navigation
- ✅ All interactive elements (cards, buttons, links) are keyboard accessible
- ✅ Logical tab order maintained
- ✅ Enter/Space activate clickable cards
- ✅ Esc closes modal dialogs
- ✅ Focus indicators visible (outline, glow effects)

#### Screen Reader Support
- ✅ Semantic HTML (`<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- ✅ ARIA labels on interactive elements (`aria-label`, `aria-describedby`)
- ✅ Role attributes (`role="button"`, `role="list"`, `role="listitem"`)
- ✅ Live region announcements when modal opens
- ✅ Alt text on all images (descriptive, not decorative)

#### Visual & Motion
- ✅ Color contrast ratios meet WCAG AA standards (use contrast checkers)
- ✅ Text readable at 200% zoom
- ✅ Animations respect `prefers-reduced-motion` (add CSS media query)
- ✅ Focus indicators never hidden

#### Media Accessibility
- ✅ Video controls accessible via keyboard
- ✅ Audio controls with play/pause/volume
- ✅ Captions for videos (add via `<track>` elements)
- ✅ Transcripts for audio narration (add as expandable text)

### Implementation Example: Reduced Motion
Add to `src/index.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Performance Optimization

### Image Optimization
1. **Format**: Use WebP for better compression (fallback to JPEG)
2. **Responsive Images**: Use `srcset` for different screen sizes
3. **Lazy Loading**: Already implemented with `loading="lazy"`
4. **Optimization Tools**: Use ImageOptim, Squoosh, or build-time tools

```tsx
// Enhanced image component
<img
  src="/images/earth-800.webp"
  srcSet="/images/earth-400.webp 400w,
          /images/earth-800.webp 800w,
          /images/earth-1200.webp 1200w"
  sizes="(max-width: 768px) 400px, 800px"
  alt="Earth from space"
  loading="lazy"
  decoding="async"
/>
```

### Code Splitting
1. **Route-based**: React Router + `React.lazy`
```tsx
const PlanetStory = lazy(() => import('@/components/PlanetStory'));
```

2. **Component-based**: Split heavy components
```tsx
<Suspense fallback={<LoadingSpinner />}>
  <PlanetStory planet={selected} />
</Suspense>
```

### Data Fetching with React Query
```tsx
// Example: Fetch NASA APOD (Astronomy Picture of the Day)
import { useQuery } from '@tanstack/react-query';

function useNasaApod() {
  return useQuery({
    queryKey: ['apod'],
    queryFn: async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`
      );
      if (!res.ok) throw new Error('Failed to fetch APOD');
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });
}

// Usage in component
const { data, isLoading, error } = useNasaApod();
```

### SEO Best Practices
1. **Meta Tags**: Update `index.html`
```html
<title>NASA Space Stories | Interactive Solar System Explorer</title>
<meta name="description" content="Explore immersive stories about planets in our solar system with stunning NASA imagery and scientific facts." />
<meta property="og:title" content="NASA Space Stories" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
```

2. **Structured Data**: Add JSON-LD for rich results
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NASA Space Stories",
  "description": "Interactive space storytelling",
  "url": "https://yoursite.com"
}
</script>
```

3. **Preload Critical Assets**:
```html
<link rel="preload" href="/assets/space-hero.jpg" as="image" />
```

---

## 7. Story Authoring Guide

### Option A: JSON Files (Current Approach)
**Pros**: Simple, version-controlled, no backend needed  
**Cons**: Requires code deploy for updates

**Adding a New Planet**:
1. Create planet images in `src/assets/` (e.g., `saturn.jpg`)
2. Add planet object to `src/data/planets.ts`:
```json
{
  "id": "saturn",
  "name": "Saturn",
  "subtitle": "Lord of the Rings",
  "thumbnail": "/src/assets/saturn.jpg",
  "color": "#F4C542",
  "description": "A gas giant with spectacular rings.",
  "story": {
    "headline": "Saturn: The Jewel of the Solar System",
    "introduction": "Saturn's iconic rings...",
    "sections": [
      {
        "title": "The Ring System",
        "content": "Saturn's rings are composed of...",
        "image": "/src/assets/saturn-rings.jpg"
      }
    ],
    "timeline": [
      { "year": "1610", "event": "Galileo first observes Saturn" }
    ],
    "facts": [
      { "label": "Diameter", "value": "116,460 km" }
    ],
    "externalLinks": [
      { "title": "NASA Saturn", "url": "https://solarsystem.nasa.gov/planets/saturn/" }
    ]
  }
}
```
3. Restart dev server to see changes

### Option B: Headless CMS (Scalable)
**Recommended CMS**: Contentful, Sanity, or Strapi  
**Pros**: Non-technical authors, instant updates, media management  
**Cons**: Additional setup, potential cost

**Integration Steps**:
1. Install CMS client (e.g., `npm install contentful`)
2. Create content model matching Planet interface
3. Replace JSON import with API fetch:
```tsx
// src/hooks/usePlanets.ts
import { useQuery } from '@tanstack/react-query';
import { createClient } from 'contentful';

const client = createClient({
  space: 'your_space_id',
  accessToken: 'your_access_token',
});

export function usePlanets() {
  return useQuery({
    queryKey: ['planets'],
    queryFn: async () => {
      const entries = await client.getEntries({ content_type: 'planet' });
      return entries.items.map(transformPlanetEntry);
    },
  });
}
```

### Versioning & Content Management
1. **Git-based**: Each story edit = commit (track history)
2. **CMS versioning**: Most headless CMS include version control
3. **Review workflow**: Use branches for draft stories
4. **Media organization**: Store images in `assets/planets/planet-name/`

---

## 8. NASA API Integration

### Available NASA APIs
1. **NASA Image and Video Library**: Search NASA media
   - Endpoint: `https://images-assets.nasa.gov/search?q={query}`
2. **Astronomy Picture of the Day (APOD)**: Daily space images
   - Endpoint: `https://api.nasa.gov/planetary/apod`
3. **Mars Rover Photos**: Latest images from Perseverance/Curiosity
   - Endpoint: `https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos`

### Example: Fetch Mars Rover Photos
```tsx
// src/hooks/useMarsPhotos.ts
import { useQuery } from '@tanstack/react-query';

interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  camera: { full_name: string };
}

export function useMarsPhotos(sol: number = 1000) {
  return useQuery({
    queryKey: ['mars-photos', sol],
    queryFn: async (): Promise<MarsPhoto[]> => {
      const apiKey = import.meta.env.VITE_NASA_API_KEY;
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${sol}&api_key=${apiKey}`
      );
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data = await res.json();
      return data.photos.slice(0, 12); // Limit to 12 photos
    },
    retry: 2,
    staleTime: 1000 * 60 * 30, // Cache for 30 minutes
  });
}

// Usage in Mars story component
function MarsPhotoGallery() {
  const { data: photos, isLoading, error } = useMarsPhotos(1000);

  if (isLoading) return <p>Loading photos...</p>;
  if (error) return <p>Failed to load: {error.message}</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos?.map(photo => (
        <img
          key={photo.id}
          src={photo.img_src}
          alt={`Mars ${photo.camera.full_name} - ${photo.earth_date}`}
          loading="lazy"
        />
      ))}
    </div>
  );
}
```

### Error Handling Best Practices
```tsx
// Global error boundary
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div>
              <p>Error: {error.message}</p>
              <button onClick={resetErrorBoundary}>Try again</button>
            </div>
          )}
        >
          <YourApp />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
```

---

## 9. Deployment

### Vercel Deployment (Recommended)
**Why Vercel**: Zero-config for Vite, automatic HTTPS, edge network

**Steps**:
1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Add environment variables:
   - `VITE_NASA_API_KEY` = your_api_key
4. Deploy (automatic on every push)

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Netlify Deployment
**Steps**:
1. Connect repository in Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Environment variables: Add `VITE_NASA_API_KEY`
4. Deploy

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### CORS & API Proxy (if needed)
If NASA API has CORS issues, create a serverless function:

**Vercel Serverless Function** (`api/nasa.ts`):
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { endpoint, ...params } = req.query;
  const queryString = new URLSearchParams(params as Record<string, string>).toString();
  const url = `https://api.nasa.gov${endpoint}?${queryString}&api_key=${process.env.NASA_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'API request failed' });
  }
}
```

Call from frontend:
```tsx
const res = await fetch('/api/nasa?endpoint=/planetary/apod');
```

### Continuous Deployment Checklist
- ✅ Environment variables set in hosting platform
- ✅ Build succeeds locally (`npm run build`)
- ✅ No hardcoded secrets in code
- ✅ Redirect rules for SPA routing
- ✅ Custom domain configured (optional)
- ✅ SSL certificate active (automatic on Vercel/Netlify)

---

## 10. Next Steps Checklist

### Immediate Tasks (Copy & Run)
1. ✅ **Run the starter app**: `npm run dev`
2. ✅ **Explore components**: Modify colors in `src/index.css`
3. ✅ **Add a planet**: Edit `src/data/planets.ts` with Venus or Saturn
4. ✅ **Test accessibility**: Use keyboard only, enable screen reader
5. ✅ **Get NASA API key**: https://api.nasa.gov/ → Add to `.env.local`

### Feature Enhancements
- [ ] Add search/filter for planets
- [ ] Implement planet comparison tool (side-by-side facts)
- [ ] Create interactive solar system map (3D or scalable SVG)
- [ ] Add "random planet" button for discovery
- [ ] Implement sharing (Twitter, Facebook, copy link)
- [ ] Add dark/light mode toggle (use Tailwind's dark mode)

### Content Expansion
- [ ] Add remaining planets (Venus, Saturn, Uranus, Neptune)
- [ ] Include dwarf planets (Pluto, Ceres, Eris)
- [ ] Add moons (Europa, Titan, Enceladus)
- [ ] Create "Journey Through Time" timeline view
- [ ] Add quizzes or interactive learning modules

### Advanced Integrations
- [ ] Integrate NASA Mars Rover API for live photos
- [ ] Add Near-Earth Object (NEO) tracker
- [ ] Implement ISS location tracker
- [ ] Create "Space News" feed from NASA RSS
- [ ] Add 3D planet models using Three.js or Babylon.js

### Production Readiness
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Implement error tracking (Sentry)
- [ ] Set up monitoring (Vercel Analytics)
- [ ] Create sitemap.xml for SEO
- [ ] Add robots.txt
- [ ] Implement Open Graph images for social sharing
- [ ] Run Lighthouse audit (aim for 90+ scores)

---

## Support & Resources

- **NASA APIs**: https://api.nasa.gov/
- **React Query Docs**: https://tanstack.com/query/latest
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Radix UI**: https://www.radix-ui.com/
- **Web Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com/

---

**Happy coding! 🚀 Your space storytelling website is ready to launch.**
