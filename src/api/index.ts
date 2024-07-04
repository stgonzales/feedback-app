import { cookies } from "next/headers"
import { Feedback, PrismaClient } from "@prisma/client"
import { SortByValueType } from "@/types"

const prisma = new PrismaClient()

export async function GetRequests(sortby: SortByValueType = 'most_upvotes'): Promise<Feedback[]> {
    const raw = cookies().get('category')?.value as string
    const parsed = JSON.parse(raw)
    const categories = !parsed.length ? ['bug', 'enhancement', 'feature', 'ui', 'ux'] : parsed

    switch (true) {
        case sortby === 'least_comments':
            return await prisma.feedback.findMany({
                where: {
                    OR: [
                        {
                            category: {
                                in: categories
                            }
                        }
                    ]
                },
                orderBy: {
                    commentCount: 'asc'
                }
            })

        case sortby === 'most_comments':
            return await prisma.feedback.findMany({
                where: {
                    OR: [
                        {
                            category: {
                                in: categories
                            }
                        }
                    ]
                },
                orderBy: {
                    commentCount: 'desc'
                }
            })

        case sortby === 'least_upvotes':
            return await prisma.feedback.findMany({
                where: {
                    OR: [
                        {
                            category: {
                                in: categories
                            }
                        }
                    ]
                },
                orderBy: {
                    upvotes: 'asc'
                }
            })

        default:
            return await prisma.feedback.findMany({
                where: {
                    OR: [
                        {
                            category: {
                                in: categories
                            }
                        }
                    ]
                },
                orderBy: {
                    upvotes: 'desc'
                }
            })
    }
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