import { useContext } from 'react'
import { AppsMenuMoreOption, AuthContextProps, EdxAppConfig, DefaultLayout, ExternalAppsContext, fetchUserApps, Footer, NotificationBar, TopBar, TopBarLeft, TopBarRight, useAuthActions, useNotificationsBar, UserProfileContext, SideBar } from "lidotel-ui"
import { Flex } from '@chakra-ui/react'
import { SideBarContext } from "../../context/SideBarContext"

interface DefaultLayoutContentProps {
    auth: AuthContextProps
    LidotelAppConfig: EdxAppConfig
    content: JSX.Element
    notificationBarMessage: string
    isClosingSession: boolean
    onLogout: () => Promise<void>
}

const DefaultLayoutWrapper = ({ auth, LidotelAppConfig, content, notificationBarMessage, isClosingSession, onLogout }: DefaultLayoutContentProps) => {
    const { userProfile } = useContext(UserProfileContext)
    const { externalApps } = useContext(ExternalAppsContext)
    const { handleLogIn, handleChangeTenantId } = useAuthActions()
    const { showNotificationsBar, onCloseNotificationsBar } = useNotificationsBar({ show: true })
    const { items, selectedItemId, onChangeSelectedItem } = useContext(SideBarContext)

    const handleTestClick = async () => {
        if (auth.user && userProfile && LidotelAppConfig) {
            const appsList = await fetchUserApps(auth.user.access_token, userProfile?.tenantId, LidotelAppConfig.api.baseUri as string)

            console.log('test list', appsList)
        }
    }

    const moreOptions: AppsMenuMoreOption[] = [
        { name: 'Account Info', url: null },
        { name: "Online Community", url: null },
        { name: "Help", url: null }
    ]

    return (
        <DefaultLayout
            topBar={<TopBar 
                leftComponent={<TopBarLeft 
                    appName={LidotelAppConfig.app.subtitle}
                    list={externalApps}
                    menuOptions={moreOptions} />}
                rightComponent={<TopBarRight 
                    profileData={userProfile}
                    isClosingSession={isClosingSession}
                    onLogin={handleLogIn}
                    onLogout={onLogout}
                    onChangeTenantId={handleChangeTenantId}
                />} />}
            notificationBar={
                <Flex onClick={handleTestClick} w='full' mt='-10px'>
                    <NotificationBar 
                        show={showNotificationsBar}
                        onClose={onCloseNotificationsBar} 
                        content={notificationBarMessage} />
                </Flex>}
            content={<Flex w='full'>
                    <Flex className="sidebar" minH='100vh' h='auto'>
                        <SideBar 
                            show={true}
                            selectedItemId={selectedItemId}
                            ariaCurrentType='page'
                            onClickItem={onChangeSelectedItem}
                            items={items} />
                    </Flex>
                    {content}
            </Flex>}
            footer={<Footer />} />
    )
}

export default DefaultLayoutWrapper