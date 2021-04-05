import { mutationField, nonNull, stringArg } from 'nexus'
import bcrypt from 'bcryptjs'
import { isAuth } from '../../util/isAuth'

export const register = mutationField('register', {
  type: 'User',
  args: {
    name: nonNull(stringArg()),
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
    confirmPassword: nonNull(stringArg()),
  },
  async resolve(
    _root,
    { name, email, password, confirmPassword },
    { prisma, req }
  ) {
    if (name.length < 2) {
      throw new Error('Name must be 2 characters or longer.')
    }

    if (email.length < 4) {
      throw new Error('Please provide a valid email.')
    }

    if (password.length < 8) {
      throw new Error('Password must be 8 characters or longer.')
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match')
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const emailTaken = await prisma.user.findUnique({ where: { email } })

    if (emailTaken) {
      throw new Error('An account is already using this email.')
    }

    const newUser = await prisma.user.create({
      data: { name, email, passwordHash },
    })

    req.session.userId = newUser.id

    return newUser
  },
})

export const login = mutationField('login', {
  type: 'User',
  args: {
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
  },
  async resolve(_root, { email, password }, { prisma, req }) {
    const userExists = await prisma.user.findUnique({ where: { email } })

    if (!userExists || !userExists.passwordHash) {
      throw new Error('Invalid credentials.')
    }

    const isMatch = await bcrypt.compare(password, userExists.passwordHash)

    if (!isMatch) {
      throw new Error('Invalid credentials.')
    }

    req.session.userId = userExists.id

    return userExists
  },
})

export const logout = mutationField('logout', {
  type: 'Boolean',
  async resolve(_root, _args, { req, res }) {
    if (req.user || req.session.userId) {
      req.logOut()
      return new Promise((resolve) =>
        req.session.destroy((err) => {
          res.clearCookie('connect.sid', { path: '/' })
          if (err) {
            console.log(err)
            resolve(false)
            return
          }
          resolve(true)
        })
      )
    }
    return true
  },
})

export const editUser = mutationField('editUser', {
  type: 'User',
  args: {
    password: stringArg(),
    updateName: stringArg(),
    updatePhoto: stringArg(),
    updateEmail: stringArg(),
    updatePassword: stringArg(),
    confirmNewPassword: stringArg(),
  },
  async resolve(
    _root,
    {
      password,
      updateName,
      updatePhoto,
      updateEmail,
      updatePassword,
      confirmNewPassword,
    },
    context
  ) {
    const userId = isAuth(context)

    const userExists = await context.prisma.user.findUnique({
      where: { id: userId },
    })

    if (!userExists) {
      throw new Error('User not found')
    }

    if (updateEmail || updatePassword) {
      if (!password) {
        throw new Error('Invalid credentials.')
      }

      const isMatch = await bcrypt.compare(password, userExists.passwordHash!)

      if (!isMatch) {
        throw new Error('Invalid credentials.')
      }
    }

    let data: {
      email?: string
      photo?: string
      cloudinaryPhoto?: boolean
      name?: string
      password?: string
    } = {}

    if (updatePhoto) {
      data.photo = updatePhoto
      data.cloudinaryPhoto = true
    }

    if (updateEmail) {
      const emailTaken = await context.prisma.user.findUnique({
        where: { email: updateEmail },
      })

      if (emailTaken && updateEmail !== userExists.email) {
        throw new Error('An account is already using this email.')
      }

      data.email = updateEmail
    }

    if (updateName) {
      data.name = updateName
    }

    if (updatePassword) {
      if (updatePassword !== confirmNewPassword) {
        throw new Error('Passwords do not match.')
      }

      if (updatePassword.length < 8) {
        throw new Error('Password must be 8 characters or longer.')
      }

      const newHashedPassword = await bcrypt.hash(updatePassword, 10)

      data.password = newHashedPassword
    }

    if (!updateName && !updateEmail && !updatePassword) {
      throw new Error('Please provide something to update')
    }

    const updatedUser = await context.prisma.user.update({
      where: { id: userId },
      data,
    })

    return updatedUser
  },
})

export const deleteUser = mutationField('deleteUser', {
  type: 'User',
  args: {
    password: stringArg(),
  },
  async resolve(_root, { password }, context) {
    const userId = isAuth(context)

    const userExists = await context.prisma.user.findUnique({
      where: { id: userId },
    })

    if (!userExists) {
      throw new Error('User not found')
    }

    if (!userExists.googleId && !userExists.facebookId) {
      if (!password) {
        throw new Error('Invalid credentials.')
      }

      const isMatch = await bcrypt.compare(password, userExists.passwordHash!)

      if (!isMatch) {
        throw new Error('Invalid credentials')
      }
    }

    return context.prisma.user.delete({ where: { id: userId } })
  },
})
