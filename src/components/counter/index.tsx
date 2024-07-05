import { GetFeedbackCount } from "@/api";
import { LampGear } from "../icons/lamp-gear";

export async function FeedbackCount(){
    const count = await GetFeedbackCount()

    return (
        <div className="hidden md:flex gap-4 items-center">
            <LampGear/>
            <p className="text-heading-3">{count} Suggestions</p>
        </div>
    )
}