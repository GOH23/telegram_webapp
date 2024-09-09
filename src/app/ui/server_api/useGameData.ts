import useSWR from "swr"
import { fetcherGET, get_URL } from "./apiFetcher"
export type gameType = {
    gameId: string,
    gameName: string
}
export const useGameData = (token: string) => {
    const { data, isLoading, error } = useSWR(get_URL('/games'), (url) => fetcherGET(url, token))
    return {
        gameData: data as gameType[],
        isLoading: isLoading,
        error: error
    }
}