import { FormErrors } from "../../core/form"
import { Guest } from "../../core/guests/Guests.types"

export interface GuestFormData {
    guestData: Guest
    errors: FormErrors
}

export interface FormDataFieldNames {
    firstName: string 
    lastName: string
    ci: string 
    phone: string 
    status: string
}

export type GuestFormMode = "add" | "edit"

export interface UseGuestFormProps {
    reset: boolean
    mode?: GuestFormMode
    editGuestData?: Guest
}