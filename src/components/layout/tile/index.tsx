import { cn } from "@/utils";
import { HTMLAttributes, ReactNode } from "react";

export function Tile({ children, className, ...props }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-6 bg-FFFFFF animate-appears md:w-[255px]", className)} {...props}>
            {children}
        </div>
    )
}

// w-full md:w-[223px] md:h-[178px] lg:w-[255px] lg:h-[137px] flex p-6 gradient text-FFFFFF md:rounded-xl justify-between items-center md:items-end to-blue-500 relative overflow-hidden animate-appears