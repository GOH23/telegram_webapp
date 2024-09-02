"use client"
import { notFound } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SWRConfig } from 'swr'
import useSWR from 'swr'

import useSWRMutation from 'swr/mutation'
import { get_URL } from "./get_user";
import { User } from "@telegram-apps/sdk";
const PostFetcher = (url: string, { arg }: { arg: { initData: string } }) => fetch(get_URL(url), {
    method: 'POST',
    body: JSON.stringify(arg)
}).then(r => r.json())
const GetFetcher = (url: string,) => fetch(get_URL(url)).then(r => r.json())
type LoginType ={
    token: string,
    user: User
}
type ContextType = {
    loadingState: boolean,
    web_app?: WebApp,
    login_data: LoginType
}
var tg = window.Telegram?.WebApp
var authToken = window.localStorage.getItem("auth_key")

export default function AuthProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [LoadingState,SetLoadingState] = useState(true)
    const { data,trigger,error } = useSWRMutation('/auth/login', PostFetcher)
    useEffect(() => {
        try {
            trigger({
                initData: tg.initData
            })
            SetLoadingState(false)
        }
        catch {
            SetLoadingState(false)
        }
    }, [])
    if(LoadingState){
        return(<div>Loading...</div>)
    }
    if(error){
        return(<div>{JSON.stringify(error)}</div>)
    }
    return (<SWRConfig value={{
        fallback: {
            web_app: tg,
            loadingState: LoadingState,
            login_data: data
        }
    }}>
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    </SWRConfig>);
}
export { PostFetcher, GetFetcher }


