import { objectType } from 'nexus'

export const Address = objectType({
  name: 'Address',
  definition(t) {
    t.model.id()
    t.model.completeName()
    t.model.country()
    t.model.street()
    t.model.numberAndBlock()
    t.model.zone() // localidade
    t.model.region() // distrito
    t.model.postal()
    t.model.contact()
    t.model.instructions()
    t.model.user()
    t.model.orders()
    t.model.userId()
    t.model.createdAt()
    t.model.updatedAt()
  },
})