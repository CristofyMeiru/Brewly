import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="skeleton" className={cn("bg-zinc-200 rounded-md animate-pulse", className)} {...props} />;
}

export { Skeleton };
