import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const categories =  await prisma.feedback.groupBy({
        by: ['category'],
        _count: {
            _all: true
        }
    })

    return Response.json(categories)
}