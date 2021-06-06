import { objectType } from 'nexus'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.mainCategory()
    t.model.subCategory()
    t.model.name()
    t.model.image()
    t.model.sales()
    t.model.products()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
