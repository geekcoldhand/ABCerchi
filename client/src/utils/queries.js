const { gql } = require("@apollo/client");

const GET_ME = gql`
  query me($username: String) {
    me(username: $username) {
      username
      savedBooks
    }
  }
`;
