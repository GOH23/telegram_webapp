import { gameType } from "../server_api/useApi"
type ImageType ={
    imageId: string,
    imagePath: string
}
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
    Type: gameType,
    Image: ImageType
}
export type {LoginType,ContextType,CardType}