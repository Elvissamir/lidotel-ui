import { FormErrors } from "../../core/form"
import { User } from "../../core/users/User.types"

export interface UserFormData {
    userData: User
    errors: FormErrors
}

export interface FormDataFieldNames {
    firstName: string 
    lastName: string
    ci: string 
    phone: string 
    status: string 
    role: string 
}

export type UserFormMode = "add" | "edit"

export interface UseUserFormProps {
    reset: boolean
    mode?: UserFormMode
    editUserData?: User
}