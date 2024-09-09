import { Select } from "antd"
import { Types } from "./types/types_for"
import { Dispatch, SetStateAction, useState } from "react"
import clsx from "clsx"
import useSWR from "swr";
import { fetcherGET, get_URL } from "./server_api/apiFetcher";
import { useCloudService } from "./server_api/useCloudService";
import { useConfig } from "./server_api/useConfig";
export function FilterSelect({ onChange, SelectedGame }: {
    onChange: Dispatch<SetStateAction<{
        id: number;
        name: string;
    }>>, SelectedGame: any
}) {
    const { web_app } = useConfig()
    const { data } = useSWR(get_URL('/games'), (url) => fetcherGET(url,useCloudService(web_app,"token")))
    web_app.showAlert(JSON.stringify(data))
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