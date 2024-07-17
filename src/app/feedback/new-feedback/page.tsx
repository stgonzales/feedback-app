'use client'

import { CreateNewFeedbackAction } from "@/actions";
import { Button } from "@/components/form-elements/input/button";
import { SelectInput } from "@/components/form-elements/input/select";
import { TextInput } from "@/components/form-elements/input/text";
import { TextAreaInput } from "@/components/form-elements/input/text-area";
import { Frame } from "@/components/layout/frame";
import { ActionResponse, NewFeedbackType } from "@/types";
import Link from "next/link";
import { OptionHTMLAttributes } from "react";
import { useFormState } from "react-dom";

const selectOptions: OptionHTMLAttributes<HTMLOptionElement>[] = [
    {
        value: "feature",
        children: "Feature"
    },
    {
        value: "bug",
        children: "Bug"
    },
    {
        value: "ui",
        children: "UI"
    },
    {
        value: "ux",
        children: "UX"
    },
    {
        value: "enhancement",
        children: "Enhancement"
    },
]

export default function NewFeedback() {
    const [state, action] = useFormState<ActionResponse<NewFeedbackType>, FormData>(CreateNewFeedbackAction, {})
    
    return (
        <Frame className="rounded-xl flex flex-col gap-6 pt-11">
            <h2 className="text-heading-3">Create New Feedback</h2>
            <form action={action} className="flex flex-col gap-6">
                <TextInput id="title" name="title" label="Feedback Title" caption="Add a short, descriptive headline" errorMsg={state.error?.title}/>
                <SelectInput id="category" name="category" label="Category" caption="Choose a category for your feedback" defaultValue="feature" options={selectOptions} errorMsg={state.error?.category}/>
                <TextAreaInput id="description" name="description" label="Feedback Detail" caption="Include any specific comments on what should be improved, added, etc." errorMsg={state.error?.description}/>
                <div className="flex flex-col gap-4 sm:flex-row-reverse">
                    <Button type="submit">Add Feedback</Button>
                    <Button asChild variant="dark" className="flex justify-center">
                        <Link href="/feedbacks">
                            Cancel
                        </Link>
                    </Button>
                </div>
            </form>
        </Frame>
    )
}