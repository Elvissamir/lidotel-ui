export type OrderStatus = "Completed" | "Canceled" | "Unknown" | "In Progress"
export type OrderType = "Food" | "Other"

export interface OrderItems {
    title: string 
    description: string
    price: number
}

export interface Order {
    roomNumber: number 
    userId: string
    orderId: string
    title: string 
    items: OrderItems[]
    status: OrderStatus
    type: OrderType
    created_at: string 
}