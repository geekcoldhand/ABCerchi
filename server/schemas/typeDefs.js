const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    auth: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {

    users: [User]
    me(username: String!): User
    books: [Book]
    book(title: String!): Book
  }

  type Mutation {
    addUser(username: String, password: String): Auth
    login(username: String, password: String): Auth
    saveBook(username: String, body: String ): Book
    deleteBook(username, bookId ): Book
  }
`;
module.exports = typeDefs;
