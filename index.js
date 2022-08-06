import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import typeDefs from './graphql/typeDefs/'
import resolvers from './graphql/resolvers'
import Auth from './services/auth.service'
import express from 'express'
import { port, urlMONGODB } from './configs'
const {
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require('graphql-upload')
import http from 'http'

async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  const app = express()
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app)

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cache: 'bounded',
    csrfPrevention: true,
    context: ({ req }) => {
      return {
        ...req,
        userId: req ? Auth.getUserId({ req }) : null,
      }
    },
  })

  // More required logic for integrating with Express
  await server.start()
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/',
  })

  // Modified server startup
  await new Promise((resolve) => httpServer.listen({ port: port || 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

// This middleware should be added before calling `applyMiddleware`.

mongoose
  .connect('mongodb+srv://tuehd:0917977835@cluster0.r5mdp.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  })
  .then(() => {
    startApolloServer(typeDefs, resolvers)
  })
