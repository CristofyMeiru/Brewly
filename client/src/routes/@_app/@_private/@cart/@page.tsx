import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_private/cart/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/_private/cart/"!</div>
}
