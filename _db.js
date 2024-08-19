let games = [
  {
    id: "1",
    title: "Assassin's Creed Valhalla",
    plateform: ["PlayStation 5", "Xbox Series X", "PC"],
  },
  {
    id: "2",
    title: "Cyberpunk 2077",
    plateform: ["PlayStation 4", "Xbox One", "PC"],
  },
  {
    id: "3",
    title: "Animal Crossing: New Horizons",
    plateform: ["Nintendo Switch"],
  },
  {
    id: "4",
    title: "Call of Duty: Warzone",
    plateform: ["PlayStation 5", "Xbox Series X", "PC"],
  },
  {
    id: "5",
    title: "The Last of Us Part II",
    plateform: ["PlayStation 4"],
  },
];

let authors = [
  {
    id: "1",
    name: "Alice Johnson",
    verified: true,
  },
  {
    id: "2",
    name: "Bob Smith",
    verified: false,
  },
  {
    id: "3",
    name: "Charlie Brown",
    verified: true,
  },
  {
    id: "4",
    name: "Diana Miller",
    verified: false,
  },
  {
    id: "5",
    name: "Ethan Wilson",
    verified: true,
  },
];

let reviews = [
  {
    id: "1",
    rating: 5,
    content:
      "Absolutely loved it! The storyline was captivating and the graphics were stunning.",
    game_id: "2",
    author_id: "1",
  },
  {
    id: "2",
    rating: 4,
    content: "Enjoyable experience overall, but encountered a few bugs.",
    game_id: "3",
    author_id: "3",
  },
  {
    id: "3",
    rating: 4,
    content: "Solid game with engaging gameplay mechanics.",
    game_id: "1",
    author_id: "2",
  },
  {
    id: "4",
    rating: 3,
    content:
      "Decent game, but could use some improvements in terms of graphics.",
    game_id: "4",
    author_id: "4",
  },
  {
    id: "5",
    rating: 5,
    content: "One of the best games I've played. Highly recommend it!",
    game_id: "1",
    author_id: "5",
  },
  {
    id: "6",
    rating: 2,
    content: "Disappointing experience. The gameplay felt repetitive.",
    game_id: "5",
    author_id: "3",
  },
  {
    id: "7",
    rating: 4,
    content: "Good game overall, but the storyline could be more engaging.",
    game_id: "2",
    author_id: "4",
  },
  {
    id: "8",
    rating: 5,
    content: "Absolutely stunning. The graphics, the story, everything!",
    game_id: "3",
    author_id: "2",
  },
  {
    id: "9",
    rating: 3,
    content:
      "Mixed feelings about this game. Some aspects were great, while others were lacking.",
    game_id: "4",
    author_id: "1",
  },
  {
    id: "10",
    rating: 4,
    content:
      "Enjoyable gameplay experience, but encountered a few technical issues.",
    game_id: "5",
    author_id: "3",
  },
];

const db = {
  games,
  authors,
  reviews,
};

export default db;
