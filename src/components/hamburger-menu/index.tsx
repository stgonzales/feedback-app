import * as Dialog from '@radix-ui/react-dialog'
import { RoadmapSummary } from '../roadmap-summary'
import { HTMLAttributes } from 'react'
import { cn } from '@/utils'

export function HamburgerMenu({ className }: HTMLAttributes<HTMLDivElement>) {
    return (
        <Dialog.Root>
            <Dialog.Trigger title='hamburguer-menu' className={cn('hover:cursor-pointer', className)}>
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="3" fill="white"/>
                    <rect y="7" width="20" height="3" fill="white"/>
                    <rect y="14" width="20" height="3" fill="white"/>
                </svg>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='bg-000000/50 fixed inset-0 top-[99px]'/>
                <Dialog.Content className='bg-F7F8FD fixed w-[90vw] max-w-[271px] h-full pt-6 px-6 top-[99px] right-0 animate-slide-in'>
                    <RoadmapSummary className="data-[state=closed]:hidden"/>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}