import { useContext } from 'react'
import Page from './Page'
import HomePageContent from './HomePageContent'
import { LidotelAuthDataContext, UserProfileContext } from 'lidotel-ui'

const HomePage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? 'Home' : 'Loading...'}>
                <HomePageContent userProfile={userProfile} />    
        </Page>
    )
}

export default HomePage