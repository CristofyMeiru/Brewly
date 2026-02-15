import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/menu/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_public/menu/"!</div>
}
