import { PrismaClient } from '.prisma/client'
import { Request, Response } from 'express'
import { Session, SessionData } from 'express-session'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import Redis from 'ioredis'
import Stripe from 'stripe'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query'] : undefined,
})

export const redis = new Redis(process.env.REDIS_URL)

const pubsub = new RedisPubSub({
  publisher: new Redis(process.env.REDIS_URL),
  subscriber: new Redis(process.env.REDIS_URL),
})

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
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
  stripe: Stripe
}

export const createContext = ({ req, res, connection }: Context): Context => {
  return { redis, prisma, pubsub, req, res, connection, stripe }
}
