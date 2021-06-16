import { list, queryField } from 'nexus'

export const productQueries = queryField((t) => {
  t.crud.product({})

  t.crud.products({ pagination: true, filtering: true, ordering: true })

  t.field('specialOccasion', {
    type: list('Product'),
    async resolve(_root, _args, { prisma }) {
      const currentHeader = await prisma.category.findFirst({
        where: { header: true },
      })

      if (!currentHeader) {
        throw new Error('Ocorreu um erro.')
      }

      return prisma.product.findMany({
        take: 10,
        where: {
          AND: [
            { categories: { some: { id: currentHeader.id } } },
            { stock: { gt: 0 } },
            { active: { equals: true } },
          ],
        },
      })
    },
  })

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
