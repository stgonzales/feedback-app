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
    const { productRequests } =JSON.parse(file) as DataType
    
    productRequests.forEach(async(p) => {
        //Create feedback
        const feedback = await prisma.feedback.create({
            data: {
                title: p.title,
                category: p.category,
                description: p.description,
                status: p.status,
                upvotes: p.upvotes,
            }
        })

        if(p.comments.length >= 1) {
            await prisma.feedback.update({
                where: {
                    id: feedback.id
                },
                data: {
                    commentCount: p.comments.length
                }
            })

            p.comments.forEach(async (c) => {

                //Create User
                let user = await prisma.user.findUnique({
                    where: {
                        username: c.user.username
                    }
                })

                if(!user) {
                    user = await prisma.user.create({
                        data: {
                            name: c.user.name,
                            username: c.user.username,
                            image: c.user.image,
                        }
                    })
                }

                //Create comment and connect
                await prisma.comment.create({
                    data: {
                        content: c.content,
                        user: {
                            connect: {
                                username: user.username
                            }
                        },
                        feedback: {
                            connect: {
                                id: feedback.id
                            }
                        }
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