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
    login_data: LoginType
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
                    initData: tg.initData
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                SetData(res.data)
                SetLoadingState(false)
            })

        }
        catch (e: any) {
            SetData(e.message)
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


