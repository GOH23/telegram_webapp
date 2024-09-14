import { Button, Form, FormProps, Input } from "antd";
import { LoginType } from "../../types/types_for";
type AddGameTypeForm = {
    gameName: string
}
export default function AddGame({login_data: {token}}:{login_data: LoginType}) {
    const onFinish: FormProps<AddGameTypeForm>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed: FormProps<AddGameTypeForm>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (<div className='bg-white m-2 rounded-md p-2'>
        <p className='text-center'>Добавить категорию</p>
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
            <Form.Item<AddGameTypeForm>
                label="Название вашего продукта"
                name="gameName"
                rules={[{ required: true, message: 'Пожалуйста введите название товара!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item className='flex justify-center'>
                <Button type="primary" htmlType="submit">
                    Добавить категорию
                </Button>
            </Form.Item>
        </Form>
    </div>)
}