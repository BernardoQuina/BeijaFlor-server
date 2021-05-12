import { MainCategory, SubCategory } from '.prisma/client'
import { mutationField, nonNull, stringArg } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const createCategory = mutationField('createCategory', {
  type: 'Category',
  args: {
    mainCategory: nonNull('MainCategory'),
    subCategory: nonNull('SubCategory'),
    name: nonNull(stringArg()),
    image: nonNull(stringArg()),
  },
  async resolve(_root, { name, mainCategory, subCategory, image }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Not authorized.')
    }

    if (name.length < 1) {
      throw new Error('Dê um nome à categoria.')
    }

    if (image.length < 1) {
      throw new Error('Atribua 1 imagem à categoria.')
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

export const editCategory = mutationField('editCategory', {
  type: 'Category',
  args: {
    whereId: nonNull(stringArg()),
    mainCategory: 'MainCategory',
    subCategory: 'SubCategory',
    name: stringArg(),
    image: stringArg(),
  },
  async resolve(
    _root,
    { whereId, mainCategory, subCategory, name, image },
    context
  ) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Not authorized.')
    }

    const categoryExists = await context.prisma.category.findUnique({
      where: { id: whereId },
    })

    if (!categoryExists) {
      throw new Error('A categoria que pretende editar não existe.')
    }

    let data: {
      mainCategory?: MainCategory
      subCategory?: SubCategory
      name?: string
      image?: string
    } = {}

    if (mainCategory) {
      data.mainCategory = mainCategory
    }

    if (subCategory) {
      data.subCategory = subCategory
    }

    if (name) {
      const nameTaken = await context.prisma.category.findUnique({
        where: { name },
      })

      if (nameTaken && categoryExists.name !== nameTaken.name) {
        throw new Error('Outra categoria já utiliza esse nome.')
      }

      data.name = name
    }

    if (image) {
      data.image = image
    }

    if (!mainCategory && !subCategory && !name && !image) {
      throw new Error('Nada para editar.')
    }

    const updateCategory = await context.prisma.category.update({
      where: { id: whereId },
      data,
    })

    return updateCategory
  },
})

export const deleteCategory = mutationField('deleteCategory', {
  type: 'Boolean',
  args: {
    whereId: nonNull(stringArg()),
  },
  async resolve(_root, { whereId }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Not authorized.')
    }

    const categoryExists = await context.prisma.category.findUnique({
      where: { id: whereId },
    })

    if (!categoryExists) {
      throw new Error('A categoria que pretende eliminar não existe.')
    }

    const deletedCategory = await context.prisma.category.delete({
      where: { id: whereId },
    })

    if (deletedCategory) {
      return true
    } else {
      throw new Error('Não foi possível concluir a operação.')
    }
  },
})
