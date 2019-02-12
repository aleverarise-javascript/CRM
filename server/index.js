import express from "express";
// GRAPHQL
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 7001 }, () =>
  console.log(`corriendo en: http://localhost:7001${server.graphqlPath}`)
);
