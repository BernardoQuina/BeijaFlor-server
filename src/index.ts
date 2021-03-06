import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import connectRedis from 'connect-redis'

import { schema } from './schema/schema'
import { createContext, redis } from './context'
import { passportOauth } from './util/passport'

dotenv.config()

const main = async () => {
  const app = express()

  const RedisStore = connectRedis(session)

  app.use(express.json())

  app.use(
    cors({
      origin: [process.env.ORIGIN, 'https://studio.apollographql.com'],
      credentials: true,
    })
  )

  app.set('trust proxy', 1)

  const sessionMiddleware = session({
    store: new RedisStore({
      client: redis,
      disableTouch: true,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week,
    },
  })

  app.use(sessionMiddleware)

  passportOauth(app)

  const apolloServer = new ApolloServer({
    schema,
    context: createContext,
    subscriptions: {
      onConnect: (_, ws: any) => {
        return new Promise((resolve) =>
          sessionMiddleware(ws.upgradeReq, {} as any, () => {
            resolve({ req: ws.upgradeReq })
          })
        )
      },
    },
  })

  apolloServer.applyMiddleware({ app, cors: false })

  const server = createServer(app)

  apolloServer.installSubscriptionHandlers(server)

  server.listen(process.env.PORT, () => {
    console.log(`Server started on port:${process.env.PORT}`)
  })
}

main().catch((err) => {
  console.log('Server error: ', err)
})
