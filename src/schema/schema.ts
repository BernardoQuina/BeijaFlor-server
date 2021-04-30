import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'

import * as userTypes from './User/types'
import * as userQueries from './User/queries'
import * as userMutations from './User/mutations'

import * as productTypes from './Product/types'
import * as productQueries from './Product/queries'

import * as categoryTypes from './Category/types'
import * as categoryQueries from './Category/queries'

export const schema = makeSchema({
  types: {
    userTypes,
    userQueries,
    userMutations,
    productTypes,
    productQueries,
    categoryTypes,
    categoryQueries,
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
