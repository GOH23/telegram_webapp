"use client"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { animatedShadow } from "../../classname"
import { DataCard } from "./data_card"
import { useInitData, useLaunchParams, type User } from '@telegram-apps/sdk-react';
export function ProfilePage() {

    const  initDataRaw  = useInitData()
    useEffect(() => {

    }, [])
    return <main className={'min-h-dvh text-white'}>
        <DataCard ImageSource={"/logos/gi_logo.png"} GameName={"Genshin Impact"}/>
        <DataCard ImageSource={"/logos/hsr_logo.png"} GameName={"Honkai Star Rail"}/>
        <div className={'bg-stone-900 h-32 mx-2 mt-2 rounded-2xl p-2'}>
            <p className={
                clsx(
                    animatedShadow,
                )
            }>{JSON.stringify(useInitData)}</p>
        </div>
    </main>
}