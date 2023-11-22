import { useContext } from 'react'
import Page from './Page'
import { LidotelAuthDataContext, UserProfileContext } from 'lidotel-ui'
import DeliveryPageContent from './DeliveryPageContent'

const DeliveryPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? 'Delivery' : 'Loading...'}>
                <DeliveryPageContent />    
        </Page>
    )
}

export default DeliveryPage