import { CategoryKeyType } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ZodEnum, ZodSchema } from 'zod'

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const parseFilters = <T>(s?: T | T[]): T[] | undefined => {
    if(!s) return undefined
    if(!Array.isArray(s)) return [ s ]
    return s
}