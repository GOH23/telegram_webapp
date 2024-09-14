"use client"
import { notFound } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SWRConfig } from 'swr'
import useSWR from 'swr'
import { initCloudStorage } from '@telegram-apps/sdk';
import useSWRMutation from 'swr/mutation'
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


