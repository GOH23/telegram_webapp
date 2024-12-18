"use client"
import { DataCard } from "./data_card"
import { useConfig } from "../../server_api/useConfig"
import Link from "next/link"
import { CardGradientUI } from "../../cardGradientUI"



export function ProfilePage() {
    const { login_data} = useConfig()

    return <main className={'min-h-dvh text-white'}>
        <CardGradientUI >
            <div className={'bg-stone-900 bg-opacity-50 mx-2 mt-2 rounded-2xl p-2 backdrop-filter  backdrop-blur-md box_shadow2'}>
                <p >Ваши данные</p>
                <p >Ваш никнейм: {login_data.user.username}</p>
                <p >Ваш роль: {login_data.user.roles}</p>
                <Link href={'/admin'}></Link>
            </div>
        </CardGradientUI>
        <CardGradientUI>
            <DataCard ImageSource={"/logos/gi_logo.png"} GameName={"Genshin Impact"} />
        </CardGradientUI>
        <CardGradientUI>

            <DataCard ImageSource={"/logos/hsr_logo.png"} GameName={"Honkai Star Rail"} />
        </CardGradientUI>
    </main>
}