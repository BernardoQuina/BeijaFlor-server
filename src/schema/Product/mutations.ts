import {
  floatArg,
  intArg,
  list,
  mutationField,
  nonNull,
  stringArg,
} from 'nexus'
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
    height: stringArg(),
    water: stringArg(),
    exposure: stringArg(),
    temperature: stringArg(),
    lifespan: stringArg(),
  },
  async resolve(
    _root,
    {
      name,
      description,
      images,
      price,
      stock,
      categories,
      height,
      water,
      exposure,
      temperature,
      lifespan,
    },
    context
  ) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Não autorizado.')
    }

    if (name.length < 1) {
      throw new Error('Dê um nome ao produto.')
    }

    if (description.length < 1) {
      throw new Error('Dê uma descrição ao produto.')
    }

    if (price < 0.1) {
      throw new Error('Determine o preço do produto.')
    }

    if (stock < 0.1) {
      throw new Error('Determine o stock do produto.')
    }

    if (categories.length < 1) {
      throw new Error('Selecione pelo menos 1 categoria para cada produto.')
    }

    if (images.length < 3) {
      throw new Error('Atribua pelo menos 3 fotografias a cada produto.')
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
        height,
        water,
        exposure,
        temperature,
        lifespan,
      },
    })

    return createProduct
  },
})

export const editProduct = mutationField('editProduct', {
  type: 'Product',
  args: {
    whereId: nonNull(stringArg()),
    name: stringArg(),
    description: stringArg(),
    images: list(nonNull(stringArg())),
    price: floatArg(),
    stock: intArg(),
    categories: list(nonNull(stringArg())),
    height: stringArg(),
    water: stringArg(),
    exposure: stringArg(),
    temperature: stringArg(),
    lifespan: stringArg(),
  },
  async resolve(
    _root,
    {
      whereId,
      name,
      description,
      images,
      price,
      stock,
      categories,
      height,
      water,
      exposure,
      temperature,
      lifespan,
    },
    context
  ) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Not authorized.')
    }

    const productExists = await context.prisma.product.findUnique({
      where: { id: whereId },
    })

    if (!productExists) {
      throw new Error('O produto que pretende editar não existe.')
    }

    let data: {
      name?: string
      description?: string
      images?: string[]
      price?: number
      stock?: number
      categories?: { connect: { name: string }[] }
      height?: string
      water?: string
      exposure?: string
      temperature?: string
      lifespan?: string
    } = {}

    if (name) {
      const nameTaken = await context.prisma.product.findUnique({
        where: { name },
      })

      if (nameTaken && productExists.name !== nameTaken.name) {
        throw new Error('Outro produto já utiliza esse nome.')
      }

      data.name = name
    }

    if (description) {
      data.description = description
    }

    if (images) {
      data.images = images
    }

    if (price) {
      data.price = price
    }

    if (stock) {
      data.stock = stock
    }

    if (categories) {
      let categoriesConnectObject: { connect: { name: string }[] } = {
        connect: [],
      }

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

          categoriesConnectObject.connect.push({ name: categories[i] })
        }
      }

      await categoriesExist(categories)

      data.categories = categoriesConnectObject
    }

    if (height) {
      data.height = height
    }

    if (water) {
      data.water = water
    }

    if (exposure) {
      data.exposure = exposure
    }

    if (temperature) {
      data.temperature = temperature
    }

    if (lifespan) {
      data.lifespan = lifespan
    }

    if (
      !name &&
      !description &&
      !images &&
      !price &&
      !stock &&
      !categories &&
      !height &&
      !water &&
      !exposure &&
      !temperature &&
      !lifespan
    ) {
      throw new Error('Nada para editar.')
    }

    const updateProduct = await context.prisma.product.update({
      where: { id: whereId },
      data,
    })

    return updateProduct
  },
})

export const changeProductStatus = mutationField('changeProductStatus', {
  type: 'Product',
  args: {
    whereId: nonNull(stringArg()),
  },
  async resolve(_root, { whereId }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Not authorized.')
    }

    const productExists = await context.prisma.product.findUnique({
      where: { id: whereId },
    })

    if (!productExists) {
      throw new Error('O produto que pretende editar não existe.')
    }

    let data

    if (productExists.active) {
      data = { active: false }
    } else {
      data = { active: true }
    }

    return context.prisma.product.update({ where: { id: whereId }, data })
  },
})
