import { LidotelAuthDataContext, UserProfileContext } from "lidotel-ui"
import axios, { AxiosError } from "axios"
import { useContext } from "react"
import { StarterAppContext } from "../context/StarterAppContext"

interface SendEmailRequest {
    to: string 
    from: string 
    subscriberId: string 
    message: string
}

interface SendEmailParams {
    to: string 
    from: string 
    message: string
}

const useEmailService = () => {
    const { userProfile } = useContext(UserProfileContext)
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { LidotelStarterApi } = useContext(StarterAppContext)

    const sendEmail = async ({ to, from, message }: SendEmailParams) => {
        if (userProfile && LidotelAppConfig) {
            const request: SendEmailRequest = {
                to,
                subscriberId: to,
                from,
                message
            }

            const url = `${LidotelStarterApi}/email`

            console.log('send email request to', url)
            try {
                await axios.post(url, request)

                return true
            }
            catch(ex) {
                if (ex instanceof AxiosError) {

                }
                else {
                    console.error("Error", ex)
                }

                return false
            }
        }
    }

    return {
        sendEmail
    }
}

export default useEmailService