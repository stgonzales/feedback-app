import fs from "fs";
import { Feedback, PrismaClient } from '@prisma/client'
import { DataType } from "@/schema";
const prisma = new PrismaClient()

const file = fs.readFileSync(require.resolve("./database/data.json"), {
    encoding: "utf-8",
});

const { productRequests } = JSON.parse(file) as DataType

async function main() {
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