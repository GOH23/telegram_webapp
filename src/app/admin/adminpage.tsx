"use client"
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    FormProps,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    Tabs,
    TreeSelect,
    Upload,
    UploadFile,
} from 'antd';
import { useConfig } from '../ui/server_api/useConfig';
import useSWR from 'swr';
import { fetcherGET, get_URL } from '../ui/server_api/apiFetcher';
import { useGameData } from '../ui/server_api/useApi';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import AddGame from '../ui/pages/admin_page/AddGame';
import AddProduct from '../ui/pages/admin_page/AddProduct';
import AddImage from '../ui/pages/admin_page/AddImage';


const { Option } = Select
export default function AdminPage() {

    const { login_data } = useConfig()
    const { user, token } = login_data
    useEffect(() => {
        user.roles != "Admin" && notFound()
    }, [])
    return (<main className="min-h-dvh">
        <Tabs
            centered
            className='bg-white m-2 rounded-md '
            items={[
                {
                    label: 'Категории',
                    key: '0',
                    children: <AddGame login_data={login_data} />
                },
                {
                    label: 'Продукт',
                    key: '1',
                    children: <AddProduct login_data={login_data} />
                },
                {
                    label: 'Картинки',
                    key: '2',
                    children: <AddImage login_data={login_data} />
                }
            ]}
        />

    </main >)
}