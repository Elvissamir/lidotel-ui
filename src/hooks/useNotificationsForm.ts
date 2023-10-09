import { ChangeEvent, useEffect, useState } from "react"
import { FormErrors } from "../core/form"
import { FormInputOptions, ModeType, ResultMessage, SendNotificationFormData } from "./useNotificationsForm.types"
import useNotificationsFormValidation from "./useNotificationsFormValidations"
import useNotificationsService from "./useNotificationsService"

const formInputOptions: FormInputOptions = {
    to: "to",
    from: "from",
    message: "message",
    createdByUser: {
        firstName: "firstName",
        lastName: "lastName"
    }
}

const notificationSentMessages = {
    success: "Your message was sent!",
    failed: "Failed to send message"
}

const getResultMessage = (result: boolean | undefined) => {
    if (result)
        return notificationSentMessages.success

    return notificationSentMessages.failed
}

const useNotificationsForm = () => {
    const [formData, setFormData] = useState<SendNotificationFormData>({
        to: "",
        from: "",
        message: "",
        createdByUser: {
            firstName: "",
            lastName: ""
        }
    })

    const [ isSendingNotification, setIsSendingNotification ] = useState(false)
    const [ messageSent, setMessageSent] = useState<ResultMessage>({ 
        sent: null, 
        message: "Failed to send message" 
    })
    const { sendNotification } = useNotificationsService()
    const [ errors, setErrors ] = useState<FormErrors>({})
    const [ mode, setMode ] = useState<ModeType>("Lidotel")
    const { 
        validFormData,
        validateFrom,
        validateMessage,
        validateName,
        validateTo
    } = useNotificationsFormValidation()

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('targed id', e.target.id)

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

        if (e.target.id === formInputOptions.createdByUser.firstName) {
            const nerrors = {...errors}
            const error = validateName(e.target.value, "firstName")

            if (error)
                nerrors[e.target.id] = error
            else 
                delete nerrors[e.target.id]

            setErrors({ ...nerrors })
            
            return setFormData({ 
                to: formData.to,
                from: formData.from,
                message: formData.message,
                createdByUser: {
                    firstName: e.target.value,
                    lastName: formData.createdByUser? formData.createdByUser.lastName : ""
                }
            })
        }

        if (e.target.id === formInputOptions.createdByUser.lastName) {
            console.log('last name')
            const nerrors = {...errors}
            const error = validateName(e.target.value, "lastName")

            if (error)
                nerrors[e.target.id] = error
            else 
                delete nerrors[e.target.id]

            setErrors({ ...nerrors })
            
            return setFormData({ 
                to: formData.to,
                from: formData.from,
                message: formData.message,
                createdByUser: {
                    firstName: formData.createdByUser? formData.createdByUser.firstName : "",
                    lastName: e.target.value
                }
            })
        }
    }

    const onSendEmail = async () => {
        setIsSendingNotification(true)
        setMessageSent({
            sent: null,
            message: ""
        }) 

        const result = await sendNotification({...formData})

        setIsSendingNotification(false)
        setMessageSent({
            sent: result? true : false,
            message: getResultMessage(result)
        })
    }

    const isValidFormData = () => validFormData(formData)
    const onChangeMode = (value: ModeType) => setMode(value)

    useEffect(() => {
        if (mode === 'Lidotel') {
            setFormData({ 
                to: formData.to,
                from: "The Exchange",
                message: formData.message
            })
        }
        else if (mode === 'application') {
            setFormData({
                to: formData.to,
                from: "",
                message: formData.message
            })
        }
        else {
            setFormData({
                to: formData.to,
                from: "",
                message: formData.message,
                createdByUser: {
                    firstName: formData.createdByUser? formData.createdByUser.firstName : "",
                    lastName: formData.createdByUser? formData.createdByUser.lastName : ""
                }
            })
        }

        setMessageSent({ sent: null, message: '' })
    }, [ mode ])

    return {
        formData,
        isValidFormData,
        isSendingNotification,
        messageSent,
        errors,
        mode,
        onSendEmail,
        onInputChange,
        onChangeMode
    }
}

export default useNotificationsForm