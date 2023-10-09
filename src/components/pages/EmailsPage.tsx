import { useContext } from "react"
import { LidotelAuthDataContext } from "lidotel-ui"
import Page from "./Page"
import EmailsPageContent from "./EmailsPageContent"

const EmailPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading='Emails'
            title='Emails'>
                <EmailsPageContent />
        </Page>
    )
}

export default EmailPage