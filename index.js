const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./src/schema.js");

const defaultQuery = `query {
  greetings
}`;

const playground = {
  tabs: [
    {
      endpoint: "/graphql",
      name: "Login",
      query: defaultQuery
    }
  ]
};

const server = new ApolloServer({ schema: schema.schema, playground });
const app = express();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
