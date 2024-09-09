"use client"
import { useState } from "react"

const useCloudService = (web_app: WebApp,nameVal: string) =>{
    const [cloud,setcloud] = useState("")

    try{
        web_app.CloudStorage.getItem(nameVal,(_,value)=> setcloud(value!))
    }catch{

    }
    web_app.showAlert(cloud)
    return cloud
}
export {useCloudService}