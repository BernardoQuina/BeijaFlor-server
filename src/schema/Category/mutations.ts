import { mutationField, nonNull, stringArg } from 'nexus';

export const createCategory = mutationField('createCategory', {
  type: 'Category',
  args: {
    name: nonNull(stringArg())
  },
  async resolve() {
    
  }
})