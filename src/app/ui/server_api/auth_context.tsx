"use client"
import { SWRConfig } from 'swr'
import useSWR from 'swr'
import { fetcher, get_URL } from "./apiFetcher";
import { LoadingPage } from "../pages/LoadingPage";
const tg = window.Telegram.WebApp
export default function AuthProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    //const { data, trigger } = useSWRMutation('/auth/login', PostFetcher)
    const { data, isLoading, error } = useSWR(get_URL('/auth/login'), (url) => fetcher(url,tg.initData))
    if (isLoading) {
        return (<LoadingPage/>)
    }
    if (error) {
        return (<div className='text-white text-center'>Error...</div>)
    }
    return (<SWRConfig value={{
        fallback: {
            web_app: tg,
            loadingState: isLoading,
            login_data: data
        }
    }}>
        {children}
    </SWRConfig>);
}


