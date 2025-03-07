import { CinemaModel } from "./cinema.model"

export interface OrderModel {
    orderId: number
    id: number
    title: string
    duration: string
    showtime: string
    cinema: CinemaModel
    count: number
    pricePerItem: number
    status: 'ordered' | 'paid' | 'canceled'
    rating: null | boolean
}