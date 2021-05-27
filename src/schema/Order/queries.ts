import { queryField } from 'nexus'

export const orderQueries = queryField((t) => {
  t.crud.order()
  t.crud.orders({ pagination: true, filtering: true, ordering: true })
})