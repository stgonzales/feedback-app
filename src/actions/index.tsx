"use server"

import { CategoryKeyEnum } from "@/schema";
import { ActionResponse } from "@/types";
import { Feedback } from "@prisma/client";
import { z } from "zod";
import { PrismaClient } from '@prisma/client'
import { redirect } from "next/navigation";

const prisma = new PrismaClient()

const NewFeedback = z.object({
    title: z.string().min(1),
    category: CategoryKeyEnum,
    description: z.string().min(1),
})

export async function CreateNewFeedbackAction(state: ActionResponse<Pick<Feedback, "title" | "category" | "description">>, payload: FormData): Promise<ActionResponse<Pick<Feedback, "title" | "category" | "description">>> {

    const validateNewFeedback = NewFeedback.safeParse({
        title: payload.get("title"),
        category: payload.get("category"),
        description: payload.get("description"),
    })

    if(!validateNewFeedback.success) {
        console.log(validateNewFeedback.error.format().title?._errors[0]);
        
        return {
            error: {
                title: validateNewFeedback.error.format().title?._errors[0],
                category: validateNewFeedback.error.format().category?._errors[0],
                description: validateNewFeedback.error.format().description?._errors[0],
            }
        }
    }

    await prisma.feedback.create({
        data: {
            title: validateNewFeedback.data.title,
            category: validateNewFeedback.data.category,
            description: validateNewFeedback.data.description,
            userId: "e55ff8bb-9589-478c-a27e-58fee59dad90"
        }
    })

    redirect('/feedbacks')
}