'use client'
import { Card } from "@/app/ui/card";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { borderAnimStyle } from "../../classname";
import { Types } from "../../types/types_for";
import { Filter_game } from "../../filter_game";
import { useSearchParams } from 'next/navigation'
import { LaunchParams, retrieveLaunchParams } from "@telegram-apps/sdk"
import { notFound } from 'next/navigation'
import { get_user } from "../../server_api/get_user";
const CardData = [{
    name: "60 примогемов",
    value: 1000,
    type: Types[0].name,
    imagePath: "60-kristallov-1675329753.webp"
},
{
    name: "300 примогемов",
    value: 1000,
    type: Types[0].name,
    imagePath: "300-30-kristallov-1675590045.webp"
},
{
    name: "1980 примогемов",
    value: 1000,
    type: Types[0].name,
    imagePath: "1980-260-kristallov-1677645683.webp"
},
{
    name: "",
    value: "",
    type: Types[0].name,
    imagePath: "3280-600-kristallov-1675589200.webp"
}, {
    name: "",
    value: "",
    type: Types[0].name,
    imagePath: ""
}
    , {
    name: "",
    value: "",
    type: Types[0].name,
    imagePath: ""
}]
export default function MainPage({userData}: {userData : any}) {
    const [SelectedType, SetSelectedType] = useState(Types[0])
   
    return (
        <main className="min-h-dvh">
            <Filter_game />
            <p>

            </p>
            <div className="flex flex-row pt-10 flex-wrap items-stretch justify-center  md:gap-5 gap-2">
                {CardData.map((el, ind) => <Card {...el} key={ind} value={Number(el.value)} />)}

            </div>
            <div className={'fixed bottom-0 right-0 cursor-pointer m-5 text-6xl p-2 text-white bg-cyan-600 size-auto flex rounded-xl z-50' + borderAnimStyle}>
                <CgShoppingCart />

            </div>
        </main>
    );
}