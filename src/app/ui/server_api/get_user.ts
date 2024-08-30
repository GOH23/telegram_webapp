import { LaunchParams, retrieveLaunchParams } from "@telegram-apps/sdk";
const get_URL = (pathUrl?: string) => {
    return `http://localhost:3001${pathUrl}`
}
export async function get_user(): Promise<any | undefined> {
    try {
        return await (await fetch(get_URL("/auth/login"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                initData: retrieveLaunchParams().initDataRaw
            })
        })).json()
    } catch (e) {
        
        return undefined;
    }

}