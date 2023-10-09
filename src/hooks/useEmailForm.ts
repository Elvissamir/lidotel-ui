import { ChangeEvent, useState } from "react"
import { FormErrors } from "../core/form"
import { FormInputOptions, ResultMessage, SendEmailFormData,  } from "./useEmailForm.types"
import useEmailFormValidation from "./useEmailFormValidation"
import useEmailService from "./useEmailService"

const formInputOptions: FormInputOptions = {
    to: "to",
    from: "from",
    message: "message",
}

const emailSentMessages = {
    success: "Your message was sent!",
    failed: "Failed to send message"
}

const getResultMessage = (result: boolean | undefined) => {
    if (result)
        return emailSentMessages.success

    return emailSentMessages.failed
}

const useEmailForm = () => {
    const [formData, setFormData] = useState<SendEmailFormData>({
        to: "",
        from: "",
        message: "",
    })

    const [ isSendingEmail, setIsSendingEmail ] = useState(false)
    const [ messageSent, setMessageSent] = useState<ResultMessage>({ 
        sent: null, 
        message: "Failed to send message" 
    })
    const { sendEmail } = useEmailService()
    const [ errors, setErrors ] = useState<FormErrors>({})
    const { 
        validFormData,
        validateFrom,
        validateMessage,
        validateTo
    } = useEmailFormValidation()

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === formInputOptions.to) {
            const nerrors = {...errors}
            const error = validateTo(e.target.value)

            if (error)
                nerrors[e.target.id] = error
            else 
                delete nerrors[e.target.id]

            setErrors({...nerrors})
            return setFormData({ ...formData, to: e.target.value })
        }

        if (e.target.id === formInputOptions.from) {
            const nerrors = {...errors}
            const error = validateFrom(e.target.value)

            if (error)
                nerrors[e.target.id] = error
            else 
                delete nerrors[e.target.id]

            setErrors({...nerrors})
            return setFormData({ ...formData, from: e.target.value })
        }

        if (e.target.id === formInputOptions.message) {
            const nerrors = {...errors}
            const error = validateMessage(e.target.value)
            
            if (error)
                nerrors[e.target.id] = error
            else 
                delete nerrors[e.target.id]

            setErrors({...nerrors})

            return setFormData({ ...formData, message: e.target.value })
        }
    }

    const onSendEmail = async () => {
        setIsSendingEmail(true)
        setMessageSent({
            sent: null,
            message: ""
        }) 

        const result = await sendEmail({...formData})

        setIsSendingEmail(false)
        setMessageSent({
            sent: result? true : false,
            message: getResultMessage(result)
        })
    }

    const isValidFormData = () => validFormData(formData)

    return {
        formData,
        isValidFormData,
        isSendingEmail,
        messageSent,
        errors,
        onSendEmail,
        onInputChange
    }
}

export default useEmailForm