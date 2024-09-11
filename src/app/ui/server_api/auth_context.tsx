"use client"
import { notFound } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SWRConfig } from 'swr'
import useSWR from 'swr'
import { initCloudStorage } from '@telegram-apps/sdk';
import useSWRMutation from 'swr/mutation'
import { fetcherUser, get_URL } from "./apiFetcher";
import { LoadingComponent } from "../loadingComponent";


const tg = window.Telegram.WebApp

var authToken = window.localStorage.getItem("auth_key")

export default function AuthProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    //const { data, trigger } = useSWRMutation('/auth/login', PostFetcher)
    const { data, isLoading, error } = useSWR(get_URL('/auth/login'), (url) => fetcherUser(url, tg.initData))
    if (isLoading) {
        return (<LoadingComponent/>)
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


