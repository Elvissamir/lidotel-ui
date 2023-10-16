import { useContext } from 'react'
import { AppsMenuMoreOption, DefaultLayout, fetchUserApps, Footer, NotificationBar, TopBar, TopBarLeft, TopBarRight, useAuthActions, useNotificationsBar, UserProfileContext, SideBar, LidotelAppConfig } from "lidotel-ui"
import { Flex } from '@chakra-ui/react'
import { SideBarContext } from "../../context/SideBarContext"

interface DefaultLayoutContentProps {
    LidotelAppConfig: LidotelAppConfig
    content: JSX.Element
    notificationBarMessage: string
    isClosingSession: boolean
    onLogout: () => Promise<void>
}

const DefaultLayoutWrapper = ({ LidotelAppConfig, content, isClosingSession, onLogout }: DefaultLayoutContentProps) => {
    const { userProfile } = useContext(UserProfileContext)
    const { handleLogIn } = useAuthActions()
    const { items, selectedItemId, onChangeSelectedItem } = useContext(SideBarContext)

    const handleTestClick = async () => {
        if (userProfile && LidotelAppConfig) {
            const appsList = await fetchUserApps("", userProfile?.tenantId, LidotelAppConfig.api.baseUri as string)

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
                    list={[]}
                    menuOptions={moreOptions} />}
                rightComponent={<TopBarRight 
                    profileData={userProfile}
                    isClosingSession={isClosingSession}
                    onLogin={handleLogIn}
                    onLogout={onLogout}
                    onChangeTenantId={() => Promise.resolve()}
                />} />}
            notificationBar={
                <Flex onClick={handleTestClick} w='full' mt='-10px' />}
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