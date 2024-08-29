import { ProfilePage } from "@/app/ui/pages/profile_page/profile_page";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { useEffect } from "react";

export default function Home() {
    const { initDataRaw } = retrieveLaunchParams()
    return (<ProfilePage/>);
}