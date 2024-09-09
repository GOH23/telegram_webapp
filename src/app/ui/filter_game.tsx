"use client"
import { Select } from "antd"
import { Types } from "./types/types_for"
import { Dispatch, SetStateAction, useState } from "react"
import clsx from "clsx"
import useSWR from "swr";
import { fetcherGET, get_URL } from "./server_api/apiFetcher";
import { useCloudService } from "./server_api/useCloudService";
import { useConfig } from "./server_api/useConfig";
export function FilterSelect({ onChange, SelectedGame,web_app }: {
    web_app: WebApp,
    onChange: Dispatch<SetStateAction<{
        id: number;
        name: string;
    }>>, SelectedGame: any
}) {
    const tokendata = useCloudService(web_app,"token")
    const { data,isLoading,error } = useSWR(get_URL('/games'), (url) => fetcherGET(url,tokendata))
    if(isLoading){ 
        return(<div>Skeleton</div>)
    }
    return (<>
    <Select
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


    />
    <p>{JSON.stringify(data)}</p>
    <p>{JSON.stringify(error)}</p>
    </>)
}