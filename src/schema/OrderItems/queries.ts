import { queryField } from 'nexus'

export const orderItemQueries = queryField((t) => {
  t.crud.orderItem()
  t.crud.orderItems({ pagination: true, filtering: true, ordering: true })
})