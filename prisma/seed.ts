import fs from "fs";
import { z } from "zod";
import { PrismaClient } from '@prisma/client'
import { CategoryKeyEnum } from "../src/schema";

const prisma = new PrismaClient()

export const UserSchema = z.object({
    image: z.string().min(1),
    name: z.string().min(1),
    username: z.string().min(1),
})

export const CommentSchema = z.object({
    id: z.number(),
    content: z.string().min(1),
    user: UserSchema,
})

export const ProductRequestSchema = z.object({
    id: z.number(),
    title: z.string().min(1),
    category: CategoryKeyEnum,
    upvotes: z.number().default(0),
    status: z.string().min(1),
    description: z.string().min(1),
    comments: z.array(CommentSchema),
    commentsCount: z.number().default(0)
})

export const DataSchema = z.object({
    productRequests: z.array(ProductRequestSchema)
})

export type DataType = z.infer<typeof DataSchema>

const file = fs.readFileSync(require.resolve("./database/data.json"), {
    encoding: "utf-8",
});

async function main() {
    const { productRequests } = DataSchema.parse(JSON.parse(file))

    productRequests.forEach(async(p) => {
        if(p.comments && p.comments.length > 0) {
            p.comments.forEach(async (c) => {
                await prisma.comment.create({
                    data: {
                        content: c.content,
                        user: {
                            connectOrCreate: {
                                where: {
                                    username: c.user.username,
                                },
                                create: {
                                    name: c.user.name,
                                    username: c.user.username,
                                    image: c.user.image,
                                }
                            }
                        },
                        feedback: {
                            connectOrCreate: {
                                where: {
                                    id: p.id
                                },
                                create: {
                                    title: p.title,
                                    category: p.category,
                                    description: p.description,
                                    status: p.status,
                                    upvotes: p.upvotes,
                                    commentCount: p.comments.length
                                },
                            }
                        }
                    },
                    include: {
                        user: true,
                        feedback: true
                    }
                })
            })
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })