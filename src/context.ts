import { PrismaClient } from '.prisma/client'
import { Request, Response } from 'express'
import { Session, SessionData } from 'express-session'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import Redis from 'ioredis'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query'] : undefined,
})

export const redis = new Redis(process.env.REDIS_URL)

const pubsub = new RedisPubSub({
  publisher: new Redis(process.env.REDIS_URL),
  subscriber: new Redis(process.env.REDIS_URL),
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
