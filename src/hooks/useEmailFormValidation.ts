import { FormError } from "../core/form"
import { SendEmailFormData } from "./useEmailForm.types"

const useEmailFormValidation = () => {
    const validateTo = (to: string): FormError | null => {
        let error: FormError | null = null

        if (to === "")
            error = { message: "The To field can not be empty" }
        else if (!to.includes("@") || !to.includes("."))
            error = { message: "Invalid email format" }

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

    const validFormData = (formData: SendEmailFormData) => {
        const toError = validateTo(formData.to)
        const fromError = validateFrom(formData.from)
        const messageError = validateMessage(formData.message)

        if (toError || fromError || messageError)
            return false 

        return true
    }

    return {    
        validFormData,
        validateFrom,
        validateTo,
        validateMessage
    }
}

export default useEmailFormValidation