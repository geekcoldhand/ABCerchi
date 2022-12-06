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
    user: async (parent, { username }) => {
      return getSingleUser(username);
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      // Look up user by the provided email address. Since the `email` is unique
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      // If there is a user found, execute the `isCorrectPassword`
      // instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      // If email and password, sign user into the application with a JWT
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addUser: async (parent, { username, password }) => {},
  },
};
module.exports = resolvers;
