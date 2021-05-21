import { objectType } from 'nexus'

export const WishList = objectType({
  name: 'WishList',
  definition(t) {
    t.model.id()
    t.model.user()
    t.model.products()
    t.model.userId()
    t.model.createdAt()
    t.model.updatedAt()
  }
})