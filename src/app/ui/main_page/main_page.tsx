'use client'
import { Card } from "@/app/ui/card";
import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { borderAnimStyle } from "../classname";
import { Types } from "../types/types_for";

const CardData = [{
    name: "60 примогемов",
    value: 1000,
    type: Types.GI,
    imagePath: ""
},
{
    name: "",
    value: "",
    type: Types.GI,
    imagePath: ""
},
{
    name: "",
    value: "",
    type: Types.GI,
    imagePath: ""
},
{
    name: "",
    value: "",
    type: Types.GI,
    imagePath: ""
}, {
    name: "",
    value: "",
    type: Types.GI,
    imagePath: ""
}
    , {
    name: "",
    value: "",
    type: Types.GI,
    imagePath: ""
}]
export default function MainPage() {
    const [SelectedType, SetSelectedType] = useState(Types.GI)
    return (
        <main className="bg-stone-950 min-h-dvh">
            <div className="flex flex-row pt-10 flex-wrap items-stretch justify-center  gap-5">
                {CardData.map((el,ind)=><Card key={ind} name={el.name} value={Number(el.value)}/>)}
            </div>
            <div className={'fixed bottom-0 right-0 cursor-pointer m-5 text-6xl p-2 text-white bg-cyan-600 size-auto flex rounded-xl '+borderAnimStyle}>
                <CgShoppingCart/>
            </div>
        </main>
    );
}