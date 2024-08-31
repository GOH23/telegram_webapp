
import { get_user } from "./ui/server_api/get_user";
import dynamic from "next/dynamic";
const MainPage = dynamic(()=> import("@/app/ui/pages/main_page/main_page"),{ssr: false})
export  default async function Home() {



  return (<MainPage />);
}
