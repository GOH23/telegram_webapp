"use client"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { animatedShadow } from "../../classname"
import { DataCard } from "./data_card"
import { useConfig } from "../../server_api/useConfig"
import { useCloudService } from "../../server_api/useCloudService"


export function ProfilePage() {
    const { web_app, login_data, loadingState } = useConfig()
    const data = useCloudService(web_app,"token")
    return <main className={'min-h-dvh text-white'}>
        <DataCard ImageSource={"/logos/gi_logo.png"} GameName={"Genshin Impact"} />
        <DataCard ImageSource={"/logos/hsr_logo.png"} GameName={"Honkai Star Rail"} />
        {login_data.user.roles != "Admin" && <a href={"https://t.me/sadovolk_store"} className={
            clsx('bg-cyan-600 text-lg p-1 mx-2 sm:block hidden rounded-md hover:bg-cyan-700 transition-all duration-1000 text-white')
        } type="blank">Наш телеграм</a>}
        <div className={'bg-stone-900 h-32 mx-2 mt-2 rounded-2xl p-2'}>
            <p className={
                clsx(
                    animatedShadow,
                )
            }>{login_data.user.username}</p>
            <p className={
                clsx(
                    animatedShadow,
                )
            }>{data}</p>
        </div>
    </main>
}