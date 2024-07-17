import { CategoryMapType } from '@/types'
import { Feedback } from '@prisma/client'
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

export const CategoriesOptionMap: CategoryMapType = {
    bug: 'Bug',
    enhancement: 'Enhancement',
    feature: 'Feature',
    ui: 'UI',
    ux: 'UX'
} as const

export const NewFeedback: z.ZodType<Pick<Feedback, "title" | "category" | "description">> = z.object({
    title: z.string().min(1),
    category: CategoryKeyEnum,
    description: z.string().min(1),
})