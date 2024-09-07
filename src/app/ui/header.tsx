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
                clsx('bg-cyan-600 text-lg p-1 mx-2 sm:block hidden rounded-md hover:bg-cyan-700 transition-all duration-1000 text-white')
            } type="blank">Наш телеграм</a>
            <div className={' ml-auto '}>
                <Link href={'/profile'}>
                    <RxAvatar className={'text-4xl'} />
                </Link>
            </div>
        </nav>
    </header>)
}