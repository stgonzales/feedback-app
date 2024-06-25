import { cn } from "@/utils";
import { ReactNode } from "react";

export function Tag({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("w-fit py-[6px] px-4 rounded-xl bg-F2F4FF font-semibold text-body-3 text-4661E6", className)}>
            {children}
        </div>
    )
}