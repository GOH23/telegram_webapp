import useSWR from "swr"
import { fetcherGET, get_URL } from "./apiFetcher"
export type gameType = {
    gameId: string,
    gameName: string
}
export type ImageType = {
    imageId: string,
    imagePath: string
}
const useGameData = (token: string) => {
    const { data, isLoading, error } = useSWR(get_URL('/games'), (url) => fetcherGET(url, token))
    return {
        gameData: data as gameType[],
        isLoading: isLoading,
        error: error
    }
}
const useImages = (token: string) => {
    const { data, isLoading, error } = useSWR(get_URL('/images'), (url) => fetcherGET(url, token))
    return {
        imageData: data as ImageType[],
        isLoading: isLoading,
        error: error
    }
}
export {useGameData,useImages}