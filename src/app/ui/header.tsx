"use client"
import clsx from "clsx";
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { animatedShadow } from "./classname";
import Link from "next/link";

export function Header() {
    

    const [SelectedMenu, SetSelectedMenu] = useState(0);
    return (<header className={'bg-stone-900 h-16 mx-2 mt-2 rounded-2xl p-2'}>
        <nav className={'flex h-full items-center text-white text-xl'}>
            <p className={
                clsx(
                    animatedShadow,
                )
            }>Sadovolk Store</p>
            <a href={"https://t.me/sadovolk_store"} className={
                clsx('bg-cyan-600 text-1xl text-white')
            } type="blank">Наш телеграм</a>
            <Link href={'/profile'} className={' ml-auto '}>
                <RxAvatar className={'text-4xl'} />
            </Link>
        </nav>
    </header>)
}