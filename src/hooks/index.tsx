import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useParams() {
    const router = useRouter()
    const serchParams = useSearchParams()
    const pathname = usePathname()

    const paramstate = () => new URLSearchParams(serchParams)

    const setParams = (key: string, value: string) => {
        const updatedParams = paramstate()
        updatedParams.set(key, value)
        router.replace(`${pathname}?${updatedParams}`)
    }

    const appendParams = (key: string, value: string) => {
        const updatedParams = paramstate()
        updatedParams.append(key, value)
        router.replace(`${pathname}?${updatedParams}`)
    }

    const deleteParams = (key: string, value?: string) => {
        const updatedParams = paramstate()
        updatedParams.delete(key, value)
        router.replace(`${pathname}?${updatedParams}`)
    }

    return { setParams, appendParams, deleteParams, paramstate }
}