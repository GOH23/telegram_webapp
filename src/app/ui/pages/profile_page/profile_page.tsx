"use client"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { animatedShadow } from "../../classname"
import { DataCard } from "./data_card"
import { useConfig } from "../../server_api/useConfig"
import Link from "next/link"



export function ProfilePage() {
    const { web_app, login_data, loadingState } = useConfig()

    return <main className={'min-h-dvh text-white'}>
        <div className={'bg-stone-900 h-auto mx-2 mt-2 rounded-2xl p-2 backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200'}>
            <p >Ваши данные</p>
            <p >Ваш никнейм:</p>
            <p >{login_data.user.username}</p>
            <p >Ваш роль:</p>
            <p >{login_data.user.roles}</p>
            <Link href={'/admin'}></Link>
        </div>
        <DataCard ImageSource={"/logos/gi_logo.png"} GameName={"Genshin Impact"} />
        <DataCard ImageSource={"/logos/hsr_logo.png"} GameName={"Honkai Star Rail"} />
        {login_data.user.roles == "Admin" && <a href={"https://t.me/sadovolk_store"} className={
            clsx('bg-cyan-600 text-lg p-1 mx-2 sm:block m-2 rounded-md hover:bg-cyan-700 transition-all duration-1000 text-white')
        } type="blank">Наш телеграм</a>}

    </main>
}