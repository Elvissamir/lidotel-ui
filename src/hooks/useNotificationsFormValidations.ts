import { FormError } from "../core/form"
import { SendNotificationFormData } from "./useNotificationsForm.types"

const useNotificationsFormValidation = () => {
    const validateTo = (to: string): FormError | null => {
        let error: FormError | null = null

        if (to === "")
            error = { message: "The To field can not be empty" }
        else if (!to.includes("@") || !to.includes("."))
            error = { message: "Invalid email format" }

        return error
    }

    const validateName = (name: string, field: "firstName" | "lastName") => {
        let error: FormError | null = null

        if (name === "")
            error = { message: `The ${field} can not be empty` }
        else if (name.length < 2)
            error = { message: `The ${field} must have at least two letters` }

        return error
    }

    const validateFrom = (from: string): FormError | null => {
        let error: FormError | null = null

        if (from === "")
            error = { message: "The From field can not be empty" }
        else if (from.length < 2)
            error = { message: "The From field must have at least two letters" }

        return error
    }

    const validateMessage = (message: string): FormError | null => {
        let error: FormError | null = null

        if (message === "")
            error = { message: "The Message field can not be empty" }
        else if (message.length < 2)
            error = { message: "The Message field must have at least two letters/digits" }

        return error
    }

    const validFormData = (formData: SendNotificationFormData) => {
        const toError = validateTo(formData.to)
        const fromError = validateFrom(formData.from)
        const messageError = validateMessage(formData.message)
        const firstNameError = formData.createdByUser? validateName(formData.createdByUser.firstName, 'firstName') : null
        const lastNameError = formData.createdByUser? validateName(formData.createdByUser.lastName, "lastName") : null

        if (toError || fromError || messageError || firstNameError || lastNameError)
            return false 

        return true
    }

    return {    
        validFormData,
        validateFrom,
        validateTo,
        validateMessage,
        validateName
    }
}

export default useNotificationsFormValidation