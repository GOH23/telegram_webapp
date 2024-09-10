
type LoginType = {
    token: string,
    user: any
}
type ContextType = {
    loadingState: boolean,
    web_app: WebApp,
    login_data: { token: string,user: any}
}
type CardType = {
    productId: string,
    Name: string,
    ImagePath: string,
    Value: number,
    Type: {
        gameId: number,
        gameName: number
    }
}
export type {LoginType,ContextType,CardType}