import clsx from "clsx";
import { useConfig } from "../../server_api/useConfig";

export function ShopCartButton(){
    const { web_app, login_data, loadingState } = useConfig()
    return(<button
    className={clsx(
        " bg-green-700",
        " w-full p-4 rounded-xl text-white uppercase",
        "fixed bottom-0"
    )}
     onClick={()=>{
        web_app?.onEvent('mainButtonClicked',()=>{
            web_app?.sendData(JSON.stringify({
                result: "flex flex-row pt-10 flex-wrap items-stretch justify-center  md:gap-5 gap-2"
            }))
        });
     }}>
        Подтвердить
    </button>)
}