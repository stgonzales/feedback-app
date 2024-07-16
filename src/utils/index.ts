import { Prisma } from '@prisma/client'
import { SortByValueType } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const formatFilters = <T>(s?: T | T[]): T[] | undefined => {
    if(!s) return undefined
    if(!Array.isArray(s)) return [ s ]
    return s
}

export const FormatQuerySortBy = async (k: SortByValueType): Promise<Prisma.FeedbackOrderByWithRelationInput> => {
    switch (true) {
        case k === 'least_comments':
            return {
                commentsCount: 'asc'
            }
        case k === 'most_comments':
            return {
                commentsCount: 'desc'
            }
        case k === 'least_upvotes':
            return {
                upvotesCount: 'asc'
            }
        default:
            return {
                upvotesCount: 'desc'
            }
    }
}