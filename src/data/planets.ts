import sunImg from '@/assets/sun.png';
import mercuryImg from '@/assets/mercury.jpg';
import venusImg from '@/assets/venus.jpg';
import earthImg from '@/assets/earth.jpg';
import marsImg from '@/assets/mars.jpg';
import jupiterImg from '@/assets/jupiter.jpg';
import saturnImg from '@/assets/saturn.jpg';
import uranusImg from '@/assets/uranus.jpg';
import neptuneImg from '@/assets/neptune.jpg';

import sunSound from '@/assets/planet-sounds/sun.mp3';
import mercurySound from '@/assets/planet-sounds/mercury.mp3';
import venusSound from '@/assets/planet-sounds/venus.mp3';
import earthSound from '@/assets/planet-sounds/earth.mp3';
import marsSound from '@/assets/planet-sounds/mars.mp3';
import jupiterSound from '@/assets/planet-sounds/Jupiter.mp3';
import saturnSound from '@/assets/planet-sounds/saturn.mp3';
import uranusSound from '@/assets/planet-sounds/uranus.mp3';
import neptuneSound from '@/assets/planet-sounds/Neptune .mp3';

import type { Planet } from '@/types/planet';

const planets: Planet[] = [
  {
    id: 'sun',
    name: 'Sun',
    subtitle: 'The Star at the Center',
    thumbnail: sunImg,
    color: '#FFD700',
    description: 'The blazing heart of our solar system, source of light and life.',
    planetSound: sunSound,
    story: {
      headline: 'Sun: The Solar Engine',
      introduction: 'The Sun is a G-type main-sequence star that sits at the center of our solar system.',
      sections: [ { title: 'A Giant Ball of Plasma', content: 'The Sun is composed mostly of hydrogen and helium.', image: sunImg } ],
      timeline: [ { year: '4.6 billion years ago', event: 'Sun forms from a collapsing cloud of gas and dust' } ],
      facts: [ { label: 'Type', value: 'G2V Main Sequence Star' } ],
      externalLinks: [],
      audioNarration: ''
    }
  },
  {
    id: 'mercury',
    name: 'Mercury',
    subtitle: 'The Swift Messenger',
    thumbnail: mercuryImg,
    color: '#8C7853',
    description: "The smallest planet and closest to the Sun, a world of extremes.",
    planetSound: mercurySound,
    story: {
      headline: 'Mercury: The Sun\'s Scorched Companion',
      introduction: 'Mercury experiences the most extreme temperature variations of any planet.',
      sections: [ { title: 'A World of Extremes', content: 'Mercury\'s proximity to the Sun creates wild temperature swings', image: mercuryImg } ],
      timeline: [],
      facts: [],
      externalLinks: [],
      audioNarration: ''
    }
  },
  {
    id: 'venus',
    name: 'Venus',
    subtitle: "Earth's Evil Twin",
    thumbnail: venusImg,
    color: '#FFC649',
    description: 'A hellish world hidden beneath toxic clouds, the hottest planet in our solar system.',
    planetSound: venusSound,
    story: {
      headline: 'Venus: Beauty Concealing Inferno',
      introduction: 'Venus is anything but hospitable.',
      sections: [ { title: 'The Runaway Greenhouse', content: 'Venus is the hottest planet', image: venusImg } ],
      timeline: [],
      facts: [],
      externalLinks: [],
      audioNarration: ''
    }
  },
  {
    id: 'earth',
    name: 'Earth',
    subtitle: 'The Blue Marble',
    thumbnail: earthImg,
    color: '#0077BE',
    description: 'Our home planet, a unique oasis of life in the cosmos.',
    planetSound: earthSound,
    story: {
      headline: 'Earth: The Only Known Harbor of Life',
      introduction: 'Earth formed approximately 4.54 billion years ago.',
      sections: [ { title: 'Formation and Early History', content: 'Earth formed approximately 4.54 billion years ago.', image: earthImg } ],
      timeline: [],
      facts: [],
      externalLinks: [],
      audioNarration: ''
    }
  },
  {
    id: 'mars',
    name: 'Mars',
    subtitle: 'The Red Planet',
    thumbnail: marsImg,
    color: '#CD5C5C',
    description: "A cold desert world and humanity's next frontier.",
    planetSound: marsSound,
    story: {
      headline: 'Mars: Humanity\'s Next Great Adventure',
      introduction: 'Mars, the fourth planet from the Sun, beckons humanity.',
      sections: [ { title: 'The Red Landscape', content: 'Mars\' distinctive red color comes from iron oxide.', image: marsImg } ],
      timeline: [],
      facts: [],
      externalLinks: [],
      audioNarration: ''
    }
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    subtitle: 'The Gas Giant',
    thumbnail: jupiterImg,
    color: '#D6B37E',
    description: 'Jupiter is the largest planet in the Solar System.',
    planetSound: jupiterSound,
    story: { headline: 'Jupiter: King of Planets', introduction: '', sections: [], timeline: [], facts: [], externalLinks: [], audioNarration: '' }
  },
  {
    id: 'saturn',
    name: 'Saturn',
    subtitle: 'Ringed Beauty',
    thumbnail: saturnImg,
    color: '#F3D9B6',
    description: 'Known for its extensive ring system.',
    planetSound: saturnSound,
    story: { headline: 'Saturn: The Ringed Giant', introduction: '', sections: [], timeline: [], facts: [], externalLinks: [], audioNarration: '' }
  },
  {
    id: 'uranus',
    name: 'Uranus',
    subtitle: 'The Tilted Planet',
    thumbnail: uranusImg,
    color: '#C7E7E4',
    description: 'An ice giant with a tilted axis.',
    planetSound: uranusSound,
    story: { headline: 'Uranus: The Tilted Ice Giant', introduction: '', sections: [], timeline: [], facts: [], externalLinks: [], audioNarration: '' }
  },
  {
    id: 'neptune',
    name: 'Neptune',
    subtitle: 'The Windy Blue Planet',
    thumbnail: neptuneImg,
    color: '#2B5AA6',
    description: 'An ice giant with strong winds and storms.',
    planetSound: neptuneSound,
    story: { headline: 'Neptune: The Distant Blue', introduction: '', sections: [], timeline: [], facts: [], externalLinks: [], audioNarration: '' }
  }
];

export default planets;

