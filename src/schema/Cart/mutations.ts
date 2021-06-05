import { CartItem } from '.prisma/client'
import { intArg, mutationField, nonNull, stringArg } from 'nexus'
import { Stripe } from 'stripe'
import { capitalize } from '../../util/capitalize'
import { isAuth } from '../../util/isAuth'
import { ptErrors } from '../../util/ptErrors'

export const createPaymentIntent = mutationField('createPaymentIntent', {
  type: 'PaymentIntent',
  args: {
    amount: nonNull(intArg()),
  },
  async resolve(_root, { amount }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Utilizador não encontrado.')
    }

    try {
      let paymentIntent: Stripe.Response<Stripe.PaymentIntent>

      if (context.req.session.paymentIntentId) {
        paymentIntent = await context.stripe.paymentIntents.retrieve(
          context.req.session.paymentIntentId
        )

        console.log(paymentIntent)

        return paymentIntent as any
      }

      paymentIntent = await context.stripe.paymentIntents.create({
        amount,
        currency: 'eur',
      })

      context.req.session.paymentIntentId = paymentIntent.id

      return paymentIntent as any
    } catch (error) {
      ptErrors.forEach((errorPt) => {
        if (errorPt.code === error.code) {
          throw new Error(errorPt.message)
        }
      })
      throw new Error(error.message)
    }
  },
})

export const successfulPayment = mutationField('successfulPayment', {
  type: 'Boolean',
  args: {
    orderId: nonNull(stringArg()),
  },
  async resolve(_root, { orderId }, context) {
    if (context.req.session.paymentIntentId) {
      const paymentIntent = await context.stripe.paymentIntents.retrieve(
        context.req.session.paymentIntentId
      )

      if (paymentIntent.payment_method) {
        const paymentMethod = await context.stripe.paymentMethods.retrieve(
          paymentIntent.payment_method as string
        )

        if (paymentMethod.card) {
          await context.prisma.order.update({
            where: { id: orderId },
            data: {
              cardDetails: `${capitalize(paymentMethod.card.brand)} •••• ${
                paymentMethod.card.last4
              }`,
            },
          })
        }
      }

      context.req.session.paymentIntentId = undefined
    }

    const userId = isAuth(context)

    const cartToEmpty = await context.prisma.cart.findFirst({
      where: { userId: userId },
    })

    if (!cartToEmpty) {
      throw new Error(
        'O pagamento foi bem sucedido mas ocorreu um problema ao esvaziar o carrinho.'
      )
    }

    const cartItems = await context.prisma.cartItem.findMany({
      where: { cartId: cartToEmpty.id },
    })

    const countSales = async (cartItems: CartItem[]) => {
      for (let i = 0; i < cartItems.length; i++) {
        const product = await context.prisma.product.findUnique({
          where: { id: cartItems[i].productId },
        })

        if (!product) return

        await context.prisma.product.update({
          where: { id: product.id },
          data: {
            sales: product.sales + cartItems[i].quantity,
            stock: product.stock - cartItems[i].quantity,
          },
        })
      }
    }

    await countSales(cartItems)

    await context.prisma.cartItem.deleteMany({
      where: { cartId: cartToEmpty.id },
    })

    await context.prisma.cart.update({
      where: { id: cartToEmpty.id },
      data: {
        quantity: 0,
        price: 0,
      },
    })

    return true
  },
})

export const unsuccessfulPayment = mutationField('unsuccessfulPayment', {
  type: 'Boolean',
  args: {
    orderId: nonNull(stringArg()),
  },
  async resolve(_root, { orderId }, context) {
    await context.prisma.orderItem.deleteMany({ where: { orderId } })

    await context.prisma.order.delete({ where: { id: orderId } })

    return true
  },
})
