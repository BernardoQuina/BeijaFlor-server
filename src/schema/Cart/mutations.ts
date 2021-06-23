import { CartItem, Category } from '.prisma/client'
import { intArg, mutationField, nonNull, stringArg } from 'nexus'
import { Stripe } from 'stripe'
import moment from 'moment'
import { reciboEncomenda } from '../../emails/reciboEncomenda'
import { capitalize } from '../../util/capitalize'
import { isAuth } from '../../util/isAuth'
import { ptErrors } from '../../util/ptErrors'
import { sendEmail } from '../../util/sendEmail'
import { seguimentoEncomenda } from '../../emails/seguimentoEncomenda'

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
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error(
        'O pagamento foi bem sucedido mas ocorreu um problema ao criar a encomenda.'
      )
    }

    const orderExists = await context.prisma.order.findUnique({
      where: { id: orderId },
    })

    if (!orderExists) {
      throw new Error(
        'O pagamento foi bem sucedido mas ocorreu um problema ao criar a encomenda.'
      )
    }

    const orderAddress = await context.prisma.address.findUnique({
      where: { id: orderExists.addressId },
    })

    if (!orderAddress) {
      throw new Error(
        'O pagamento foi bem sucedido mas ocorreu um problema ao processar a morada da encomenda.'
      )
    }

    let cardDetails = ''

    if (context.req.session.paymentIntentId) {
      const paymentIntent = await context.stripe.paymentIntents.retrieve(
        context.req.session.paymentIntentId
      )

      if (paymentIntent.payment_method) {
        const paymentMethod = await context.stripe.paymentMethods.retrieve(
          paymentIntent.payment_method as string
        )

        if (paymentMethod.card) {
          cardDetails = `${capitalize(paymentMethod.card.brand)} •••• ${
            paymentMethod.card.last4
          }`
          await context.prisma.order.update({
            where: { id: orderId },
            data: {
              cardDetails,
            },
          })
        }
      }

      context.req.session.paymentIntentId = undefined
    } else {
      cardDetails = 'PayPal'

      await context.prisma.order.update({
        where: { id: orderId },
        data: {
          cardDetails,
        },
      })
    }

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

    let categories: Category[]

    let priceDetails: string[] = []

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

        priceDetails.push(`<div style="display: flex; margin: auto; max-width: 400px;">
        <h4 style="font-weight: 400;">${product.name} x ${cartItems[
          i
        ].quantity.toFixed(0)}</h4>
        <h4 style="font-weight: 400; margin-left: auto;">€ ${(
          product.price * cartItems[i].quantity
        ).toFixed(2)}</h4>
      </div>`)

        categories = await context.prisma.category.findMany({
          where: { products: { some: { id: cartItems[i].productId } } },
        })

        for (let e = 0; e < categories.length; e++) {
          await context.prisma.category.update({
            where: { id: categories[e].id },
            data: {
              sales: categories[e].sales + cartItems[i].quantity,
            },
          })
        }
      }
    }

    await countSales(cartItems)

    if (orderExists.price >= 35) {
      priceDetails.push(`<div style="display: flex; margin: auto; max-width: 400px;">
      <h4 style="font-weight: 400;">Taxa de entrega</h4>
      <h4 style="font-weight: 400; margin-left: auto;">GRÁTIS</h4>
    </div>`)
    } else {
      priceDetails.push(`<div style="display: flex; margin: auto; max-width: 400px;">
      <h4 style="font-weight: 400;">Taxa de entrega</h4>
      <h4 style="font-weight: 400; margin-left: auto;">€ 5.00</h4>
    </div>`)
    }

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

    const address = `${orderAddress.street}, ${orderAddress.numberAndBlock}, ${orderAddress.postal} ${orderAddress.zone}`

    const html = seguimentoEncomenda(
      user.name,
      orderExists.id,
      orderAddress.completeName,
      address
    )

    await sendEmail(
      user.email,
      `Confirmação da encomenda: ${orderExists.state}`,
      html
    )

    const html2 = reciboEncomenda(
      user.name,
      orderExists.id,
      moment(orderExists.createdAt).locale('pt').format('l'),
      cardDetails,
      priceDetails.join(''),
      (orderExists.price * 0.77).toFixed(2),
      (orderExists.price * 0.23).toFixed(2),
      orderExists.price.toFixed(2)
    )

    await sendEmail(
      user.email,
      `O recibo da sua encomenda, Total: € ${orderExists.price.toFixed(2)}`,
      html2
    )

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
