import { Types } from "./types_for"

type ShopCartType ={
    openState: boolean,
    items: CardType[]
}
type CardType ={
    id: number,
    count: number
}
export type {ShopCartType,CardType}