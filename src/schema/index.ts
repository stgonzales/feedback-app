import { z } from "zod";

export const UserSchema = z.object({
    id: z.string().min(1),
    image: z.string().min(1),
    name: z.string().min(1),
    username: z.string().min(1),
})

export const CommentSchema = z.object({
    id: z.string(),
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
