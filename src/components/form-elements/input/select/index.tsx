import { cn } from "@/utils";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { InputHTMLAttributes, OptionHTMLAttributes } from "react";

export type SelectInputType = {
    label?: string
    caption?: string
    errorMsg?: string
    options: OptionHTMLAttributes<HTMLOptionElement>[]
} & InputHTMLAttributes<HTMLInputElement>

export function SelectInput({ label, caption, errorMsg, id, name, options, defaultValue, className, ...props }: SelectInputType) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[2px]">
                {label && <Label.Root htmlFor={id} className="text-body-3 font-bold">{label}</Label.Root>}
                {caption && <span className="text-body-3 font-normal">{caption}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <Select.Root name={name} defaultValue={defaultValue as string}>
                    <Select.Trigger aria-label={name} id={id} name={name} className={cn("flex justify-between py-[14px] px-6 text-body-2 text-647196 rounded-md bg-F7F8FD active:border-4661E6 invalid:border-D73737", className)}>
                        <Select.Value />
                        <Select.Icon>
                            <ChevronDownIcon className="text-4661E6"/>
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content position="popper" side="bottom" sideOffset={-48} avoidCollisions={false} className="bg-FFFFFF rounded-xl shadow-xl" style={{
                            width: 'var(--radix-select-trigger-width)'
                        }}>
                            <Select.Viewport>
                                {options.map((o, i) => (
                                    <div key={i}>
                                        <Select.Item value={o.value as string} className="py-3 px-6 data-[state=checked]:text-AD1FEA flex justify-between items-center">
                                            <Select.ItemText>{o.children}</Select.ItemText>
                                            <Select.ItemIndicator>
                                                <CheckIcon/>
                                            </Select.ItemIndicator>
                                        </Select.Item>
                                        {i < options.length - 1  && <Select.Separator className="h-[1px] bg-3A4374/15" />}
                                    </div>
                                ))}
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
                <span className="text-heading-4 text-D73737">{errorMsg}</span>
            </div>
        </div>
    )
}