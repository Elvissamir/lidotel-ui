import { LidotelAuthDataContext, UserProfileContext } from "lidotel-ui"
import axios, { AxiosError } from "axios"
import { useContext } from "react"
import { StarterAppContext } from "../context/StarterAppContext"
import { SendNotificationFormData } from "./useNotificationsForm.types"

interface SendNotificationRequest extends SendNotificationFormData {
    subscriberId: string 
}

interface SendNotificationParams extends SendNotificationFormData {}

const useNotificationsService = () => {
    const { userProfile } = useContext(UserProfileContext)
    const { auth, LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { LidotelStarterApi } = useContext(StarterAppContext)

    const sendNotification = async ({ to, from, message, createdByUser }: SendNotificationParams) => {
        if (userProfile && auth && LidotelAppConfig) {
            const request: SendNotificationRequest = {
                to,
                subscriberId: to,
                from,
                message,
                createdByUser
            }

            const url = `${LidotelStarterApi}/notification`

            console.log('send notification request to', url)
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
        sendNotification
    }
}

export default useNotificationsService