"use client"
import { useState } from "react"

const useCloudService = (web_app: WebApp,nameVal: string) =>{
    const [cloud,setcloud] = useState("")
    try{
        web_app.CloudStorage.getItem(nameVal,(_,value)=> setcloud(value!))
    }catch{

    }
    return cloud
}
export {useCloudService}