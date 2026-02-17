import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { IconCoffee } from "@tabler/icons-react";

type LoyaltyCardProps = {
  total: number; // quantos cafés já foram acumulados (0 - 8)
};

const MAX_LOYALTY = 8;

export function LoyaltyCard({ total }: LoyaltyCardProps) {
  return (
    <Item variant={"outline"} className=" bg-zinc-900 ">
      <ItemHeader className="flex items-center justify-between mb-3">
        <ItemContent>
          <ItemTitle className=" text-zinc-200">Cartão Fidelidade</ItemTitle>
          <ItemDescription className="text-xs text-zinc-400">A cada 8 cafés, o próximo é grátis ☕</ItemDescription>
        </ItemContent>
        <span className="text-xs text-primary font-medium">
          {total}/{MAX_LOYALTY}
        </span>
      </ItemHeader>

      <ItemFooter className="w-full max-w-md overflow-hidden px-1">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="inline-flex space-x-2 pb-4">
            {Array.from({ length: MAX_LOYALTY }).map((_, index) => {
              const filled = index < total;

              return (
                <div
                  key={index}
                  className={`flex flex-none items-center justify-center size-10 rounded-xl border transition-all
              ${filled ? "bg-primary/20 border-primary text-primary" : "bg-zinc-900 border-zinc-800 text-zinc-700"}`}
                >
                  <IconCoffee size={20} stroke={1.5} />
                </div>
              );
            })}
          </div>

          <ScrollBar className={"bg-zinc-800"} orientation="horizontal" />
        </ScrollArea>
      </ItemFooter>
    </Item>
  );
}

export function LoyaltyCardLoader() {
  return (
    <Item variant={"outline"} className="bg-zinc-900 overflow-hidden">
      <ItemHeader className="flex items-center justify-between mb-3">
        <ItemContent>
          <ItemTitle className="text-zinc-200">Cartão Fidelidade</ItemTitle>
          <ItemDescription className="text-xs text-zinc-400">A cada 8 cafés, o próximo é grátis ☕</ItemDescription>
        </ItemContent>
        <Skeleton className="w-10 h-5 bg-zinc-800" />
      </ItemHeader>

      <ItemFooter className="p-0">
        
        <ScrollArea className="w-full">
          <div className="inline-flex space-x-3 pb-4 px-5">
            {Array.from({ length: MAX_LOYALTY }).map((_, index) => (
              <Skeleton key={index} className="size-10 rounded-xl flex-none bg-zinc-800" />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </ItemFooter>
    </Item>
  );
}

