
import MainPage from "@/app/ui/pages/main_page/main_page";
import { get_user } from "./ui/server_api/get_user";

export  default async function Home() {

  const userData = await get_user()

  return (<MainPage userData={userData}/>);
}
