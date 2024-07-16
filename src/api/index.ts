import { Feedback, PrismaClient } from "@prisma/client"
import { CategoryKeyType, SortByValueType } from "@/types"
import { FormatQuerySortBy } from "@/utils"

const prisma = new PrismaClient()

const defaultFilters: CategoryKeyType[] = ['bug', 'enhancement', 'feature', 'ui', 'ux']
const defaultSortBy: SortByValueType = "most_upvotes"

export async function GetFeedbacks(sortBy: SortByValueType = defaultSortBy, filters: CategoryKeyType[] = defaultFilters): Promise<Feedback[]> {
    const orderBy = await FormatQuerySortBy(sortBy)
    
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
        orderBy
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