import { Form, Select, Button, FormProps, Input } from "antd"
import { LoginType } from "../../types/types_for";
import { useGameData, useImages } from "../../server_api/useApi";
import { fetcherOther, get_URL } from "../../server_api/apiFetcher";

type AddProductForm = {
    Name: string,
    Value: number,
    TypeName: string,
    ImagePath: string,
}
const { Option } = Select
export default function AddProduct({ login_data: { token } }: { login_data: LoginType }) {
    const { isLoading, gameData } = useGameData(token)
    const { isLoading: IsLoadingImage, imageData } = useImages(token)
    const onFinish: FormProps<AddProductForm>['onFinish'] = (values) => {
        fetcherOther(get_URL('/product'), values, "POST", token)
        window.location.reload()
    };
    const onFinishFailed: FormProps<AddProductForm>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (<div className='bg-white m-2 rounded-md p-2'>

        <p className='text-center'>Добавить товар</p>
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
                label="Название вашего продукта"
                name="Name"
                rules={[{ required: true, message: 'Пожалуйста введите название товара!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<AddProductForm>
                label="Стоимость продукта"
                name="Value"
                rules={[{ required: true, message: 'Пожалуйста введите стоимость товара' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<AddProductForm>
                label="Категория товара"
                name="TypeName"
            >
                {isLoading ? <div>Загрузка</div> : <Select >
                    {gameData.map((el) => {
                        return (<Option key={el.gameName}>{el.gameName}</Option>)
                    })}
                </Select>}

            </Form.Item>
            <Form.Item<AddProductForm>
                label="Изображение товара"
                name="ImagePath"
            >
                {IsLoadingImage ? <div>Загрузка</div> : <Select>
                    {imageData.map((el) => {
                        return (<Option key={el.imagePath}>{el.imagePath}</Option>)
                    })}
                </Select>}

            </Form.Item>

            <Form.Item className='flex justify-center'>
                <Button type="primary" htmlType="submit">
                    Добавить товар
                </Button>
            </Form.Item>
        </Form>
    </div>)
}