import { queryField } from 'nexus'

export const cartQueries = queryField((t) => {
  t.crud.cart()
  t.crud.carts({ pagination: true, filtering: true, ordering: true })
})
