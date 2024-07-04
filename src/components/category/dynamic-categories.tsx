"use server"

import { GetCategories } from "@/api"
import { InputHTMLAttributes } from "react"
import { Tag } from "../tag"
import { CategoryKeyType, CategoryValueType } from "@/types"

const categoriesOptionMap: Record<CategoryKeyType, CategoryValueType> = {
    'bug': 'Bug',
    'enhancement': 'Enhancement',
    'feature': 'Feature',
    'ui': 'UI',
    'ux': 'UX'
} as const

export async function DynamicCategories(props: InputHTMLAttributes<HTMLInputElement>) {

    const categories = await GetCategories()

    if(!categories.length)

    return (
        <>
            {categories.map(c => (
                <Tag key={c.category} id={c.category}>
                    <input type="checkbox" id={c.category} className="hidden" {...props}/>
                    {categoriesOptionMap[c.category as CategoryKeyType]}
                </Tag>
            ))}
        </>
    )
}