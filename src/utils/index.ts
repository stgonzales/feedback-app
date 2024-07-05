import { SortByValueType } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ZodEnum, ZodSchema } from 'zod'

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const formatFilters = <T>(s?: T | T[]): T[] | undefined => {
    if(!s) return undefined
    if(!Array.isArray(s)) return [ s ]
    return s
}

export const formatSortBy = (s: SortByValueType): 'asc' | 'desc' => {
    switch (true) {
        case s === 'least_comments':
            return 'asc'
        case s === 'most_comments':
            return 'desc'
        case s === 'least_upvotes':
            return 'asc'
        default:
            return 'desc'
    }
}