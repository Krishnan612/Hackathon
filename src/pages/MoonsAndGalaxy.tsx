
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const moons = [
  {
    name: 'Moon (Earth)',
    subtitle: 'Earth\'s Only Natural Satellite',
    thumbnail: '/src/assets/Moon (Earth).png',
    color: '#bfc9d1',
    description: 'The Moon is Earth\'s only natural satellite and the fifth largest moon in the Solar System. It influences Earth\'s tides and has been a source of wonder for humanity throughout history.',
    facts: [
      'Diameter: 3,474 km',
      'Orbital Period: 27.3 days',
      'Distance from Earth: 384,400 km',
      'Surface Gravity: 0.165 g',
      'First human landing: 1969 (Apollo 11)'
    ]
  },
  {
    name: 'Ganymede',
    subtitle: 'Largest Moon of Jupiter',
    thumbnail: '/src/assets/Ganymede.jpg',
    color: '#e0d7c6',
    description: 'Ganymede is the largest moon in the Solar System and is even bigger than Mercury. It has a magnetic field and a possible subsurface ocean.',
    facts: [
      'Diameter: 5,268 km',
      'Orbital Period: 7.15 days',
      'Distance from Jupiter: 1,070,400 km',
      'Discovered: 1610 by Galileo Galilei'
    ]
  },
  {
    name: 'Titan',
    subtitle: 'Largest Moon of Saturn',
    thumbnail: '/src/assets/Titan.png',
    color: '#f5e6b2',
    description: 'Titan is Saturn\'s largest moon and the second largest in the Solar System. It has a thick atmosphere and lakes of liquid methane and ethane.',
    facts: [
      'Diameter: 5,151 km',
      'Orbital Period: 15.95 days',
      'Distance from Saturn: 1,221,870 km',
      'Discovered: 1655 by Christiaan Huygens'
    ]
  },
  {
    name: 'Europa',
    subtitle: 'Icy Moon of Jupiter',
    thumbnail: '/src/assets/Europa.png',
    color: '#dbefff',
    description: 'Europa is one of Jupiter\'s largest moons and is believed to have a subsurface ocean beneath its icy crust, making it a prime candidate for the search for extraterrestrial life.',
    facts: [
      'Diameter: 3,121 km',
      'Orbital Period: 3.55 days',
      'Distance from Jupiter: 670,900 km',
      'Discovered: 1610 by Galileo Galilei'
    ]
  }
];

const galaxies = [
  {
    name: 'Milky Way',
    subtitle: 'Our Home Galaxy',
    thumbnail: '/src/assets/Milky-way.jpg',
    color: '#b3c6e7',
    description: 'The Milky Way is the galaxy that contains our Solar System. It is a barred spiral galaxy with hundreds of billions of stars.',
    facts: [
      'Diameter: ~100,000 light-years',
      'Stars: 100–400 billion',
      'Type: Barred Spiral',
      'Distance to center: ~27,000 light-years'
    ]
  },
  {
    name: 'Andromeda',
    subtitle: 'Nearest Spiral Galaxy',
    thumbnail: '/src/assets/Andromeda-gal.jpg',
    color: '#e3d1f7',
    description: 'The Andromeda Galaxy is the closest spiral galaxy to the Milky Way and is on a collision course with our galaxy billions of years from now.',
    facts: [
      'Diameter: ~220,000 light-years',
      'Stars: 1 trillion',
      'Distance from Earth: 2.537 million light-years',
      'Type: Spiral'
    ]
  },
  {
    name: 'Sombrero Galaxy',
    subtitle: 'Unusual Spiral Galaxy',
    thumbnail: '/src/assets/Sombrero-Galaxy.jpeg',
    color: '#f7e3c1',
    description: 'The Sombrero Galaxy is known for its bright nucleus and large central bulge, giving it the appearance of a sombrero hat.',
    facts: [
      'Diameter: ~49,000 light-years',
      'Distance from Earth: 31 million light-years',
      'Type: Spiral'
    ]
  },
  {
  name: 'Messier 87 (M87)',
  subtitle: 'Giant Elliptical Galaxy',
  thumbnail: '/src/assets/Messier.png',
  color: '#d1e0f7',
  description: 'Messier 87 is a massive elliptical galaxy in the Virgo Cluster, famous for housing a supermassive black hole at its center, which was the first black hole ever imaged by the Event Horizon Telescope.',
  facts: [
    'Diameter: ~120,000 light-years',
    'Distance from Earth: ~53 million light-years',
    'Type: Elliptical',
    'Supermassive black hole mass: ~6.5 billion solar masses'
  ]
}

];


const MoonGalaxyCard = ({ item }: { item: any }) => (
  <Card className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 planet-glow">
    <div className="aspect-square relative overflow-hidden">
      <img
        src={item.thumbnail}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${item.color}20 0%, transparent 100%)` }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-glow transition-all">
        {item.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 font-medium">{item.subtitle}</p>
      <p className="text-foreground/80 text-sm leading-relaxed mb-2">{item.description}</p>
      <ul className="text-xs text-muted-foreground list-disc pl-5">
        {item.facts.map((fact: string, idx: number) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  </Card>
);


const MoonsAndGalaxy: React.FC = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto max-w-7xl flex flex-col items-center">
      <div className="text-center mb-16 animate-fade-in max-w-2xl">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-glow">Moons &amp; Galaxies</h2>
        <p className="text-xl text-muted-foreground">Discover fascinating facts about major moons and galaxies in our universe.</p>
      </div>
      <h3 className="text-3xl font-bold text-foreground mb-6 mt-8">Moons</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
        {moons.map((moon, idx) => (
          <MoonGalaxyCard key={idx} item={moon} />
        ))}
      </div>
      <h3 className="text-3xl font-bold text-foreground mb-6 mt-8">Galaxies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {galaxies.map((galaxy, idx) => (
          <MoonGalaxyCard key={idx} item={galaxy} />
        ))}
      </div>
    </div>
  </section>
);

export default MoonsAndGalaxy;
