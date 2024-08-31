
import { LaunchParams, retrieveLaunchParams, } from "@telegram-apps/sdk";
import { postEvent } from '@telegram-apps/sdk';
const get_URL = (pathUrl?: string) => {
    return `http://localhost:3001${pathUrl}`
}
export function get_user(): Promise<any> {
    try {
        return fetch(get_URL("/auth/login"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                initData: retrieveLaunchParams().initDataRaw
            })
        })
    } catch (e : any) {
        return e.message;
    }

}
