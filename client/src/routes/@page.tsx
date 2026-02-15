import { Button } from "@/components/ui/button";
import { IconCoffee, IconMenu2, IconShoppingCart } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-zinc-50 text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-12">
        <img src="/brewly-logo.png" alt="Brewly Logo" className="w-50 mb-6" />

        <h1 className=" text-zinc-950 text-4xl md:text-6xl font-bold tracking-tight">Seu café, do seu jeito.</h1>

        <p className="mt-6 max-w-xl text-zinc-900 text-lg">
          O Brewly conecta você à sua coffee shop favorita. Veja o cardápio, personalize seu pedido e retire sem fila.
        </p>

        <div className="flex gap-4 mt-8">
          <Link to="/">
            <Button size="lg" className="gap-2">
              <IconMenu2 size={18} />
              Ver Menu
            </Button>
          </Link>

          <Link to="/">
            <Button size="lg" variant="secondary" className="gap-2">
              <IconShoppingCart size={18} />
              Fazer Pedido
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="space-y-4">
            <IconCoffee size={40} className="mx-auto text-amber-500" />
            <h3 className="text-xl font-semibold">Cardápio Digital</h3>
            <p className="text-zinc-400">Explore bebidas, combos e novidades direto do seu celular.</p>
          </div>

          <div className="space-y-4">
            <IconShoppingCart size={40} className="mx-auto text-amber-500" />
            <h3 className="text-xl font-semibold">Pedido Rápido</h3>
            <p className="text-zinc-400">Monte seu café, escolha adicionais e finalize em segundos.</p>
          </div>

          <div className="space-y-4">
            <IconMenu2 size={40} className="mx-auto text-amber-500" />
            <h3 className="text-xl font-semibold">Sem Fila</h3>
            <p className="text-zinc-400">Retire no balcão no horário indicado e economize tempo.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Pronto para seu próximo café?</h2>

        <div className="mt-6">
          <Link to="/">
            <Button size="lg" className="gap-2">
              <IconCoffee size={18} />
              Explorar Cardápio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
