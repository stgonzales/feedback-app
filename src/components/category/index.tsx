"use client"

import { ChangeEvent } from "react";
import { Tag } from "@/components/tag";
import { CategoryKeyType } from "@/types";
import { CategoriesOptionMap } from "@/schema";
import { useParams } from "@/hooks";
import { Frame } from "../layout/frame";

export function FilterTags({ categories }: { categories: CategoryKeyType[] }) {
    
    const { paramstate, deleteParams, appendParams } = useParams()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const params = paramstate().getAll('category')

        if(e.target.id === 'all') deleteParams('category')
        else if(params.includes(e.target.id)) deleteParams('category', e.target.id)
        else appendParams('category', e.target.id)
    }
    return (
        <Frame id="tags" className="hidden md:w-full md:flex md:rounded-xl md:flex-wrap gap-2">
            <Tag id="all">
                <input type="checkbox" id="all" name="all" className="hidden" onChange={handleChange} checked={!paramstate().has('category') || paramstate().get('category')?.toString() === 'all'}/>
                All
            </Tag>
            { categories.map((c) => (
                <Tag key={c} id={c}>
                    <input type="checkbox" id={c} name={c} className="hidden" onChange={handleChange} checked={paramstate().getAll('category').includes(c)}/>
                    {CategoriesOptionMap[c]}
                </Tag>
            ))}
        </Frame>
    )
}