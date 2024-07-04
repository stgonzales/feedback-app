"use client"

import { ChangeEvent } from "react";
import { useFormState } from "react-dom";
import { Tag } from "@/components/tag";
import { CategoryKeyType, CategoryMapType } from "@/types";

const categoriesOptionMap: CategoryMapType = {
    bug: 'Bug',
    enhancement: 'Enhancement',
    feature: 'Feature',
    ui: 'UI',
    ux: 'UX'
} as const

export function FilterTags({ categories, action }: { categories: CategoryKeyType[], action: (state: string, payload: FormData) => Promise<string>}) {
    const initialState = 'all'
    const [state, formAction] = useFormState(action, initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData()

        if(e.target.id === initialState || state.includes(initialState)) {
            formData.append('category', e.target.id)
        } else {
            const stateArr = state.split(',').filter(s => s !== initialState)
            let newState = []

            if(stateArr.includes(e.target.id)) {
                const index = stateArr.findIndex(s => s === e.target.id)
                newState = stateArr.slice(index + 1)
            } else {
                newState.push(stateArr.join() + ',' + e.target.id)
            }

            formData.append('category', newState.join())
        }

        formAction(formData)
    }
    
    return (
        <div id="tags" className="w-[255px] p-6 bg-FFFFFF rounded-xl">
            <form action={formAction} className="flex gap-2 flex-wrap">
                <Tag key="all" id="all">
                    <input type="checkbox" id="all" className="hidden" onChange={handleChange} checked={state === "all"}/>
                    All
                </Tag>
                { categories.map(c => (
                    <Tag key={c} id={c}>
                        <input type="checkbox" id={c} className="hidden" onChange={handleChange} checked={state.includes(c)}/>
                        {categoriesOptionMap[c]}
                    </Tag>
                ))}
            </form>
        </div>
    )
}