"use client"
import { Select } from "antd"
import { Dispatch, SetStateAction } from "react"
import clsx from "clsx"
import { gameType } from "./server_api/useGameData"
export function FilterSelect({ onChange, SelectedGame,isLoading,gameData}: {

    onChange: Dispatch<SetStateAction<gameType>>, SelectedGame: gameType,isLoading: boolean,gameData: gameType[]
}) {

    if(isLoading){ 
        return(<div>Skeleton</div>)
    }
    return (<>
    <Select
        onChange={onChange}
        options={gameData.map((el) => {
            return {
                value: el.gameName, label: <span className={clsx(
                    'text-white'
                )}>{el.gameName}</span>
            }
        })}
        showSearch
        optionFilterProp="value"
        defaultValue={SelectedGame}
        className={

            clsx(" mx-2 mt-2 *:text-white select_box")
        }
        popupClassName={
            clsx(' bg-stone-900')
        }


    />
    </>)
}