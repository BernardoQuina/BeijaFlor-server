import { objectType } from 'nexus'
import { isAuth } from '../../util/isAuth'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.googleId()
    t.model.facebookId()
    t.model.email({
      async resolve(_root, args, ctx, info, originalResolver) {
        const res = originalResolver(_root, args, ctx, info)
        const userId = isAuth(ctx, false)

        // info.operation.selectionSet.selections[0].name.value

        const operation = (info.operation.selectionSet.selections[0] as any)
          .name.value as string

        if (
          userId === _root.id ||
          operation === 'login' ||
          operation === 'register' ||
          operation === 'changePassword'
        ) {
          return res
        }
        return 'Not authorized.'
      },
    })
    t.model.passwordHash({
      async resolve(_root, args, ctx, info, originalResolver) {
        const res = originalResolver(_root, args, ctx, info)
        const userId = isAuth(ctx, false)

        if (userId === _root.id) {
          return res
        }
        return 'Not authorized.'
      },
    })
    t.model.name()
    t.model.photo()
    t.model.cloudinaryPhoto()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
