import { Application } from 'express'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { prisma } from '../context'

export const passportOauth = (app: Application) => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })

  passport.deserializeUser(async (id: string, done) => {
    const user = await prisma.user.findUnique({ where: { id } })

    return done(null, user)
  })

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      // Called on successful authentication
      async (_accessToken, _refreshToken, profile, cb) => {
        const userExists = await prisma.user.findUnique({
          where: { email: profile.emails![0].value },
        })

        if (!userExists) {
          const newUser = await prisma.user.create({
            data: {
              name: profile.displayName,
              email: profile.emails![0].value,
              googleId: profile.id,
              photo: profile.photos ? profile.photos[0].value : null,
            },
          })

          await prisma.cart.create({
            data: { user: { connect: { id: newUser.id } } },
          })

          await prisma.wishList.create({
            data: { user: { connect: { id: newUser.id } } },
          })

          cb(undefined, newUser)
        } else {
          if (userExists.photo !== profile.photos![0].value) {
            await prisma.user.update({
              where: { email: profile.emails![0].value },
              data: {
                photo: profile.photos![0].value,
              },
            })
          }

          const cartExists = await prisma.cart.findFirst({
            where: { userId: userExists.id },
          })

          if (!cartExists) {
            await prisma.cart.create({
              data: { user: { connect: { id: userExists.id } } },
            })
          }

          const wishListExists = await prisma.wishList.findFirst({
            where: { userId: userExists.id },
          })

          if (!wishListExists) {
            await prisma.wishList.create({
              data: { user: { connect: { id: userExists.id } } },
            })
          }

          cb(undefined, userExists)
        }
      }
    )
  )

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'email', 'displayName', 'photos'],
      },
      // Called on successful authentication
      async (_accessToken, _refreshToken, profile, cb) => {
        const userExists = await prisma.user.findUnique({
          where: { email: profile.emails![0].value },
        })

        if (!userExists) {
          const newUser = await prisma.user.create({
            data: {
              name: profile.displayName,
              email: profile.emails![0].value,
              facebookId: profile.id,
              photo: profile.photos![0].value,
            },
          })

          await prisma.cart.create({
            data: { user: { connect: { id: newUser.id } } },
          })

          await prisma.wishList.create({
            data: { user: { connect: { id: newUser.id } } },
          })

          cb(undefined, newUser)
        } else {
          if (userExists.photo !== profile.photos![0].value) {
            await prisma.user.update({
              where: { email: profile.emails![0].value },
              data: {
                photo: profile.photos![0].value,
              },
            })
          }

          const cartExists = await prisma.cart.findFirst({
            where: { userId: userExists.id },
          })

          if (!cartExists) {
            await prisma.cart.create({
              data: { user: { connect: { id: userExists.id } } },
            })
          }

          const wishListExists = await prisma.wishList.findFirst({
            where: { userId: userExists.id },
          })

          if (!wishListExists) {
            await prisma.wishList.create({
              data: { user: { connect: { id: userExists.id } } },
            })
          }

          cb(undefined, userExists)
        }
      }
    )
  )

  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: `${process.env.ORIGIN}/login`,
      successRedirect: process.env.ORIGIN,
    })
  )

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['public_profile', 'email'] })
  )

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: `${process.env.ORIGIN}/login`,
      successRedirect: process.env.ORIGIN,
    })
  )
}
