import { cn } from "@/utils";
import { ReactNode, HTMLAttributes } from "react";

export function Header({ children, className }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    return (
        <header className={cn("px-6 py-2 flex justify-between items-center animate-appears md:pl-6 md:pr-3 md:py-[14px] md:rounded-xl", className)}>
            {children}
        </header>
    )
}