
type LoginType = {
    token: string,
    user: any
}
type ContextType = {
    loadingState: boolean,
    web_app: WebApp,
    login_data: any
}
export const Types = [
    { id: 1, name: 'Genshin Impact' },
    { id: 2, name: 'Honkai Star Rail' },
    { id: 3, name: 'Zenless Zone Zero' },
]
export type {LoginType,ContextType}