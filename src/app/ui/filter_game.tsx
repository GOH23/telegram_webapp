import { Select } from "antd"
import { Types } from "./types/types_for"
import { Dispatch, SetStateAction, useState } from "react"
import clsx from "clsx"
export function FilterSelect({ onChange, SelectedGame }: {
    onChange: Dispatch<SetStateAction<{
        id: number;
        name: string;
    }>>, SelectedGame: any
}) {
    return (<Select
        onChange={onChange}
        options={Types.map((el) => {
            return {
                value: el.name, label: <span className={clsx(
                    'text-white'
                )}>{el.name}</span>
            }
        })}
        showSearch
        optionFilterProp="value"
        defaultValue={SelectedGame.name}
        className={

            clsx(" mx-2 mt-2 *:text-white select_box")
        }
        popupClassName={
            clsx(' bg-stone-900')
        }


    />)
}