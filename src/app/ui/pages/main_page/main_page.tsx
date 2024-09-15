'use client'
import { Card } from "@/app/ui/card";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { borderAnimStyle } from "../../classname";

import { FilterSelect } from "../../filter_game";
import { IoClose, IoGameController } from "react-icons/io5";
import axios from 'axios'
import useSWR, { useSWRConfig } from "swr";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ShopCartButton } from "./shopcartbutton";

import { Badge, Modal } from "antd";
import { useConfig } from "../../server_api/useConfig";
import { useGameData } from "../../server_api/useApi";
import { fetcherGET, get_URL } from "../../server_api/apiFetcher";
import { CardType } from "../../types/types_for";
import { LoadingPage } from "../LoadingPage";
import { GameSelectCard } from "../../GameSelectCard";
import { ModalSelectGame } from "../../ModalSelectGame";




export default function MainPage() {

    const { login_data: { token } } = useConfig()
    const { isLoading, gameData } = useGameData(token)
    const [SelectedType, SetSelectedType] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { data: products, error } = useSWR(() => get_URL(`/product?name=${gameData[SelectedType].gameName}`), (url) => fetcherGET(url, token))

    return (
        <main className="min-h-dvh">

            <div className="flex flex-row pt-10 flex-wrap items-stretch justify-center  md:gap-5 gap-2">
                {!products ? <LoadingPage /> : (products as CardType[]).map((el, ind) => <Card key={ind} data={el} />)}
            </div>
            <div className=' border-t-2 w-fit rounded-e-md bg_purple text-white cursor-pointer h-fit border-r-2 border-b-2 fixed top-0 bottom-0 my-auto translate-y-1/2 p-2 text-5xl ' onClick={showModal}>
                <IoGameController />
            </div>
            <ModalSelectGame
                
                gameData={gameData}
                isLoading={isLoading}
                isModalOpen={isModalOpen}
                handleOk={handleOk} handleCancel={handleCancel} />
            {/* <Modal wrapClassName="bg_purple blur_bg" title="Выберите категорию игры" centered loading={isLoading} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className='absolute top-0 text-white'>S</p>
                {isLoading ? <div></div> : gameData.map((el) => {
                    return (<GameSelectCard key={el.gameId} gameData={el}/>)
                })}
            </Modal> */}
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


