import { LampGear } from "../icons/lamp-gear";

export function FeedbackCount({ count }: { count: number }){
    return (
        <div id="feedback-count" className="hidden md:flex gap-4 items-center">
            <LampGear/>
            <p className="text-heading-3">{count} Suggestions</p>
        </div>
    )
}