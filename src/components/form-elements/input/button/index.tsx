import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv } from 'tailwind-variants'
import { cn } from '@/utils'

export type ButtonType = {
    asChild?: boolean
    styleAs?: 'button' | 'link'
    variant?: 'purple' | 'blue' | 'dark' | 'red'
} & ButtonHTMLAttributes<HTMLButtonElement>

const buttonStyle = tv({
    variants: {
        color: {
            purple: {
                button: 'bg-AD1FEA hover:bg-AD1FEA/50'
            },
            blue: {
                button: 'bg-4661E6 hover:bg-4661E6/50'
            },
            dark: {
                button: 'bg-3A4374 hover:bg-3A4374/50'
            },
            red: {
                button: 'bg-D73737 hover:bg-D73737/50'
            },
        }
    },
    slots: {
        button: 'h-fit text-heading-4 font-bold text-F2F4FF py-3 px-4 rounded-xl text-nowrap',
        link: 'text-heading-4 font-bold text-647196 hover:underline'
    }
})

export function Button({ asChild = false, styleAs = 'button', variant = 'purple', className, children }: ButtonType) {

    const Component = asChild ? Slot : 'button'

    const {button, link} = buttonStyle()

    return <Component className={cn(styleAs === 'link' ? link({ color: variant }) : button({ color: variant }) ,className)}>{children}</Component>
}