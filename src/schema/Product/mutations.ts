import { floatArg, intArg, list, mutationField, nonNull, stringArg } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const createProduct = mutationField('createProduct', {
  type: 'Product',
  args: {
    name: nonNull(stringArg()),
    description: nonNull(stringArg()),
    images: nonNull(list(nonNull(stringArg()))),
    price: nonNull(floatArg()),
    stock: nonNull(intArg()),
    categories: nonNull(list(nonNull(stringArg()))),
  },
  async resolve(
    _root,
    { name, description, images, price, stock, categories },
    context
  ) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Não autorizado.')
    }

    const productExists = await context.prisma.product.findUnique({
      where: { name },
    })

    if (productExists) {
      throw new Error('Já existe um produto com esse nome.')
    }

    let categoriesConnectObject: { name: string }[] = []

    const categoriesExist = async (categories: string[]) => {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i] === '') {
          throw new Error('Uma categoria tem de ter pelo menos 1 caractere.')
        }

        const categoryExists = await context.prisma.category.findUnique({
          where: { name: categories[i] },
        })

        if (!categoryExists) {
          throw new Error(
            `A categoria ${categories[i]} não existe. Terá de a criar primeiro.`
          )
        }

        categoriesConnectObject.push({ name: categories[i] })
      }
    }

    await categoriesExist(categories)

    const createProduct = await context.prisma.product.create({
      data: {
        name,
        description,
        images,
        price,
        stock,
        categories: {
          connect: categoriesConnectObject,
        },
      },
    })

    return createProduct
  },
})
