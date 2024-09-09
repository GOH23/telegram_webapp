"use client"
import { notFound } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SWRConfig } from 'swr'
import useSWR from 'swr'
import { initCloudStorage } from '@telegram-apps/sdk';
import useSWRMutation from 'swr/mutation'
import { get_URL } from "./get_user";


const tg = window.Telegram.WebApp

var authToken = window.localStorage.getItem("auth_key")
const fetcher = (url: string, data: string) => fetch(url, {
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

    //const { data, trigger } = useSWRMutation('/auth/login', PostFetcher)
    const { data, isLoading, error } = useSWR(get_URL('/auth/login'), (url) => fetcher(url, "query_id=AAFbEU9XAAAAAFsRT1eqiju9&user=%7B%22id%22%3A1464799579%2C%22first_name%22%3A%22Daniil%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22goh222%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1725901150&hash=3aae69485b8ed6a26ccffd2fa68904c2bb7df53140e14fd15701e89706c5691e"))


    if (isLoading) {
        return (<div className='text-white text-center'>Loading...</div>)
    }
    try {
        tg.CloudStorage.setItem("token", data.token)
    } catch (error) { }

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


