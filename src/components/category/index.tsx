"use client"

import { ChangeEvent } from "react";
import { useFormState } from "react-dom";
import { Tag } from "@/components/tag";
import { CategoryKeyType } from "@/types";
import { CategoriesOptionMap } from "@/schema";

export function FilterTags({ categories, action }: { categories: CategoryKeyType[], action: (state: CategoryKeyType[], payload: FormData) => Promise<CategoryKeyType[]>}) {
    const initialState: CategoryKeyType[]  = []
    const [state, formAction] = useFormState(action, initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData()

        let newState: CategoryKeyType[] = initialState

        if(e.target.id === 'all') {
            formData.append('category', JSON.stringify(initialState))
        } else {
            const id = e.target.id as CategoryKeyType

            if(state.includes(id)) {
                newState = state.filter(s => s !== id)
            } else {
                newState.push(...state, id)
            }

            formData.append('category', JSON.stringify(newState))
        }

        formAction(formData)
    }
    
    return (
        <div id="tags" className="w-[255px] p-6 bg-FFFFFF rounded-xl">
            <form action={formAction} className="flex gap-2 flex-wrap">
                <Tag key="all" id="all">
                    <input type="checkbox" id="all" className="hidden" onChange={handleChange} checked={!state.length}/>
                    All
                </Tag>
                { categories.map(c => (
                    <Tag key={c} id={c}>
                        <input type="checkbox" id={c} className="hidden" onChange={handleChange} checked={state.includes(c)}/>
                        {CategoriesOptionMap[c]}
                    </Tag>
                ))}
            </form>
        </div>
    )
}