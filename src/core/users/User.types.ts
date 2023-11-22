export type UserStatus = "Active" | "Inactive" | "Unknown"
export type UserRole = "Staff" | "Admin"

export interface Address {
    state: string 
    city: string 
    zoneCode: string 
    street?: string 
}

export interface User {
    userId: string
    firstName: string 
    lastName: string 
    ci: string 
    address: Address
    phones: string[]
    status: UserStatus
    role: UserRole
}