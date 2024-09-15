const get_URL = (pathUrl?: string) => {
    //https://1640350c0d13.vps.myjino.ru
    //http://localhost:3001
    return `https://1640350c0d13.vps.myjino.ru/api/v1${pathUrl}`
}
const fetcherFile = (url: string, data: FormData, fetchType: "POST" | "DELETE" = "POST", authToken?: string) => fetch(url, {
    method: fetchType,
    body: data,
    headers: authToken ? {
        Authorization: `Bearer ${authToken}`
    } : {
    }
}).then((res) => res.json())
const fetcherOther = (url: string, data: any, fetchType: "POST" | "DELETE" = "POST", authToken?: string) => fetch(url, {
    method: fetchType,
    body: JSON.stringify(data),
    headers: authToken ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
    } : {
        'Content-Type': 'application/json',
    }
}).then((res) => res.json())
const fetcher = (url: string, data: string, fetchType: "POST" | "DELETE" = "POST", authToken?: string) => fetch(url, {
    method: fetchType,
    body: JSON.stringify({
        initData: data
    }),
    headers: authToken ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
    } : {
        'Content-Type': 'application/json',
    }
}).then((res) => res.json())
const fetcherGET = (url: string, token: string) => fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }
}).then((res) => res.json())
export { fetcher, fetcherGET,fetcherOther,fetcherFile, get_URL }