import clsx from "clsx";

export function ShopCartButton(){
    return(<button
    className={clsx(
        " bg-green-700",
        " w-full p-4 rounded-xl text-white uppercase",
        "fixed bottom-0"
    )}>
        Подтвердить
    </button>)
}