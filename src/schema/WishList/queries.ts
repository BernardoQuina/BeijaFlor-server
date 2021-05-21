import { queryField } from 'nexus'

export const wishListQueries = queryField((t) => {
  t.crud.wishList()
  t.crud.wishLists({ pagination: true, filtering: true, ordering: true })
})
