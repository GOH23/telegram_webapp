import { useSWRConfig } from "swr";
import { ContextType } from "../types/types_for";


export function useConfig(){
    const { fallback } = useSWRConfig()
    return fallback as ContextType
}