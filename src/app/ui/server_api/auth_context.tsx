"use client"
import { notFound } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SWRConfig } from 'swr'
import useSWR from 'swr'

import useSWRMutation from 'swr/mutation'
import { get_URL } from "./get_user";
import { User } from "@telegram-apps/sdk";
import axios from "axios";
const PostFetcher = (url: string, arg: any ) => axios.post(get_URL(url), {
    body: JSON.stringify(arg),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.data)
const GetFetcher = (url: string,) => fetch(get_URL(url)).then(r => r.json())
type LoginType = {
    token: string,
    user: User
}
type ContextType = {
    loadingState: boolean,
    web_app?: WebApp,
    login_data: any
}
const tg = window.Telegram.WebApp
var authToken = window.localStorage.getItem("auth_key")

export default function AuthProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [Data,SetData] = useState([])
    const [LoadingState, SetLoadingState] = useState(true)
    //const { data, trigger } = useSWRMutation('/auth/login', PostFetcher)
    useEffect(() => {
        try {
            axios.post(get_URL('/auth/login'), {
                body: JSON.stringify({
                    initData: "user=%7B%22id%22%3A1464799579%2C%22first_name%22%3A%22Daniil%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22goh222%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-3883608311451396396&chat_type=sender&auth_date=1725811122&hash=327936a46be4ac7bb58c934df00d9f66befe53b22237943a7f370ac5451bb734"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'https://telegram-sell-bot.vercel.app'
                }
            }).then(res => {
                SetData(res.data)
            }).finally(()=>{
                SetLoadingState(false)
            })
        }
        catch (e: any) {
            SetLoadingState(false)
        }
    }, [])

    if (LoadingState) {
        return (<div>Loading...</div>)
    }
    return (<SWRConfig value={{
        fallback: {
            web_app: tg,
            loadingState: LoadingState,
            login_data: [Data]
        }
    }}>
        {children}
    </SWRConfig>);
}
export { PostFetcher, GetFetcher }
export type {ContextType,LoginType}

