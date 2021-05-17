import { queryField } from 'nexus'

export const cartItemQueries = queryField((t) => {
  t.crud.cartItem()
  t.crud.cartItems({ pagination: true, filtering: true, ordering: true })
})