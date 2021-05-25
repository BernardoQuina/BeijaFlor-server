import { objectType } from 'nexus'

export const Cart = objectType({
  name: 'Cart',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.cartItems({ ordering: true })
    t.model.price()
    t.model.quantity()
    t.model.userId()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const PaymentIntent = objectType({
  name: 'PaymentIntent',
  definition(t) {
    t.string('id')
    t.string('client_secret')
    t.int('amount')
    t.int('amount_capturable')
    t.int('amount_received')
    t.nullable.field('last_payment_error', { type: 'lastPaymentError' })
    t.nullable.string('application')
    t.nullable.int('application_fee_amount')
    t.nullable.int('canceled_at')
    t.nullable.string('cancellation_reason')
    t.string('capture_method')
  },
})

export const lastPaymentError = objectType({
  name: 'lastPaymentError',
  definition(t) {
    t.string('code')
    t.string('message')
  },
})
