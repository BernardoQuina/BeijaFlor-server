import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'

export const schema = makeSchema({
  types: {},
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
