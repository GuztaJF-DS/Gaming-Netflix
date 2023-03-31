interface IFakeData {
  name: string;
  description: string;
  genres: string[];
  releaseYear: number;
  company: string[];
  esrbRating: string;
  averageTimeToBeat: number;
  platform: string[];
  biggerCard?: boolean;
}

export const FakeData: IFakeData[] = [
  {
    name: 'The Legend of Zelda: The Wind Waker',
    description:
      'Link sets out on a seafaring adventure to rescue his sister and save the world from the evil sorcerer Ganon.',
    genres: ['Action-adventure', 'Exploration', 'Puzzle-solving'],
    releaseYear: 2002,
    company: ['Nintendo EAD', 'Capcom'],
    esrbRating: 'E',
    averageTimeToBeat: 28,
    platform: ['Gamecube'],
  },
  {
    name: 'Metroid Fusion',
    description:
      'Samus Aran must stop a dangerous alien parasite from taking over her body and wreaking havoc on the galaxy.',
    genres: ['Action-adventure', 'Platformer', 'Sci-fi'],
    releaseYear: 2002,
    company: ['Nintendo R&D1'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    platform: ['GBA'],
  },
  {
    name: 'Super Smash Bros. Melee',
    description:
      'A multiplayer fighting game featuring a roster of Nintendo characters battling it out in iconic locations from their games.',
    genres: ['Fighting', 'Party'],
    releaseYear: 2001,
    company: ['HAL Laboratory'],
    esrbRating: 'T',
    averageTimeToBeat: 15,
    platform: ['Gamecube'],
  },
  {
    name: 'Kirby Air Ride',
    description:
      'Race through colorful courses as Kirby and his friends in this fast-paced Gamecube game.',
    genres: ['Racing'],
    releaseYear: 2003,
    company: ['HAL Laboratory', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 6,
    platform: ['Gamecube'],
  },
  {
    name: 'Paper Mario: The Thousand-Year Door',
    description:
      'Help Mario on his quest to save Princess Peach from the evil X-Nauts.',
    genres: ['Role-Playing', 'Adventure'],
    releaseYear: 2004,
    company: ['Intelligent Systems', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 30,
    platform: ['Gamecube'],
  },
  {
    name: 'Animal Crossing',
    description:
      'Create your own virtual life in a charming town filled with friendly animals.',
    genres: ['Simulation'],
    releaseYear: 2001,
    company: ['Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 60,
    platform: ['Gamecube'],
  },
  {
    name: 'Pokémon Emerald',
    description: "Catch 'em all and become the Champion in the Hoenn region.",
    genres: ['Role-Playing'],
    releaseYear: 2005,
    company: ['Game Freak', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 25,
    platform: ['Game Boy Advance'],
  },
  {
    name: "Eternal Darkness: Sanity's Requiem",
    description:
      'Play as different characters throughout history and uncover the truth behind a mysterious tome known as the Necronomicon.',
    genres: ['Survival horror', 'Action-adventure'],
    releaseYear: 2002,
    company: ['Silicon Knights', 'Nintendo'],
    esrbRating: 'M',
    averageTimeToBeat: 15,
    platform: ['Gamecube'],
  },
  {
    name: 'Resident Evil 4',
    description:
      "Follow Leon S. Kennedy on his mission to rescue the President's daughter from a remote village filled with terrifying creatures.",
    genres: ['Survival horror', 'Third-person shooter'],
    releaseYear: 2005,
    company: ['Capcom'],
    esrbRating: 'M',
    averageTimeToBeat: 20,
    platform: ['Gamecube'],
  },
  {
    name: 'Mario Kart: Double Dash',
    description:
      'Mario and his friends race karts on a variety of tracks, using power-ups to gain an advantage.',
    genres: ['Racing'],
    releaseYear: 2003,
    company: ['Nintendo EAD'],
    esrbRating: 'E',
    averageTimeToBeat: 8.5,
    platform: ['GameCube'],
  },
];
