export interface IFakeData {
  name: string;
  description: string;
  genres: string[];
  releaseYear: number;
  company: string[];
  esrbRating: string;
  averageTimeToBeat: number;
  thumbUrl: string;
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
    thumbUrl: 'WindWaker',
    platform: ['Gamecube'],
  },
  {
    name: 'Metroid Prime',
    description: 'Description for Metroid Prime',
    genres: ['Action-adventure', 'Sci-fi'],
    releaseYear: 2002,
    company: ['Nintendo R&D1'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    thumbUrl: 'MetroidPrime',
    platform: ['GBA'],
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
    thumbUrl: 'DoubleDash',
    platform: ['GameCube'],
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
    thumbUrl: 'RE4',
    platform: ['Gamecube'],
  },
  {
    name: 'Pikmin 2',
    description: 'Description for Pikmin 2',
    genres: ['Simulation'],
    releaseYear: 2001,
    company: ['Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 60,
    thumbUrl: 'Pikmin2',
    platform: ['Gamecube'],
  },
  {
    name: 'Sonic Adventure 2 Battle',
    description:
      'An action-adventure game featuring Sonic and his friends as they race against the evil Dr. Eggman to save the world.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2002,
    company: ['Sonic Team', 'Sega'],
    esrbRating: 'E',
    averageTimeToBeat: 12,
    thumbUrl: 'SA2Battle',
    platform: ['GameCube'],
  },
  {
    name: 'Animal Crossing',
    description:
      'A delightful life simulation game where you move to a peaceful village and interact with anthropomorphic animal neighbors.',
    genres: ['Life Simulation'],
    releaseYear: 2001,
    company: ['Nintendo EAD'],
    esrbRating: 'E',
    averageTimeToBeat: 100,
    thumbUrl: 'AnimalCrossing',
    platform: ['GameCube'],
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
    thumbUrl: 'AirRide',
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
    thumbUrl: 'PaperMario',
    platform: ['Gamecube'],
  },
  {
    name: 'Pokémon Colosseum',
    description: 'Description for Pokémon Colosseum',
    genres: ['Role-Playing'],
    releaseYear: 2005,
    company: ['Game Freak', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 25,
    thumbUrl: 'PokemonColosseum',
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
    thumbUrl: 'EternalDarkness',
    platform: ['Gamecube'],
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
    thumbUrl: 'Melee',
    platform: ['Gamecube'],
  },
  {
    name: 'Chibi-Robo!',
    description:
      'An adventure game where you play as a tiny robot named Chibi-Robo who helps a family with their household chores and solves mysteries.',
    genres: ['Adventure'],
    releaseYear: 2005,
    company: ['Skip Ltd.', 'Nintendo EAD'],
    esrbRating: 'E',
    averageTimeToBeat: 12,
    platform: ['GameCube'],
    thumbUrl: 'ChibiRobo',
  },
  {
    name: 'Crazy Taxi',
    description:
      'An arcade-style racing game where you take on the role of a taxi driver, racing against the clock to pick up and drop off passengers.',
    genres: ['Racing'],
    releaseYear: 2001,
    company: ['Sega'],
    esrbRating: 'T',
    averageTimeToBeat: 2,
    platform: ['GameCube'],
    thumbUrl: 'CrazyTaxi',
  },
  {
    name: 'F-Zero GX',
    description:
      'A high-speed futuristic racing game featuring a wide array of futuristic vehicles and intense tracks.',
    genres: ['Racing'],
    releaseYear: 2003,
    company: ['Amusement Vision', 'Sega'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    platform: ['GameCube'],
    thumbUrl: 'FZeroGX',
  },
  {
    name: 'Ikaruga',
    description:
      'A vertically scrolling shooter game known for its unique polarity-switching mechanic, where players switch between two polarities to absorb or deflect enemy bullets.',
    genres: ['Shooter'],
    releaseYear: 2003,
    company: ['Treasure'],
    esrbRating: 'E',
    averageTimeToBeat: 2,
    platform: ['GameCube'],
    thumbUrl: 'Ikaruga',
  },
  {
    name: "Luigi's Mansion",
    description:
      'An action-adventure game where Luigi must navigate a haunted mansion to rescue his brother Mario.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2001,
    company: ['Nintendo EAD'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    platform: ['GameCube'],
    thumbUrl: 'LuigiMansion',
  },
  {
    name: 'Metal Gear Solid: The Twin Snakes',
    description:
      'A reimagining of the original Metal Gear Solid game with improved graphics and gameplay mechanics.',
    genres: ['Action', 'Stealth'],
    releaseYear: 2004,
    company: ['Konami', 'Silicon Knights'],
    esrbRating: 'M',
    averageTimeToBeat: 10,
    platform: ['GameCube'],
    thumbUrl: 'MGS1',
  },
  {
    name: 'Phantasy Star Online Episode I & II',
    description:
      'An online multiplayer action RPG set in a sci-fi universe where players can team up to explore various worlds and battle enemies.',
    genres: ['Action', 'RPG'],
    releaseYear: 2002,
    company: ['Sonic Team', 'Sega'],
    esrbRating: 'T',
    averageTimeToBeat: 40,
    platform: ['GameCube'],
    thumbUrl: 'PhantasyStar',
  },
  {
    name: 'Pikmin',
    description:
      'A real-time strategy game where players control Captain Olimar and command a group of colorful creatures called Pikmin to solve puzzles and collect spaceship parts.',
    genres: ['Strategy'],
    releaseYear: 2001,
    company: ['Nintendo EAD'],
    esrbRating: 'E',
    averageTimeToBeat: 10,
    platform: ['GameCube'],
    thumbUrl: 'Pikmin',
  },
  {
    name: 'Resident Evil',
    description:
      'A survival horror game and a remake of the original Resident Evil, known for its improved graphics and gameplay.',
    genres: ['Survival Horror'],
    releaseYear: 2002,
    company: ['Capcom'],
    esrbRating: 'M',
    averageTimeToBeat: 10,
    platform: ['GameCube'],
    thumbUrl: 'RE',
  },
  {
    name: 'Shadow the Hedgehog',
    description:
      "An action-adventure game featuring Sonic's rival, Shadow the Hedgehog, as he embarks on a quest to uncover his past.",
    genres: ['Action', 'Adventure'],
    releaseYear: 2005,
    company: ['Sega'],
    esrbRating: 'E10+',
    averageTimeToBeat: 8,
    platform: ['GameCube'],
    thumbUrl: 'Shadow',
  },
  {
    name: 'SoulCalibur II',
    description:
      'A fighting game featuring a roster of unique characters, each with their own weapon-based fighting style.',
    genres: ['Fighting'],
    releaseYear: 2003,
    company: ['Namco'],
    esrbRating: 'T',
    averageTimeToBeat: 6,
    platform: ['GameCube'],
    thumbUrl: 'SoulCalibur2',
  },
  {
    name: 'Star Wars: Rogue Leader - Rogue Squadron II',
    description:
      'A flight combat game set in the Star Wars universe, where players take on the role of Rebel pilots in various missions.',
    genres: ['Flight Combat'],
    releaseYear: 2001,
    company: ['Factor 5', 'LucasArts'],
    esrbRating: 'T',
    averageTimeToBeat: 6,
    platform: ['GameCube'],
    thumbUrl: 'StarWarsRougeLeader',
  },
  {
    name: 'Super Mario Strikers',
    description:
      'An arcade-style soccer game featuring Mario and friends, known for its fast-paced and competitive gameplay.',
    genres: ['Sports'],
    releaseYear: 2005,
    company: ['Next Level Games', 'Nintendo'],
    esrbRating: 'E',
    averageTimeToBeat: 8,
    platform: ['GameCube'],
    thumbUrl: 'Strikers',
  },
  {
    name: "Tony Hawk's Pro Skater 3",
    description:
      'A skateboarding game that allows players to perform tricks and complete objectives in various skateparks.',
    genres: ['Sports'],
    releaseYear: 2002,
    company: ['Neversoft', 'Activision'],
    esrbRating: 'T',
    averageTimeToBeat: 8,
    platform: ['GameCube'],
    thumbUrl: 'THPS3',
  },
  {
    name: 'Tomb Raider: Legend',
    description:
      'An action-adventure game where players control Lara Croft as she embarks on a quest to uncover the mysteries of ancient artifacts.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2006,
    company: ['Crystal Dynamics', 'Eidos Interactive'],
    esrbRating: 'T',
    averageTimeToBeat: 10,
    platform: ['GameCube'],
    thumbUrl: 'TombRaiderLegend',
  },
  {
    name: 'The Legend of Zelda: Twilight Princess',
    description:
      'An action-adventure game in The Legend of Zelda series where Link must save Hyrule from an impending darkness.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2006,
    company: ['Nintendo EAD', 'Tantalus Media'],
    esrbRating: 'T',
    averageTimeToBeat: 30,
    platform: ['GameCube'],
    thumbUrl: 'TwilightPrincess',
  },
  {
    name: 'BloodRayne',
    description:
      'An action-adventure game where players control Rayne, a dhampir, as she battles supernatural threats.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2002,
    company: ['Terminal Reality', 'Majesco Entertainment'],
    esrbRating: 'M',
    averageTimeToBeat: 8,
    platform: ['GameCube'],
    thumbUrl: 'Bloodrayne',
  },
  {
    name: 'Beyond Good & Evil',
    description:
      'An action-adventure game where players take on the role of a photojournalist named Jade as she investigates a conspiracy on a distant planet.',
    genres: ['Action', 'Adventure'],
    releaseYear: 2003,
    company: ['Ubisoft Montpellier', 'Ubisoft'],
    esrbRating: 'T',
    averageTimeToBeat: 12,
    platform: ['GameCube'],
    thumbUrl: 'Beyond',
  },
];
