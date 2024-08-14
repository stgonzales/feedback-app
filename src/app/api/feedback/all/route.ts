// import { PersistCookieAction } from '@/actions'
import { CategoryKeyType, SortByValueType } from '@/types'
import { FormatQuerySortBy } from '@/utils'
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams

    const sortByString = searchParams.get('sortBy') as SortByValueType
    const categoriesFilter = searchParams.getAll('category') as CategoryKeyType[]

    const orderBy = await FormatQuerySortBy(sortByString)

    const categories =  (await prisma.feedback.groupBy({
        by: ['category']
    })).map(c => c.category)
    
    const feedbacks = await prisma.feedback.findMany({
        where: {
            OR: [
                {
                    category: {
                        in:  categoriesFilter.length ?  categoriesFilter :  categories
                    }
                }
            ]
        },
        orderBy
    })

    return Response.json(feedbacks)
}