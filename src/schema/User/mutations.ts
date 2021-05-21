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
    const nameRegex =
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/

    const emailRegex = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/

    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/

    if (!nameRegex.test(name)) {
      throw new Error(
        'Nome só pode conter caracteres alfanuméricos (ex: #?!@$%^&*- não é permitido) e tem de ser de 8 a 20.'
      )
    }

    if (!emailRegex.test(email)) throw new Error('Email inválido.')

    if (!passwordRegex.test(password)) {
      throw new Error(
        'Palavra-passe tem ser de 8 a 20 caracteres, pelo menos uma maiúscula, uma minúscula, um número e um caractere especial (#?!@$%^&*-).'
      )
    }

    if (password !== confirmPassword) {
      throw new Error('Palavras-passe não correspondem.')
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const emailTaken = await prisma.user.findUnique({ where: { email } })

    if (emailTaken) {
      throw new Error('Já existe uma conta com este email.')
    }

    const newUser = await prisma.user.create({
      data: { name, email, passwordHash },
    })

    req.session.userId = newUser.id

    await prisma.cart.create({
      data: { user: { connect: { id: newUser.id } } },
    })

    await prisma.wishList.create({
      data: { user: { connect: { id: newUser.id } } },
    })

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
      throw new Error('Credenciais inválidas.')
    }

    const isMatch = await bcrypt.compare(password, userExists.passwordHash)

    if (!isMatch) {
      throw new Error('Credenciais inválidas.')
    }

    req.session.userId = userExists.id

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

    return userExists
  },
})

export const logout = mutationField('logout', {
  type: 'Boolean',
  async resolve(_root, _args, { req, res }) {
    if (req.user || req.session.userId) {
      // req.logOut()
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
    updateEmail: stringArg(),
    updatePassword: stringArg(),
    confirmNewPassword: stringArg(),
  },
  async resolve(
    _root,
    { password, updateName, updateEmail, updatePassword, confirmNewPassword },
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
        throw new Error('Credenciais inválidas.')
      }

      const isMatch = await bcrypt.compare(password, userExists.passwordHash!)

      if (!isMatch) {
        throw new Error('Credenciais inválidas.')
      }
    }

    let data: {
      email?: string
      name?: string
      password?: string
    } = {}

    if (updateEmail) {
      const emailRegex = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/

      if (!emailRegex.test(updateEmail)) throw new Error('Email inválido.')

      const emailTaken = await context.prisma.user.findUnique({
        where: { email: updateEmail },
      })

      if (emailTaken && updateEmail !== userExists.email) {
        throw new Error('Já existe uma conta com este email.')
      }

      data.email = updateEmail
    }

    if (updateName) {
      const nameRegex =
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$/

      if (!nameRegex.test(updateName)) {
        throw new Error(
          'Nome só pode conter caracteres alfanuméricos (ex: #?!@$%^&*- não é permitido) e tem de ser de 8 a 20.'
        )
      }

      data.name = updateName
    }

    if (updatePassword) {
      const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/

      if (!passwordRegex.test(updatePassword)) {
        throw new Error(
          'Palavra-passe tem ser de 8 a 20 caracteres, pelo menos uma maiúscula, uma minúscula, um número e um caractere especial (#?!@$%^&*-).'
        )
      }

      if (updatePassword !== confirmNewPassword) {
        throw new Error('Palavras-passe não correspondem.')
      }

      const newHashedPassword = await bcrypt.hash(updatePassword, 10)

      data.password = newHashedPassword
    }

    if (!updateName && !updateEmail && !updatePassword) {
      throw new Error('Nada para atualizar.')
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

    const cartExists = await context.prisma.cart.findFirst({
      where: { userId },
    })

    if (cartExists) {
      await context.prisma.cart.delete({ where: { id: cartExists.id } })
    }

    return context.prisma.user.delete({ where: { id: userId } })
  },
})
