import { mutationField, stringArg, nonNull, list } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const createOrder = mutationField('createOrder', {
  type: 'Order',
  args: {
    cartId: nonNull(stringArg()),
    cartItemsIds: nonNull(list(nonNull(stringArg()))),
    addressId: nonNull(stringArg()),
  },
  async resolve(_root, { cartId, cartItemsIds, addressId }, context) {
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

    if (cartExists.quantity <= 0) {
      throw new Error('O seu carrinho está vazio.')
    }

    if (userId !== cartExists.userId) {
      throw new Error('Não autorizado.')
    }

    const newOrder = await context.prisma.order.create({
      data: {
        user: { connect: { id: userId } },
        address: { connect: { id: addressId } },
      },
    })

    let quantity = 0
    let price = 0

    const cartToOrder = async (cartItemsIds: string[]) => {
      for (let i = 0; i < cartItemsIds.length; i++) {
        const cartItem = await context.prisma.cartItem.findUnique({
          where: { id: cartItemsIds[i] },
        })

        if (!cartItem) {
          await context.prisma.order.delete({ where: { id: newOrder.id } })
          throw new Error('Um dos itens do carrinho não existe.')
        }

        const product = await context.prisma.product.findUnique({
          where: { id: cartItem.productId },
        })

        if (!product) {
          await context.prisma.order.delete({ where: { id: newOrder.id } })
          throw new Error('Um dos produtos do carrinho já não está disponível.')
        }

        if (product.stock < cartItem.quantity) {
          await context.prisma.order.delete({ where: { id: newOrder.id } })
          throw new Error(
            `O produto ${product.name} apenas tem um stock de ${product.stock}`
          )
        } // CONTINUAR!!

        const newOrderItem = await context.prisma.orderItem.create({
          data: {
            order: { connect: { id: newOrder.id } },
            product: { connect: { id: cartItem.productId } },
            quantity: cartItem.quantity,
          },
        })

        await context.prisma.cartItem.delete({ where: { id: cartItem.id } })

        quantity = +newOrderItem.quantity
        price = +newOrderItem.quantity * product.price
      }
    }

    cartToOrder(cartItemsIds)

    await context.prisma.cart.update({
      where: { id: cartExists.id },
      data: {
        price: 0,
        quantity: 0,
      },
    })

    return context.prisma.order.update({
      where: { id: newOrder.id },
      data: {
        quantity,
        price,
      },
    })
  },
})
