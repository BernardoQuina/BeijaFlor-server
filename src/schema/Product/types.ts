import { objectType } from 'nexus'

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.description()
    t.model.images()
    t.model.price()
    t.model.categories()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
