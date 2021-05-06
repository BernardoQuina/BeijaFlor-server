import { queryField } from 'nexus'

export const productQueries = queryField((t) => {
  t.crud.product({})

  t.crud.products({ pagination: true, filtering: true, ordering: true })

  t.field('productCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.product.count({})
    },
  })

  t.field('inactiveCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.product.count({ where: { active: false } })
    },
  })
  t.field('outOfStockCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.product.count({ where: { stock: { lt: 1 } } })
    },
  })
})
