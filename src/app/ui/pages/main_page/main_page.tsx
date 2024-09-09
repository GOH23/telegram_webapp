'use client'
import { Card } from "@/app/ui/card";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { borderAnimStyle } from "../../classname";
import { Types } from "../../types/types_for";
import { FilterSelect } from "../../filter_game";
import { IoClose } from "react-icons/io5";
import axios from 'axios'
import useSWR, { useSWRConfig } from "swr";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ShopCartButton } from "./shopcartbutton";
import { CardType } from "../../types/shop_cart_type";
import { Badge } from "antd";
import { useConfig } from "../../server_api/useConfig";
import { useGameData } from "../../server_api/useGameData";

const CardData = [{
    id: 0,
    name: "60 примогемов",
    value: 10,
    type: Types[0].name,
    imagePath: "60-kristallov-1675329753.webp"
},
{
    id: 1,
    name: "300 примогемов",
    value: 1000,
    type: Types[0].name,
    imagePath: "300-30-kristallov-1675590045.webp"
},
{
    id: 2,
    name: "1980 примогемов",
    value: 1000,
    type: Types[0].name,
    imagePath: "1980-260-kristallov-1677645683.webp"
},
{
    id: 3,
    name: "",
    value: "",
    type: Types[0].name,
    imagePath: "3280-600-kristallov-1675589200.webp"
}, {
    id: 4,
    name: "",
    value: "",
    type: Types[0].name,
    imagePath: ""
}, {
    id: 5,
    name: "",
    value: "",
    type: Types[0].name,
    imagePath: ""
}]

export default function MainPage() {

    const {login_data : {token}} = useConfig()
    const {isLoading,gameData} = useGameData(token)
    const [SelectedType, SetSelectedType] = useState(gameData[0])
    return (
        <main className="min-h-dvh">
            <p >Выберите игру для показа товаров</p>
            <FilterSelect  onChange={() => SetSelectedType} SelectedGame={SelectedType} isLoading={isLoading} gameData={gameData} />
            {/* <textarea value={fallback.web_app.initData}/>
            <p className='text-white'>
                {JSON.stringify(fallback.login_data)}
            </p> */}

            <div className="flex flex-row pt-10 flex-wrap items-stretch justify-center  md:gap-5 gap-2">
                {CardData.map((el, ind) => <Card {...el} key={ind}  value={Number(el.value)} />)}

            </div>
            {/* <Badge count={5}>
                <div className={'fixed bottom-0 right-0 cursor-pointer m-5 text-6xl p-2 text-white bg-slate-700 size-auto flex rounded-xl z-50' + borderAnimStyle}>
                    <CgShoppingCart onClick={() => {
                        SetShopCartState({
                            ...ShopCartState,
                            openState: !ShopCartState.openState
                        })

                    }} />

                </div>
            </Badge> */}

            {/* <AnimatePresence>
                {ShopCartState.openState && <motion.div
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 500 }}
                    transition={{ type: 'spring', duration: 1 }}
                    className={clsx(
                        "fixed text-white font-extrabold bg-slate-900 size-full top-0 z-50",
                        "flex justify-center "
                    )}>
                    <p className={clsx(
                        ' text-center text-lg z-10',
                        'cursor-pointer'
                    )}>Корзина товара</p>
                    <IoClose className=' absolute right-0 top-0 text-4xl m-1 cursor-pointer' onClick={() => SetShopCartState({
                        ...ShopCartState,
                        openState: !ShopCartState.openState
                    })} />
                    <ShopCartButton/>
                </motion.div>}
            </AnimatePresence> */}

        </main>
    );
}


