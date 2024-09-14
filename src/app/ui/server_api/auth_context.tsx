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
    const { data, isLoading, error } = useSWR(get_URL('/auth/login'), (url) => fetcher(url, "query_id=AAFbEU9XAAAAAFsRT1cM6QYY&user=%7B%22id%22%3A1464799579%2C%22first_name%22%3A%22Daniil%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22goh222%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1726310741&hash=6da0d4232a521444fcf12b81199e2b69abfd5195d90672a36f141c5cd589b2e2"))
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


