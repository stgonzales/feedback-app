import { z } from "zod"
import { CategoryKeyEnum, CategoryValueEnum, NewFeedback, SortByKeyEnum, SortByOptionSchema, SortByOptionsMapSchema, SortByValueEnum } from "@/schema"

export type ActionResponse<T> = {
    data?: T
    error?: Record<keyof T, string | undefined> 
}

export type SortByOptionType = z.infer<typeof SortByOptionSchema>
export type SortByOptionsMapType = z.infer<typeof SortByOptionsMapSchema>
export type SortByTextType = z.infer<typeof SortByKeyEnum>
export type SortByValueType = z.infer<typeof SortByValueEnum>

export type CategoryValueType = z.infer<typeof CategoryValueEnum>
export type CategoryKeyType = z.infer<typeof CategoryKeyEnum>
export type CategoryMapType = {
    [key in CategoryKeyType]: CategoryValueType
}

export type NewFeedbackType = z.infer<typeof NewFeedback>
