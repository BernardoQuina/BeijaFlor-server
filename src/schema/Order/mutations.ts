import { mutationField, stringArg, nonNull, list } from 'nexus'
import { atualizaçãoEncomenda } from '../../emails/atualizaçãoEncomenda'
import { isAuth } from '../../util/isAuth'
import { sendEmail } from '../../util/sendEmail'

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
        }

        const newOrderItem = await context.prisma.orderItem.create({
          data: {
            order: { connect: { id: newOrder.id } },
            product: { connect: { id: cartItem.productId } },
            quantity: cartItem.quantity,
          },
        })

        quantity += newOrderItem.quantity
        price += newOrderItem.quantity * product.price
      }
    }

    await cartToOrder(cartItemsIds)

    return context.prisma.order.update({
      where: { id: newOrder.id },
      data: {
        quantity,
        price,
      },
    })
  },
})

export const orderState = mutationField('orderState', {
  type: 'Order',
  args: {
    whereId: nonNull(stringArg()),
    state: nonNull(stringArg()),
  },
  async resolve(_root, { whereId, state }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Not authorized.')
    }

    const orderExists = await context.prisma.order.findUnique({
      where: { id: whereId },
    })

    if (!orderExists) {
      throw new Error('A encomenda que pretende editar não existe.')
    }

    const updatedOrder = await context.prisma.order.update({
      where: { id: whereId },
      data: { state },
    })

    const orderAddress = await context.prisma.address.findUnique({
      where: { id: orderExists.addressId },
    })

    if (!orderAddress) {
      throw new Error('Ocorreu um problema ao processar a morada da encomenda.')
    }

    const address = `${orderAddress.street}, ${orderAddress.numberAndBlock}, ${orderAddress.postal} ${orderAddress.zone}`

    const stateDiagram = `
    <div style="height: 100%; width: 30%;${
      updatedOrder.state === 'Em processamento'
        ? ' background-color: #f5fae8;'
        : ''
    } border-radius: 8px; margin-right:auto; display: flex;${
      updatedOrder.state === 'Em processamento'
        ? ''
        : ' border: 1px solid #c5c5c5;'
    }">
          <h5 style="margin: auto; text-align: center; color: #6b705c;${
            updatedOrder.state === 'Em processamento'
              ? ''
              : ' font-weight: 400;'
          }">Em processamento</h5>
        </div>
    <div style="height: 100%; width: 30%;${
      updatedOrder.state === 'Em distribuição'
        ? ' background-color: #f5fae8;'
        : ''
    } border-radius: 8px; margin-right:auto; display: flex;${
      updatedOrder.state === 'Em distribuição'
        ? ''
        : ' border: 1px solid #c5c5c5;'
    }">
          <h5 style="margin: auto; text-align: center; color: #6b705c;${
            updatedOrder.state === 'Em distribuição' ? '' : ' font-weight: 400;'
          }">Em distribuição</h5>
        </div>
    <div style="height: 100%; width: 30%;${
      updatedOrder.state === 'Entregue' ? ' background-color: #f5fae8;' : ''
    } border-radius: 8px; margin-right:auto; display: flex;${
      updatedOrder.state === 'Entregue' ? '' : ' border: 1px solid #c5c5c5;'
    }">
          <h5 style="margin: auto; text-align: center; color: #6b705c;${
            updatedOrder.state === 'Entregue' ? '' : ' font-weight: 400;'
          }">Entregue</h5>
        </div>
    `

    const html = atualizaçãoEncomenda(
      orderExists.id,
      user.name,
      updatedOrder.state.toLowerCase(),
      stateDiagram,
      orderAddress.completeName,
      address
    )
    await sendEmail(
      user.email,
      `Atualização da encomenda: ${updatedOrder.state}`,
      html
    )

    return updatedOrder
  },
})
