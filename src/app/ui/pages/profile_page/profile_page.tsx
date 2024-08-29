"use client"
import { useEffect } from "react"

export function ProfilePage(){
    var app: WebApp | undefined
    useEffect(()=>{
        app = window.Telegram?.WebApp
    },[])
    return <main className="min-h-dvh">
        <div className={'bg-stone-900 h-16 mx-2 mt-2 rounded-2xl p-2'}></div>
        <div className={'bg-stone-900 h-16 mx-2 mt-2 rounded-2xl p-2'}></div>
        <div className={'bg-stone-900 h-16 mx-2 mt-2 rounded-2xl p-2'}></div>
    </main>
}