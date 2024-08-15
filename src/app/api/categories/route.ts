import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const categories =  (await prisma.feedback.groupBy({
        by: ['category']
    })).map(c => c.category)

    return Response.json(categories)
}