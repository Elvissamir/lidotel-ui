import { useContext } from 'react'
import Page from './Page'
import { LidotelAuthDataContext, UserProfileContext } from 'lidotel-ui'
import RoomsPageContent from './RoomsPageContent'

const RoomsPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? 'Habitaciones' : 'Loading...'}>
                <RoomsPageContent />    
        </Page>
    )
}

export default RoomsPage