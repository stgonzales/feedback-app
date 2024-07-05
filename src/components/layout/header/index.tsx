import { ReactNode } from "react";

export function Header({ children }: { children: ReactNode }) {
    return (
        <header className="bg-373F68 px-6 py-2 flex justify-between items-center animate-appears md:min-w-[689px]  md:pl-6 md:pr-3 md:py-[14px] md:rounded-xl lg:min-w-[825px]">
            {children}
        </header>
    )
}