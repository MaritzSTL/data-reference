const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require("graphql-tools");

const Recognition = require("./Recognition.js");

const Query = `
  type Query {
    greetings: String
  }
`;

const typeDefs = [Query, Recognition.typeDefs];

const schema = makeExecutableSchema({
  typeDefs
});

addMockFunctionsToSchema({
  schema
});

module.exports = {
  schema
};
