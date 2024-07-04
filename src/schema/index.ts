import { z } from 'zod'

export const SortByValueEnum = z.enum(['most_upvotes', 'least_upvotes', 'most_comments', 'least_comments'])

export const SortByKeyEnum = z.enum(['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'])

export const SortByOptionSchema = z.object({
    text: SortByKeyEnum,
    value: SortByValueEnum
})

export const SortByOptionsMapSchema = z.array(SortByOptionSchema)

export const CategoryKeyEnum = z.enum(['ui', 'ux', 'enhancement', 'bug', 'feature'])

export const CategoryValueEnum = z.enum(['UI', 'UX', 'Enhancement', 'Bug', 'Feature'])