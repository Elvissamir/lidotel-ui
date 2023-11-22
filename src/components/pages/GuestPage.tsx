import { useContext } from 'react'
import Page from './Page'
import { LidotelAuthDataContext, UserProfileContext } from 'lidotel-ui'
import GuestPageContent from './GuestPageContent'

const GuestPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? 'Huéspedes' : 'Loading...'}>
                <GuestPageContent />    
        </Page>
    )
}

export default GuestPage