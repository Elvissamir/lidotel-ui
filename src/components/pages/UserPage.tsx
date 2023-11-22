import { useContext } from 'react'
import Page from './Page'
import { LidotelAuthDataContext, UserProfileContext } from 'lidotel-ui'
import UserPageContent from './UserPageContent'

const UserPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? 'Usuario' : 'Loading...'}>
                <UserPageContent />    
        </Page>
    )
}

export default UserPage