import { objectType } from 'nexus'

export const Order = objectType({
  name: 'Order',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.address()
    t.model.orderItems({ordering: true})
    t.model.price()
    t.model.quantity()
    t.model.cardDetails()
    t.model.userId()
    t.model.addressId()
    t.model.createdAt()
    t.model.updatedAt()
  },
})