import { intArg, mutationField, nonNull, stringArg } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const createCartItem = mutationField('createCartItem', {
  type: 'CartItem',
  args: {
    cartId: nonNull(stringArg()),
    productId: nonNull(stringArg()),
    quantity: nonNull(intArg()),
  },
  async resolve(_root, { cartId, productId, quantity }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Utilizador não encontrado.')
    }

    const cartExists = await context.prisma.cart.findUnique({
      where: { id: cartId },
    })

    if (!cartExists) {
      throw new Error('Cesto não encontrado.')
    }

    if (userId !== cartExists.userId) {
      throw new Error('Não autorizado.')
    }

    const productExists = await context.prisma.product.findUnique({
      where: { id: productId },
    })

    if (!productExists) {
      throw new Error('Produto não encontrado.')
    }

    const cartItemExists = await context.prisma.cartItem.findFirst({
      where: { cartId, productId },
    })

    if (cartItemExists) {
      await context.prisma.cart.update({
        where: { id: cartId },
        data: {
          price:
            cartExists.price +
            productExists.price * quantity -
            productExists.price * cartItemExists.quantity,
          quantity: cartExists.quantity + quantity - cartItemExists.quantity,
        },
      })

      return context.prisma.cartItem.update({
        where: { id: cartItemExists.id },
        data: { quantity },
      })
    } else {
      await context.prisma.cart.update({
        where: { id: cartId },
        data: {
          price: cartExists.price + productExists.price * quantity,
          quantity: cartExists.quantity + quantity,
        },
      })

      return context.prisma.cartItem.create({
        data: {
          cart: { connect: { id: cartId } },
          product: { connect: { id: productId } },
          quantity,
        },
      })
    }
  },
})

export const changeItemQuantity = mutationField('changeItemQuantity', {
  type: 'CartItem',
  args: {
    plusOrMinusOne: nonNull(intArg()),
    cartItemId: nonNull(stringArg()),
    cartId: nonNull(stringArg()),
    productId: nonNull(stringArg()),
  },
  async resolve(
    _root,
    { plusOrMinusOne, cartItemId, cartId, productId },
    context
  ) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Utilizador não encontrado.')
    }

    const cartExists = await context.prisma.cart.findUnique({
      where: { id: cartId },
    })

    if (!cartExists) {
      throw new Error('Cesto não encontrado.')
    }

    if (userId !== cartExists.userId) {
      throw new Error('Não autorizado.')
    }

    const cartItemExists = await context.prisma.cartItem.findUnique({
      where: { id: cartItemId },
    })

    if (!cartItemExists) {
      throw new Error('Item não encontrado.')
    }

    const productExists = await context.prisma.product.findUnique({
      where: { id: productId },
    })

    if (!productExists) {
      throw new Error('Produto não encontrado.')
    }

    await context.prisma.cart.update({
      where: { id: cartId },
      data: {
        price: cartExists.price + productExists.price * plusOrMinusOne,
        quantity: cartExists.quantity + plusOrMinusOne,
      },
    })

    return context.prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity: cartItemExists.quantity + plusOrMinusOne },
    })
  },
})

export const removeItem = mutationField('removeItem', {
  type: 'Boolean',
  args: {
    cartItemId: nonNull(stringArg()),
    cartId: nonNull(stringArg()),
    productId: nonNull(stringArg()),
  },
  async resolve(_root, { cartItemId, cartId, productId }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Utilizador não encontrado.')
    }

    const cartExists = await context.prisma.cart.findUnique({
      where: { id: cartId },
    })

    if (!cartExists) {
      throw new Error('Cesto não encontrado.')
    }

    if (userId !== cartExists.userId) {
      throw new Error('Não autorizado.')
    }

    const cartItemExists = await context.prisma.cartItem.findUnique({
      where: { id: cartItemId },
    })

    if (!cartItemExists) {
      throw new Error('Item não encontrado.')
    }

    const productExists = await context.prisma.product.findUnique({
      where: { id: productId },
    })

    if (!productExists) {
      throw new Error('Produto não encontrado.')
    }

    await context.prisma.cart.update({
      where: { id: cartId },
      data: {
        price: cartExists.price - productExists.price * cartItemExists.quantity,
        quantity: cartExists.quantity - cartItemExists.quantity,
      },
    })

    await context.prisma.cartItem.delete({ where: { id: cartItemId } })

    return true
  },
})
