import { cn } from "@/utils";
import { ReactNode } from "react";

export function Tag({ children, className, id }: { children: ReactNode, className?: string, id: string }) {
    return (
        <label htmlFor={id} className={cn("w-fit py-[6px] px-4 rounded-xl bg-F2F4FF font-semibold text-body-3 text-4661E6 hover:bg-[#CFD7FF] hover:cursor-pointer has-[:checked]:bg-4661E6 has-[:checked]:text-FFFFFF", className)}>
            {children}
        </label>
    )
}