import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { InputHTMLAttributes } from "react";

export type SelectInputType = {
    label?: string
    caption?: string
    errorMsg?: string
} & InputHTMLAttributes<HTMLInputElement>

export function SelectInput({ label, caption, errorMsg, id, name, ...props }: SelectInputType) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[2px]">
                <Label.Root htmlFor={id} className="text-body-3 font-bold">{label}</Label.Root>
                <span className="text-body-3 font-normal">{caption}</span>
            </div>
            <div className="flex flex-col gap-1">
                {/* //TODO: Implement Radix Select Input */}
                {/* <input type="text" name={name} id={id} {...props} className="py-[14px] pl-6 text-body-2 text-3A4374 rounded-md bg-F7F8FD active:border-4661E6 invalid:border-D73737"/> */}
                <Select.Root name={name} defaultValue="feature">
                    <Select.Trigger aria-label={name} id={id} name={name} className="flex justify-between py-[14px] px-6 text-body-2 text-647196 rounded-md bg-F7F8FD active:border-4661E6 invalid:border-D73737">
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
                                <Select.Item value="feature" className="py-3 px-6 data-[state=checked]:text-AD1FEA flex justify-between items-center">
                                    <Select.ItemText>Feature</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                                <Select.Separator className="h-[1px] bg-3A4374/15" />
                                <Select.Item value="ui" className="py-3 px-6 data-[state=checked]:text-AD1FEA flex justify-between items-center">
                                    <Select.ItemText>UI</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                                <Select.Separator className="h-[1px] bg-3A4374/15" />
                                <Select.Item value="ux" className="py-3 px-6 data-[state=checked]:text-AD1FEA flex justify-between items-center">
                                    <Select.ItemText>UX</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                                <Select.Separator className="h-[1px] bg-3A4374/15" />
                                <Select.Item value="bug" className="py-3 px-6 data-[state=checked]:text-AD1FEA flex justify-between items-center">
                                    <Select.ItemText>Bug</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                                <Select.Separator className="h-[1px] bg-3A4374/15" />
                                <Select.Item value="enhancement" className="py-3 px-6 data-[state=checked]:text-AD1FEA flex justify-between items-center">
                                    <Select.ItemText>Enhancement</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
                <span className="text-heading-4 text-D73737">{errorMsg}</span>
            </div>
        </div>
    )
}