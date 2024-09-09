"use client"
import { Select } from "antd"
import { Dispatch, SetStateAction } from "react"
import clsx from "clsx"
import { gameType } from "./server_api/useGameData"
export function FilterSelect({ isLoading,gameData}: {

    isLoading: boolean,gameData: gameType[]
}) {

    if(isLoading){ 
        return(<div>Skeleton</div>)
    }
    return (<>
    <Select

        options={gameData.map((el) => {
            return {
                value: el.gameName, label: <span className={clsx(
                    'text-white'
                )}>{el.gameName}</span>
            }
        })}
        showSearch
        optionFilterProp="value"
        className={

            clsx(" mx-2 mt-2 *:text-white select_box")
        }
        popupClassName={
            clsx(' bg-stone-900')
        }


    />
    </>)
}