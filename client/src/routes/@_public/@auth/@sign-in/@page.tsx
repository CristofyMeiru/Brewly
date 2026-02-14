import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/auth/sign-in/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_public/sign-in/"!</div>
}
