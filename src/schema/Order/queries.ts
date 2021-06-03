import { queryField } from 'nexus'

export const orderQueries = queryField((t) => {
  t.crud.order()
  t.crud.orders({ pagination: true, filtering: true, ordering: true })

  t.field('orderCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.order.count({})
    },
  })

  t.field('processingCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.order.count({
        where: { state: { equals: 'Em processamento' } },
      })
    },
  })

  t.field('inTransitCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.order.count({
        where: { state: { equals: 'Em distribuição' } },
      })
    },
  })

  t.field('deliveredCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.order.count({
        where: { state: { equals: 'Entregue' } },
      })
    },
  })
})
