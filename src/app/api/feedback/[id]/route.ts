import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string }}) {
    const feedback = await prisma.feedback.findUnique({
        where: {
            id: params.id
        }
    })

    return Response.json(feedback)
}