import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function useParams() {
    const router = useRouter()
    const serchParams = useSearchParams()
    const pathname = usePathname()

    const [paramstate, setParamState] = useState(new URLSearchParams(serchParams))

    const setParams = (key: string, value: string) => {
        const updatedParams = new URLSearchParams(paramstate)
        updatedParams.set(key, value)
        setParamState(updatedParams)
        router.replace(`${pathname}?${updatedParams}`)
    }

    const appendParams = (key: string, value: string) => {
        const updatedParams = new URLSearchParams(paramstate)
        updatedParams.append(key, value)
        setParamState(updatedParams)
        router.replace(`${pathname}?${updatedParams}`)
    }

    const deleteParams = (key: string, value?: string) => {
        const updatedParams = new URLSearchParams(paramstate)
        updatedParams.delete(key, value)
        setParamState(updatedParams)
        router.replace(`${pathname}?${updatedParams}`)
    }

    return { setParams, appendParams, deleteParams, paramstate }
}