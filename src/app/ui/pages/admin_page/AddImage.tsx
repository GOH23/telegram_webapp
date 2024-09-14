"use client"
import { Button, Divider, Form, FormProps, Image, Input, Select, Upload, UploadFile } from "antd";
import { useImages } from "../../server_api/useApi";
import { LoginType } from "../../types/types_for";
import { useState } from "react";
import { fetcherFile, fetcherOther, get_URL } from "../../server_api/apiFetcher";

const { Option } = Select

export default function AddImage({ login_data: { token } }: { login_data: LoginType }) {
    const [SelectedImage, SetSelectedImage] = useState("")
    const [UploadedFile, SetUploadedFile] = useState<UploadFile<any>>()
    const { isLoading, imageData } = useImages(token)

    const OnAdd = (file: UploadFile<any>) => {
        let formData = new FormData();
        formData.append("file", file.originFileObj!)
        fetcherFile(get_URL('/images'), formData, "POST", token)
        window.location.reload()
    }
    const OnDelete = () => {
        fetcherOther(get_URL('/images'), {
            ImagePath: SelectedImage
        }, "DELETE", token)
    }
    return (<div className='bg-white m-2 rounded-md p-2'>
        <div className='flex flex-col gap-4'>
            <p className='text-center font-bold'>Выбрать картинку</p>
            {isLoading ? <div>Загрузка</div> : <Select onChange={(el) => { SetSelectedImage(el) }}>
                {imageData.map((el) => {
                    return (<Option key={el.imagePath}>{el.imagePath}</Option>)
                })}
            </Select>}
            {SelectedImage != "" && <div className='flex items-center flex-col  gap-4'>
                <Image src={get_URL(`/images/image/${SelectedImage}`)} width={200} alt={get_URL(`/images/image/${SelectedImage}`)} />
                <Button danger htmlType="submit" className='w-fit' onClick={() => {
                    OnDelete()
                }} >Удалить картинку из сервера</Button>
            </div>}

        </div>
        <Divider />
        <div className='flex justify-center flex-col gap-4'>
            <p className='text-center font-bold'>Добавить картинку</p>
            <Upload showUploadList={false} onChange={(el)=>{
                SetUploadedFile(el.file)
            }}>
                <Button htmlType="submit">Показать картинку</Button>
            </Upload>
            {UploadedFile && <Button htmlType="submit" onClick={()=>OnAdd(UploadedFile)}>Загрузить картинку</Button>}
        </div>




    </div>)
}