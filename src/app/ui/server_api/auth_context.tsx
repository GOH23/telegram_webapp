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
    const { data, isLoading, error } = useSWR(get_URL('/auth/login'), (url) => fetcher(url,"query_id=AAFbEU9XAAAAAFsRT1cECMLv&user=%7B%22id%22%3A1464799579%2C%22first_name%22%3A%22Daniil%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22goh222%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1726337970&hash=baffd76844b7fda2832c2d1e57ec7412ed3b96e385e3181f20366c61f2120ba2"))
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


