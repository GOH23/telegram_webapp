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
    TreeSelect,
} from 'antd';
import { useConfig } from '../ui/server_api/useConfig';
import useSWR from 'swr';
import { fetcherGET, get_URL } from '../ui/server_api/apiFetcher';
import { useGameData } from '../ui/server_api/useGameData';
import { useEffect } from 'react';
import { notFound } from 'next/navigation';
type AddProductForm = {
    Name: string,
    Value: number,
    TypeName: string
}
const { Option } = Select
export default function AdminPage() {
    const onFinish: FormProps<AddProductForm>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    const { login_data: { token,user } } = useConfig()
    useEffect(()=>{
        user.roles !="Admin" && notFound()
    },[])
    const { isLoading, gameData } = useGameData(token)
    const onFinishFailed: FormProps<AddProductForm>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (<main className="min-h-dvh">
        <p className='text-white'>Добавить товар</p>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<AddProductForm>
                label="Name"
                name="Name"
                rules={[{ required: true, message: 'Пожалуйста введите название товара!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<AddProductForm>
                label="Value"
                name="Value"
                rules={[{ required: true, message: 'Пожалуйста введите стоимость товара', type: 'number' }]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<AddProductForm>

                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                {isLoading ? <div>Загрузка</div> : <Select>
                    {gameData.map((el)=>{
                        return(<Option key={el.gameId}>{el.gameName}</Option>)
                    })}
                </Select>}

            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Добавить товар
                </Button>
            </Form.Item>
        </Form>
    </main>)
}