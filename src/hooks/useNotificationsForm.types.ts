export interface SendNotificationFormData {
    to: string 
    from: string
    message: string
    createdByUser?: CreatedByUserData
}

export interface CreatedByUserData {
    firstName: string 
    lastName: string 
}

export interface FormInputOptions {
    to: string 
    from: string 
    message: string 
    createdByUser: CreatedByUserData
}

export interface ResultMessage {
    sent: boolean | null
    message: string
}

export type ModeType = "Lidotel" | "application" | "user"
