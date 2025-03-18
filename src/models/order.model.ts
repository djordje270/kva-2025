import { CinemaModel } from "./cinema.model"

export interface OrderModel {
    orderId: number
    id: number
    title: string
    duration: string
    showtime: string
    cinema: CinemaModel
    price: number
    count: number
    status: 'ordered' | 'paid' | 'cancelled'
    rating: null | boolean
}