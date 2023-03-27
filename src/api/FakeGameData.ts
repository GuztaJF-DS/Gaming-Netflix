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
    name: 'Mario & Luigi: Superstar Saga',
    description:
      'Join Mario and Luigi on an epic adventure to save the Beanbean Kingdom.',
    genres: ['Role-Playing', 'Adventure'],
    releaseYear: 2003,
    company: ['AlphaDream', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 20,
    platform: ['Game Boy Advance'],
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
    name: 'Kirby & the Amazing Mirror',
    description:
      'Guide Kirby through a sprawling labyrinth to defeat Dark Meta Knight.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2004,
    company: ['HAL Laboratory', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    platform: ['Game Boy Advance'],
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
    name: 'Golden Sun',
    description: 'Embark on a quest to prevent the release of an ancient evil.',
    genres: ['Role-Playing'],
    releaseYear: 2001,
    company: ['Camelot Software Planning', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 25,
    platform: ['Game Boy Advance'],
  },

  {
    name: 'Fire Emblem',
    description: 'Lead your army to victory in turn-based tactical battles.',
    genres: ['Strategy', 'Role-Playing'],
    releaseYear: 2003,
    company: ['Intelligent Systems', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 25,
    platform: ['Game Boy Advance'],
  },
  {
    name: 'Mario Party 7',
    description:
      'Compete with friends in a variety of fun and wacky minigames.',
    genres: ['Party', 'Board Game'],
    releaseYear: 2005,
    company: ['Hudson Soft', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 3,
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
    name: 'Metroid: Zero Mission',
    description:
      'Explore the planet Zebes and uncover the origins of Samus Aran.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2004,
    company: ['Nintendo', 'Intelligent Systems'],
    esrbRating: 'E',
    averageTimeToBeat: 7,
    platform: ['Game Boy Advance'],
  },
  {
    name: 'Super Mario Sunshine',
    description:
      'Help Mario clean up the mess caused by Bowser and his minions in the beautiful Isle Delfino.',
    genres: ['Action', 'Platformer'],
    releaseYear: 2002,
    company: ['Nintendo EAD'],
    esrbRating: 'E',
    averageTimeToBeat: 15,
    platform: ['Gamecube'],
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
    name: 'The Legend of Zelda: Twilight Princess',
    description:
      'Join Link on his quest to save Hyrule and the Twilight Realm from the dark forces that threaten them.',
    genres: ['Action-adventure'],
    releaseYear: 2006,
    company: ['Nintendo EAD'],
    esrbRating: 'T',
    averageTimeToBeat: 30,
    platform: ['Gamecube'],
  },
  {
    name: 'Star Wars Rogue Squadron II: Rogue Leader',
    description:
      'Take control of various starfighters and relive some of the most iconic moments from the Star Wars movies.',
    genres: ['Action', 'Simulation'],
    releaseYear: 2001,
    company: ['Factor 5', 'LucasArts'],
    esrbRating: 'T',
    averageTimeToBeat: 10,
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
    name: 'The Legend of Zelda: The Minish Cap',
    description:
      'Help Link shrink down to the size of a bug and explore a magical world.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2004,
    company: ['Capcom', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 15,
    platform: ['Game Boy Advance'],
  },
  {
    name: 'Mario Golf: Advance Tour',
    description:
      'Play golf as Mario and friends in this classic GBA sports game.',
    genres: ['Sports'],
    releaseYear: 2004,
    company: ['Camelot Software Planning', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 10,
    platform: ['Game Boy Advance'],
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
    name: 'Final Fantasy Tactics Advance',
    description:
      'Lead a team of heroes in battles and complete quests in this tactical RPG.',
    genres: ['Role-Playing', 'Strategy'],
    releaseYear: 2003,
    company: ['Square Enix', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 40,
    platform: ['Game Boy Advance'],
  },
  {
    name: 'Pikmin 2',
    description:
      'Help Captain Olimar and his Pikmin crew collect treasure and solve puzzles.',
    genres: ['Puzzle', 'Strategy'],
    releaseYear: 2004,
    company: ['Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 15,
    platform: ['Gamecube'],
  },
  {
    name: 'Super Mario Strikers',
    description:
      'Play soccer with Mario and friends in this fast-paced and fun Gamecube game.',
    genres: ['Sports'],
    releaseYear: 2005,
    company: ['Next Level Games', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    platform: ['Gamecube'],
  },
  {
    name: 'F-Zero GX',
    description:
      'Race through futuristic tracks at breakneck speeds in this high-octane racing game.',
    genres: ['Racing'],
    releaseYear: 2003,
    company: ['Amusement Vision', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    platform: ['Gamecube'],
  },
  {
    name: 'Pokemon Colosseum',
    description:
      'In this RPG, the player takes the role of a former member of Team Snagem as he explores the Orre region and collects Pokemon while fighting against Cipher.',
    genres: ['Role-Playing'],
    releaseYear: 2003,
    company: ['Genius Sonority', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 20,
    platform: ['Gamecube'],
  },
];
