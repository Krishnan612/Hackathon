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
// Filenames in the repo are case-sensitive on Linux (Netlify). Match exact names below.
import mercurySound from '@/assets/planet-sounds/Mercury.mp3';
import venusSound from '@/assets/planet-sounds/Venus.mp3';
import earthSound from '@/assets/planet-sounds/earth.mp3';
import marsSound from '@/assets/planet-sounds/mars.mp3';
import jupiterSound from '@/assets/planet-sounds/Jupiter.mp3';
import saturnSound from '@/assets/planet-sounds/saturn.mp3';
import uranusSound from '@/assets/planet-sounds/uranus.mp3';
import neptuneSound from '@/assets/planet-sounds/Neptune.mp3';

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
      introduction: 'Mercury experiences the most extreme temperature variations of any planet. Its surface is heavily cratered and resembles the Moon.',
      sections: [
        { title: 'A World of Extremes', content: 'Mercury\'s proximity to the Sun creates wild temperature swings between day and night.', image: mercuryImg },
        { title: 'Surface & Composition', content: 'Mercury is a rocky planet with a large iron core and a very thin exosphere.' }
      ],
      timeline: [
        { year: '1974', event: 'Mariner 10 conducts the first flybys of Mercury' },
        { year: '2011', event: 'MESSENGER enters orbit and maps the surface' }
      ],
      facts: [
        { label: 'Distance from Sun', value: '57.9 million km' },
        { label: 'Diameter', value: '4,880 km' },
        { label: 'Moons', value: '0' }
      ],
      externalLinks: [
        { title: 'NASA Mercury Overview', url: 'https://solarsystem.nasa.gov/planets/mercury/overview/' }
      ],
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
      introduction: 'Venus has a thick, toxic atmosphere and surface temperatures hot enough to melt lead. It is similar in size to Earth but very different in environment.',
      sections: [
        { title: 'The Runaway Greenhouse', content: 'Venus\' dense CO₂ atmosphere traps heat creating extreme surface temperatures.', image: venusImg },
        { title: 'Clouds and Atmosphere', content: 'The cloud deck is composed of sulfuric acid and hides the surface from visible light.' }
      ],
      timeline: [
        { year: '1962', event: 'Mariner 2 performs the first successful Venus flyby' },
        { year: '1985', event: 'Magellan maps the surface with radar' }
      ],
      facts: [
        { label: 'Distance from Sun', value: '108.2 million km' },
        { label: 'Diameter', value: '12,104 km' },
        { label: 'Moons', value: '0' }
      ],
      externalLinks: [
        { title: 'NASA Venus', url: 'https://solarsystem.nasa.gov/planets/venus/overview/' }
      ],
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
      introduction: 'Earth formed approximately 4.54 billion years ago and remains the only known world to host life. It has a protective atmosphere and abundant liquid water.',
      sections: [ { title: 'Formation and Early History', content: 'Earth formed approximately 4.54 billion years ago and developed oceans and an atmosphere that supported life.', image: earthImg } ],
      timeline: [
        { year: '4.5 billion years ago', event: 'Formation of Earth' },
        { year: '3.8 billion years ago', event: 'Earliest evidence of life' }
      ],
      facts: [
        { label: 'Distance from Sun', value: '149.6 million km' },
        { label: 'Diameter', value: '12,742 km' },
        { label: 'Moons', value: '1 (Moon)' }
      ],
      externalLinks: [
        { title: 'NASA Earth', url: 'https://earthobservatory.nasa.gov/' }
      ],
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
      introduction: 'Mars, the fourth planet from the Sun, beckons humanity with its rusty surface and evidence of past water.',
      sections: [ { title: 'The Red Landscape', content: 'Mars\' distinctive red color comes from iron oxide and features the tallest volcano in the solar system.', image: marsImg } ],
      timeline: [
        { year: '1976', event: 'Viking landers return first surface images' },
        { year: '2021', event: 'Perseverance lands in Jezero Crater' }
      ],
      facts: [
        { label: 'Distance from Sun', value: '227.9 million km' },
        { label: 'Diameter', value: '6,779 km' },
        { label: 'Moons', value: '2 (Phobos, Deimos)' }
      ],
      externalLinks: [
        { title: 'NASA Mars Exploration', url: 'https://mars.nasa.gov/' }
      ],
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
    story: {
      headline: 'Jupiter: King of Planets',
      introduction: 'Jupiter is a massive gas giant with powerful storms and a large system of moons.',
      sections: [ { title: 'A Giant with Many Moons', content: 'Jupiter\'s gravity shaped the solar system and it hosts the four Galilean moons.' , image: jupiterImg } ],
      timeline: [ { year: '1610', event: 'Galileo discovers the four largest moons' } ],
      facts: [ { label: 'Diameter', value: '139,820 km' }, { label: 'Moons', value: '95+' } ],
      externalLinks: [ { title: 'NASA Jupiter', url: 'https://solarsystem.nasa.gov/planets/jupiter/overview/' } ],
      audioNarration: ''
    }
  },
  {
    id: 'saturn',
    name: 'Saturn',
    subtitle: 'Ringed Beauty',
    thumbnail: saturnImg,
    color: '#F3D9B6',
    description: 'Known for its extensive ring system.',
    planetSound: saturnSound,
    story: {
      headline: 'Saturn: The Ringed Giant',
      introduction: 'Saturn is famous for its spectacular ring system and many moons.',
      sections: [ { title: 'Rings and Moons', content: 'Saturn\'s rings are made of ice and rock; Titan and Enceladus are scientifically interesting moons.', image: saturnImg } ],
      timeline: [ { year: '1655', event: 'Christiaan Huygens discovers Titan' } ],
      facts: [ { label: 'Diameter', value: '116,460 km' }, { label: 'Rings', value: 'Extensive, visible from Earth' } ],
      externalLinks: [ { title: 'NASA Saturn', url: 'https://solarsystem.nasa.gov/planets/saturn/overview/' } ],
      audioNarration: ''
    }
  },
  {
    id: 'uranus',
    name: 'Uranus',
    subtitle: 'The Tilted Planet',
    thumbnail: uranusImg,
    color: '#C7E7E4',
    description: 'An ice giant with a tilted axis.',
    planetSound: uranusSound,
    story: {
      headline: 'Uranus: The Tilted Ice Giant',
      introduction: 'Uranus rotates on its side, giving it extreme seasons; it\'s an ice giant with a pale cyan color.',
      sections: [ { title: 'A Sideways Planet', content: 'Uranus\' extreme axial tilt likely resulted from a giant impact early in its history.', image: uranusImg } ],
      timeline: [ { year: '1781', event: 'William Herschel discovers Uranus' } ],
      facts: [ { label: 'Diameter', value: '50,724 km' }, { label: 'Moons', value: '27' } ],
      externalLinks: [ { title: 'NASA Uranus', url: 'https://solarsystem.nasa.gov/planets/uranus/overview/' } ],
      audioNarration: ''
    }
  },
  {
    id: 'neptune',
    name: 'Neptune',
    subtitle: 'The Windy Blue Planet',
    thumbnail: neptuneImg,
    color: '#2B5AA6',
    description: 'An ice giant with strong winds and storms.',
    planetSound: neptuneSound,
    story: {
      headline: 'Neptune: The Distant Blue',
      introduction: 'Neptune is a windy ice giant known for strong storms and a deep blue color.',
      sections: [ { title: 'Windy Blue World', content: 'Neptune\'s fast winds and dark storms make it one of the most dynamic outer planets.', image: neptuneImg } ],
      timeline: [ { year: '1846', event: 'Neptune discovered by mathematical prediction and observation' } ],
      facts: [ { label: 'Diameter', value: '49,244 km' }, { label: 'Moons', value: '14+' } ],
      externalLinks: [ { title: 'NASA Neptune', url: 'https://solarsystem.nasa.gov/planets/neptune/overview/' } ],
      audioNarration: ''
    }
  }
];

export default planets;

