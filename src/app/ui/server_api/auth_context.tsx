"use client"
import { notFound } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SWRConfig } from 'swr'
import useSWR from 'swr'

import useSWRMutation from 'swr/mutation'
import { get_URL } from "./get_user";
import { User } from "@telegram-apps/sdk";
type LoginType = {
    token: string,
    user: User
}
type ContextType = {
    loadingState: boolean,
    web_app?: WebApp,
    login_data: any
}
const tg = window.Telegram?.WebApp
var authToken = window.localStorage.getItem("auth_key")
const fetcher = (url: string,data: string) => fetch(url, {
    method: "POST",
    body: JSON.stringify({
        initData: data
    }),
    headers: {
        'Content-Type': 'application/json',
    }
}).then((res) => res.json())
export default function AuthProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [Data, SetData] = useState([])
    const [LoadingState, SetLoadingState] = useState(true)
    //const { data, trigger } = useSWRMutation('/auth/login', PostFetcher)
    const { data,isLoading } = useSWR(get_URL('/auth/login'), (url)=>fetcher(url,tg.initData))


    if (isLoading) {
        return (<div>Loading...</div>)
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

export type { ContextType, LoginType }

