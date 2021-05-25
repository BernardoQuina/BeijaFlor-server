import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'

import * as userTypes from './User/types'
import * as userQueries from './User/queries'
import * as userMutations from './User/mutations'

import * as productTypes from './Product/types'
import * as productQueries from './Product/queries'
import * as productMutations from './Product/mutations'

import * as categoryTypes from './Category/types'
import * as categoryQueries from './Category/queries'
import * as categoryMutations from './Category/mutations'

import * as cartTypes from './Cart/types'
import * as cartQueries from './Cart/queries'
import * as cartMutations from './Cart/mutations'

import * as cartItemTypes from './CartItems/types'
import * as cartItemQueries from './CartItems/queries'
import * as cartItemMutations from './CartItems/mutations'

import * as wishListTypes from './WishList/types'
import * as wishListQueries from './WishList/queries'
import * as wishListMutations from './WishList/mutations'

import * as addressTypes from './Address/types'
import * as addressQueries from './Address/queries'
import * as addressMutations from './Address/mutations'

export const schema = makeSchema({
  types: {
    userTypes,
    userQueries,
    userMutations,
    productTypes,
    productQueries,
    productMutations,
    categoryTypes,
    categoryQueries,
    categoryMutations,
    cartTypes,
    cartQueries,
    cartMutations,
    cartItemTypes,
    cartItemQueries,
    cartItemMutations,
    wishListTypes,
    wishListQueries,
    wishListMutations,
    addressTypes,
    addressQueries,
    addressMutations
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: path.join(process.cwd(), 'src/typegenNexus.d.ts'),
      },
      paginationStrategy: 'prisma',
    }),
  ],
  outputs: {
    schema: path.join(process.cwd(), 'src/schema.graphql'),
    typegen: path.join(process.cwd(), 'src/nexus.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'src/context.ts'),
    export: 'Context',
  },
})
