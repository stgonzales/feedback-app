"use server"

import { CategoryKeyType } from "@/types";
import { cookies } from "next/headers"

export async function categoryAction(_state: CategoryKeyType[], payload: FormData) {

    const category = JSON.parse(payload.get('category') as string)

    cookies().set('category', payload.get('category') as string)

    return category
}