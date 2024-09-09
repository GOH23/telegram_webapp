const get_URL = (pathUrl?: string) => {
    return `https://1640350c0d13.vps.myjino.ru/api/v1${pathUrl}`
}
const fetcherUser = (url: string, data: string) => fetch(url, {
    method: "POST",
    body: JSON.stringify({
        initData: data
    }),
    headers: {
        'Content-Type': 'application/json',

    }
}).then((res) => res.json())
const fetcherGET = (url: string, token: string) => fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}).then((res) => res.json())
export {fetcherUser,fetcherGET,get_URL}