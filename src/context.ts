import { PrismaClient } from '.prisma/client'
import { Request, Response } from 'express'
import { Session, SessionData } from 'express-session'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import Redis, { RedisOptions } from 'ioredis'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query'] : undefined,
})

const redisOptions: RedisOptions = {
  host: process.env.REDIS_DOMAIN_NAME,
  port: process.env.REDIS_PORT_NUMBER,
  retryStrategy: (times) => Math.min(times * 50, 2000),
}

export const redis = new Redis(process.env.REDIS_URL)

const pubsub = new RedisPubSub({
  publisher: new Redis(redisOptions),
  subscriber: new Redis(redisOptions),
})

export type Context = {
  redis: Redis.Redis
  prisma: PrismaClient
  pubsub: RedisPubSub
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: string }
  }
  res: Response
  connection: {
    context: {
      req: { session: { userId?: string; passport?: { user?: string } } }
    }
  }
}

export const createContext = ({ req, res, connection }: Context): Context => {
  return { redis, prisma, pubsub, req, res, connection }
}
