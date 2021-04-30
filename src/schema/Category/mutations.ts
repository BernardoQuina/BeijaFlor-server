import { mutationField, nonNull, stringArg } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const createCategory = mutationField('createCategory', {
  type: 'Category',
  args: {
    mainCategory: nonNull('MainCategory'),
    name: nonNull(stringArg()),
    subCategory: nonNull('SubCategory'),
    image: nonNull(stringArg()),
  },
  async resolve(_root, { name, mainCategory, subCategory, image }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Not authorized.')
    }

    const categoryExists = await context.prisma.category.findUnique({
      where: { name },
    })

    if (categoryExists) {
      throw new Error('Já existe uma categoria com esse nome.')
    }

    const createCategory = await context.prisma.category.create({
      data: { mainCategory, subCategory, name, image },
    })

    return createCategory
  },
})
