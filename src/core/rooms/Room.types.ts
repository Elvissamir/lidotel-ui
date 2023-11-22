export type RoomStatus = "Available" | "Unavailable" | "Disabled"
export type RoomType = "Custom" | "Resort" | "Hab"

export interface Room {
    roomId: string
    roomNumber: number 
    occupiedFrom: string 
    occupiedUntil: string
    hostsCount: number
    description: string
    type: RoomType
    status: RoomStatus
}