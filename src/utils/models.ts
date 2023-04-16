import { ColoumnType } from "./enums"

export interface CardModel {
    id: string
    full_name: string
    age: number
    location: string
    coordinator: string
    column: ColoumnType
}

export interface DragItem {
    index: number
    id: CardModel['id']
    from: ColoumnType
}