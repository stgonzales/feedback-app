import { Button } from "@/components/form-elements/input/button";
import { SelectInput } from "@/components/form-elements/input/select";
import { TextInput } from "@/components/form-elements/input/text";
import { TextAreaInput } from "@/components/form-elements/input/text-area";
import { Frame } from "@/components/layout/frame";

export default function NewFeedback() {
    return (
        <Frame className="rounded-xl flex flex-col gap-6 pt-11">
            <h2 className="text-heading-3">Create New Feedback</h2>
            <form action="" className="flex flex-col gap-6">
                <TextInput id="title" name="title" label="Feedback Title" caption="Add a short, descriptive headline"/>
                <SelectInput id="category" name="category" label="Category" caption="Choose a category for your feedback"/>
                <TextAreaInput id="description" name="description" label="Feedback Detail" caption="Include any specific comments on what should be improved, added, etc."/>
                <Button type="submit">Add Feedback</Button>
            </form>
        </Frame>
    )
}