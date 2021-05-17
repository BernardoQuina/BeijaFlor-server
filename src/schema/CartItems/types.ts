import { objectType } from 'nexus'

export const CartItem = objectType({
  name: 'CartItem',
  definition(t) {
    t.model.id()
    t.model.product()
    t.model.quantity()
    t.model.cart()
    t.model.productId()
    t.model.cartId()
    t.model.createdAt()
    t.model.updatedAt()
  }
})