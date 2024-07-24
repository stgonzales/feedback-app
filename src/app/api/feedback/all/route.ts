import { CategoryKeyType, SortByValueType } from '@/types'
import { FormatQuerySortBy } from '@/utils'
import { PrismaClient } from '@prisma/client'
import { headers } from 'next/headers'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const headersList = headers()
    const sortBy = headersList.get('sortBy') as SortByValueType
    const categoryString = headersList.get('categories')!

    const orderBy = await FormatQuerySortBy(sortBy)
    
    const feedbacks = await prisma.feedback.findMany({
        where: {
            OR: [
                {
                    category: {
                        in:  categoryString.split(',') as Array<CategoryKeyType>
                    }
                }
            ]
        },
        orderBy
    })

    return Response.json(feedbacks)
}