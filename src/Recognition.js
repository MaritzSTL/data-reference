const gql = require("graphql-tag");

// look into defining mocks in here, too: https://www.apollographql.com/docs/graphql-tools/mocking.html

const typeDefs = gql`
  extend type Query {
    name: String
  }
`;

module.exports = {
  typeDefs
};
