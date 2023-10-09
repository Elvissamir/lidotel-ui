import { useContext } from 'react'
import Page from './Page'
import HomePageContent from './HomePageContent'
import { LidotelAuthDataContext, UserProfileContext, ExternalAppsContext, useAppBookmarks } from 'lidotel-ui'

const HomePage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)
    const { externalApps } = useContext(ExternalAppsContext)
    const { bookmarkedApps, appsList, onAddBookmark } = useAppBookmarks()

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? 'Home' : 'Loading...'}>
                <HomePageContent
                    userProfile={userProfile}
                    externalApps={externalApps}
                    bookmarkedApps={bookmarkedApps}
                    appsList={appsList}
                    onAddBookmark={onAddBookmark} />    
        </Page>
    )
}

export default HomePage