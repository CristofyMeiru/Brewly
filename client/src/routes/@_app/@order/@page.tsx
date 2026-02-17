import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/order/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/order/"!</div>
}
