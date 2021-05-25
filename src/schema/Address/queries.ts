import { queryField } from 'nexus'

export const addressQueries = queryField((t) => {
  t.crud.address()
  t.crud.addresses({ pagination: true, filtering: true, ordering: true })
})
