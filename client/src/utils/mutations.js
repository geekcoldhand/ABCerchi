const { gql } = require("@apollo/client");

const ADD_USER = gql`
  mutation addUser($username: String, $password: String) {
    addUser(username: $username, password: $password) {
      username
      password
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($username: String, $password: String) {
    login(username: $username, password: $password) {
      username
      password
    }
  }
`;

const SAVE_BOOK = gql`
  mutation saveBook($username: String, $body: String) {
    saveBook(username: $username, body: $body) {
      username
      body
    }
  }
`;

const REMOVE_BOOK = gql`
  mutation deleteBook($username: String, $bookId: String) {
    deleteBook(username: $username, bookId: $bookID) {
      username
      bookID
    }
  }
`;
