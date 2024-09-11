
type LoginType = {
    token: string,
    user: UserType
}
type ContextType = {
    loadingState: boolean,
    web_app: WebApp,
    login_data: LoginType
}
type UserType ={
    userId: number;
    allowsWriteToPm: boolean
    firstname: string
    languageCode: string
    username: string
    roles: string
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