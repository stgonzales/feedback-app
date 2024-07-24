"use server"

import { api } from "@/api"
import { InputHTMLAttributes } from "react"
import { Tag } from "../tag"
import { CategoryKeyType } from "@/types"
import { CategoriesOptionMap } from "@/schema"

export async function DynamicCategories(props: InputHTMLAttributes<HTMLInputElement>) {

    const categories = await api<{ category: string }[]>('/categories')

    return (
        <>
            {categories.map(c => (
                <Tag key={c.category} id={c.category}>
                    <input type="checkbox" id={c.category} className="hidden" {...props}/>
                    {CategoriesOptionMap[c.category as CategoryKeyType]}
                </Tag>
            ))}
        </>
    )
}