import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import { IconCoffee } from "@tabler/icons-react";

type LoyaltyCardProps = {
  total: number; // quantos cafés já foram acumulados (0 - 8)
};

export default function LoyaltyCard({ total }: LoyaltyCardProps) {
  const max = 8;

  return (
    <Item variant={"outline"} className=" bg-zinc-900 ">
      <ItemHeader className="flex items-center justify-between mb-3">
        <ItemContent>
          <ItemTitle className=" text-zinc-200">Cartão Fidelidade</ItemTitle>
          <ItemDescription className="text-xs text-zinc-400">A cada 8 cafés, o próximo é grátis ☕</ItemDescription>
        </ItemContent>
        <span className="text-xs text-primary font-medium">
          {total}/{max}
        </span>
      </ItemHeader>

      <ItemFooter className="flex justify-between">
        {Array.from({ length: max }).map((_, index) => {
          const filled = index < total;

          return (
            <div
              key={index}
              className={`flex items-center justify-center h-10 w-10 rounded-xl border transition-all
                ${filled ? "bg-primary/20 border-primary text-primary" : "bg-zinc-800 border-zinc-700 text-zinc-600"}`}
            >
              <IconCoffee size={20} stroke={1.8} />
            </div>
          );
        })}
      </ItemFooter>
    </Item>
  );
}
