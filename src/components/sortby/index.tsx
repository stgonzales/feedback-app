'use client'

import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons'
import { useParams } from '@/hooks'
import { SortByOptionType, SortByOptionsMapType, SortByTextType, SortByValueType } from '@/types'

export const sortByOptionMap: Record<SortByValueType, SortByTextType> = {
    'most_upvotes': 'Most Upvotes',
    'least_upvotes': 'Least Upvotes',
    'most_comments': 'Most Comments',
    'least_comments': 'Least Comments'
} as const

const sortByOptions: SortByOptionsMapType = [
    {
        value: 'most_upvotes',
        text: 'Most Upvotes'
    },
    {
        value: 'least_upvotes',
        text: 'Least Upvotes'
    },
    {
        value: 'most_comments',
        text: 'Most Comments'
    },
    {
        value: 'least_comments',
        text: 'Least Comments'
    },
]

export function SortBy() {
    const { setParams } = useParams()

    const [ sortBy, setSortBy ] = useState<SortByOptionType>({
        value: 'most_upvotes',
        text: 'Most Upvotes'
    })

    const handleSortByChange = (value: SortByValueType) => {
        setParams('sortBy', value)

        setSortBy({
            value,
            text: sortByOptionMap[value]
        })
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild className="py-[26px] bg-373F68">
                <button aria-label="Sort By Options" className='flex items-center gap-1 text-body-3 text-F2F4FF data-[state=open]:text-F2F4FF/75 group text-nowrap'>
                    Sort by: 
                    <span className="text-heading-4" >
                        <div className='flex items-center gap-2'>
                            {sortBy.text}
                            <ChevronDownIcon color='#FFF' width={18} height={18} className='group-data-[state=open]:rotate-180'/>
                        </div>
                    </span>
                </button>
            </DropdownMenu.Trigger>
            
            <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={24} className='min-w-64 bg-FFFFFF rounded-lg text-[#647196] text-body-1 drop-shadow-xl'>
                    <DropdownMenu.RadioGroup value={sortBy.value} onValueChange={(s) => handleSortByChange(s as SortByValueType)}>
                    {sortByOptions.map((s, i) => (
                            <div key={i}>
                                <DropdownMenu.RadioItem key={i} value={s.value} className='py-3 px-6 flex items-center justify-between data-[state=checked]:text-AD1FEA'>
                                    {s.text}
                                    <DropdownMenu.ItemIndicator>
                                        <CheckIcon color='#AD1FEA' width={24} height={24}/>
                                    </DropdownMenu.ItemIndicator>
                                </DropdownMenu.RadioItem>
                                {(i == 0 || i <= sortByOptions.length - 2) && <DropdownMenu.Separator className='h-[1px] bg-[#979797]/50'/>}
                            </div>
                        )
                    )}
                </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}