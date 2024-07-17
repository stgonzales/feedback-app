import { cn } from "@/utils";
import * as Label from "@radix-ui/react-label";
import { InputHTMLAttributes } from "react";

export type TextInputType = {
    label?: string
    caption?: string
    errorMsg?: string
} & InputHTMLAttributes<HTMLInputElement>

export function TextInput({ label, caption, errorMsg, id, name, ...props }: TextInputType) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[2px]">
                <Label.Root htmlFor={id} className="text-body-3 font-bold">{label}</Label.Root>
                <span className="text-body-3 font-normal">{caption}</span>
            </div>
            <div className="flex flex-col gap-1">
                <input type="text" name={name} id={id} {...props} className={cn("py-[14px] pl-6 text-body-2 text-3A4374 rounded-md bg-F7F8FD focus:outline-4661E6", errorMsg && "border border-D73737")}/>
                <span className="text-heading-4 font-normal text-D73737">{errorMsg}</span>
            </div>
        </div>
    )
}