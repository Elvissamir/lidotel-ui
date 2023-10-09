export interface SendEmailFormData {
    to: string 
    from: string
    message: string
}

export interface FormInputOptions {
    to: string 
    from: string 
    message: string
}

export interface ResultMessage {
    sent: boolean | null
    message: string
}
