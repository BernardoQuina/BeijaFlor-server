import { mutationField, nonNull, stringArg } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const toggleFromWishList = mutationField('toggleFromWishList', {
  type: 'WishList',
  args: {
    wishListId: nonNull(stringArg()),
    productId: nonNull(stringArg()),
  },
  async resolve(_root, { wishListId, productId }, context) {
    const userId = isAuth(context)

    const user = await context.prisma.user.findUnique({ where: { id: userId } })

    if (!user) {
      throw new Error('Utilizador não encontrado.')
    }

    const wishListExists = await context.prisma.wishList.findUnique({
      where: { id: wishListId },
    })

    if (!wishListExists) {
      throw new Error('Lista de desejos não encontrada.')
    }

    if (userId !== wishListExists.userId) {
      throw new Error('Não autorizado.')
    }

    const productExists = await context.prisma.product.findUnique({
      where: { id: productId },
    })

    if (!productExists) {
      throw new Error('Produto não encontrado.')
    }

    const alreadyOnWishList = await context.prisma.wishList.findFirst({
      where: { id: wishListId, products: { some: { id: productId } } },
    })

    if (alreadyOnWishList) {
      return context.prisma.wishList.update({
        where: { id: wishListId },
        data: { products: { disconnect: { id: productId } } },
      })
    } else {
      return context.prisma.wishList.update({
        where: { id: wishListId },
        data: { products: { connect: { id: productId } } },
      })
    }
  },
})
