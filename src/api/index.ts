import { cookies } from "next/headers"
import { Feedback, PrismaClient } from "@prisma/client"
import { CategoryKeyType, SortByValueType } from "@/types"
import { formatSortBy } from "@/utils"

const prisma = new PrismaClient()

const defaultFilters: CategoryKeyType[] = ['bug', 'enhancement', 'feature', 'ui', 'ux']

export async function GetRequests(sortby: SortByValueType = 'most_upvotes', filters: CategoryKeyType[] = defaultFilters): Promise<Feedback[]> {
    return await prisma.feedback.findMany({
        where: {
            OR: [
                {
                    category: {
                        in: filters
                    }
                }
            ]
        },
        orderBy: {
            commentsCount: formatSortBy(sortby)
        }
    })
}

export async function GetFeedbackCount(): Promise<number> {
    return await prisma.feedback.count()
}

export async function GetCategories() {
    return await prisma.feedback.groupBy({
        by: ['category'],
        _count: {
            _all: true
        }
    })
}