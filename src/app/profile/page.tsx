import { ProfilePage } from "@/app/ui/pages/profile_page/profile_page";
import { useEffect } from "react";

export default function Home() {
    var app: WebApp | undefined
    useEffect(()=>{
        app = window.Telegram?.WebApp
    },[])
    return (<ProfilePage TelegramUserData={app}/>);
}