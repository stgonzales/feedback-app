"use server"

import { cookies } from "next/headers"

export async function categoryAction(_state: string, payload: FormData) {

    if(payload.get('category') === 'all') {
        return 'all'
    }

    const category = payload.get('category') as string
    cookies().set('category', category)

    return category
}