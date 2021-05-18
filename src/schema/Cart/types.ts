import { objectType } from 'nexus'

export const Cart = objectType({
  name: 'Cart',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.cartItems({ordering: true})
    t.model.price()
    t.model.quantity()
    t.model.userId()
    t.model.createdAt()
    t.model.updatedAt()
  }
})