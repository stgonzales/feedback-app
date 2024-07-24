'use client'

import { FeedbackItem } from "@/components/feedback";
import { Frame } from "@/components/layout/frame";
import { Feedback } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FeedbackDetails() {
    const params = useParams<{ id: string }>()
    const [ feedback, setFeedback ] = useState<Feedback | undefined>()
    
    useEffect(() => {
        (async function() {
            const data = await fetch(`/api/feedback/${params.id}`).then(res => res.json()) as Feedback
            setFeedback(data)
        })()
    })
    return (
        <div className="flex flex-col gap-6">
            {feedback && <FeedbackItem {...feedback}/>}
            <Frame className="rounded-xl">
                <p className="text-heading-3">{feedback?.commentsCount} Comments</p>
            </Frame>
        </div>
    )
}