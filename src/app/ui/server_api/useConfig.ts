import { useSWRConfig } from "swr";
import { ContextType } from "./auth_context";

export function useConfig(){
    const { fallback } = useSWRConfig()
    return fallback as ContextType
}