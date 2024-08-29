"use client"
import clsx from "clsx";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { animatedShadow } from "./classname";

export function Header() {
    var app : WebApp
    useEffect(()=>{
        app  = window.Telegram?.WebApp
        console.log(app)
    },[])
    
    const [SelectedMenu,SetSelectedMenu] = useState(0);
    return (<header className={'bg-stone-900 h-16 mx-2 mt-2 rounded-2xl p-2'}>
        <nav className={'flex h-full items-center text-white text-xl'}>
            <p className={
                clsx(
                    animatedShadow,
                )
            }>Sadovolk Store</p>
            <RxAvatar className={' ml-auto text-4xl'}/>
        </nav>
    </header>)
}