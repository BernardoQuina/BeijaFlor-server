import { queryField } from 'nexus'

export const categoryQueries = queryField((t) => {
  t.crud.category({})

  t.crud.categories({ pagination: true, filtering: true, ordering: true })

  t.field('categoryCount', {
    type: 'Int',
    resolve(_root, _args, { prisma }) {
      return prisma.category.count({})
    },
  })
})