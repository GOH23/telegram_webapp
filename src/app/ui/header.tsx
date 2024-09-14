"use client"
import { RxAvatar } from "react-icons/rx";
import {motion} from 'framer-motion'

import Link from "next/link";
import { useConfig } from "./server_api/useConfig";
import { MdAdminPanelSettings } from "react-icons/md";
export function Header() {


    const { login_data: { user } } = useConfig()
    return (<motion.header className={'bg-stone-900 h-16 mx-2 mt-2 rounded-2xl p-2 '} initial={{boxShadow: "3px 4px 30px 0px #7300F3"}} animate={{boxShadow: '0px 0px 0px 0px #7300F3'}} transition={{repeat: Infinity,type: 'spring',duration: 1.5,repeatType: 'mirror'}}>
        <nav className={'flex h-full items-center text-white text-xl'}>
            <Link href={"/"} className="text_purple font-bold">Sadovolk Store</Link>
            {/* <a href={"https://t.me/sadovolk_store"} className={
                clsx('bg-cyan-600 text-lg p-1 mx-2 sm:block hidden rounded-md hover:bg-cyan-700 transition-all duration-1000 text-white')
            } type="blank">Наш телеграм</a> */}
            <div className={' ml-auto flex flex-row text-4xl'}>
                <Link href={'/profile'}>
                    <RxAvatar />
                </Link>
                {user.roles == "Admin" && <Link href={'/admin'}>
                    <MdAdminPanelSettings />
                </Link>}

            </div>
        </nav>
    </motion.header>)
}