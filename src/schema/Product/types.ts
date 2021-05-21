import { objectType } from 'nexus'

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.description()
    t.model.images()
    t.model.price()
    t.model.stock()
    t.model.active()
    t.model.categories()
    t.model.height()
    t.model.water()
    t.model.exposure()
    t.model.temperature()
    t.model.lifespan()
    t.model.cartItems()
    t.model.wishLists()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
