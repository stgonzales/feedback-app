"use server"

export type APIResponse<T> = {
    status: number
    data?: T
}

export async function api<T>(path: string, options?: RequestInit) {
    return fetch(`http://localhost:3000/api${path}`, {
        ...options,
    }).then((res) => res.json() as Promise<T>)
}