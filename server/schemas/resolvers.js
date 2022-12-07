const { AuthenticationError } = require("apollo-server-express");
const {
  getSingleUser,
  createUser,
  login,
  saveBook,
  deleteBook,
} = require("../controllers/user-controller");
const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    me: async (parent, { username }) => {
      return await getSingleUser(username);
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const log = await login(email, password);
      return log;
    },
    addUser: async (parent, { username, password }) => {
      const user = createUser({ username, password });
      return user;
    },

    saveBook: async (parent, { username, body }) => {
      const book = await saveBook({ username, body });
      return book;
    },
    deleteBook: async (parent, { username, bookId }) => {
      const book = await deleteBook(username, bookId);
      return book;
    },
  },
};
module.exports = resolvers;
