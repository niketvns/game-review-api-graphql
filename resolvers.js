import db from "./_db.js";

export const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    review(_, args, context) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(parent, args, context) {
      return db.games.find((game) => game.id === args.id);
    },
    author(parent, args, context) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(parent, args, context) {
      db.games = db.games.filter((game) => game.id !== args.id);

      return db.games;
    },

    addGame(parent, args, context) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };

      db.games.push(game);

      return game;
    },

    updateGame(parent, args, context) {
      db.games = db.games.map((game) =>
        game.id === args.id ? { ...game, ...args.edits } : game
      );

      return db.games.find((game) => game.id === args.id);
    },
  },
};
