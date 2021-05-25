import { intArg, mutationField, nonNull } from 'nexus'
import { Stripe } from 'stripe'
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
        console.log('intent present: ', context.req.session.paymentIntentId)
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
  async resolve(_root, _args_, {req}) {
    if (req.session.paymentIntentId) {
      req.session.paymentIntentId = undefined
    }

    return true
  }
})