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
})
