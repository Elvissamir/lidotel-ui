export type GuestStatus = "Active" | "Inactive" | "Unknown"

export interface Address {
    state: string 
    city: string 
    zoneCode: string 
    street?: string 
}

export interface Guest {
    guestId: string
    firstName: string 
    lastName: string 
    ci: string 
    address: Address
    phones: string[]
    status: GuestStatus
}