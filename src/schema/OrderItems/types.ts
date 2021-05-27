import { objectType } from 'nexus'

export const OrderItem = objectType({
  name: 'OrderItem',
  definition(t) {
    t.model.id()
    t.model.product()
    t.model.quantity()
    t.model.order()
    t.model.productId()
    t.model.orderId()
    t.model.createdAt()
    t.model.updatedAt()
  }
})