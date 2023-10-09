import { useContext } from "react"
import { LidotelAuthDataContext } from "lidotel-ui"
import Page from "./Page"
import NotificationsPageContent from "./NotificationsPageContent"

const NotificationsPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading='Notifications'
            title='Notifications'>
                <NotificationsPageContent />
        </Page>
    )
}

export default NotificationsPage