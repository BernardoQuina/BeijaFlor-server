import { objectType } from 'nexus'

export const Cart = objectType({
  name: 'Cart',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.cartItems()
    t.model.price()
    t.model.userId()
    t.model.createdAt()
    t.model.updatedAt()
  }
})