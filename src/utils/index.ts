import { Prisma } from '@prisma/client'
import { CategoryKeyType, SortByValueType } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { api } from '@/api'

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const formatFilters = async (s?: string | string[]): Promise<Array<string>> => {
    if(!s) {
        const categories = await api<{ category: CategoryKeyType }[]>('/categories')
        
        return categories.map(c => c.category)
    } else if(!Array.isArray(s)) return [s]
    return s
}

export const FormatQuerySortBy = async (k?: SortByValueType): Promise<Prisma.FeedbackOrderByWithRelationInput> => {
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