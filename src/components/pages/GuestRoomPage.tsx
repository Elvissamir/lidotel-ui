import { useContext } from 'react'
import Page from './Page'
import { LidotelAuthDataContext, UserProfileContext } from 'lidotel-ui'
import GuestRoomPageContent from './GuestRoomPageContent'

const GuestRoomPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? 'Habitación' : 'Loading...'}>
                <GuestRoomPageContent />    
        </Page>
    )
}

export default GuestRoomPage