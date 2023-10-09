import { Flex } from "@chakra-ui/react"
import { AuthContextProps } from "react-oidc-context"
import { useLocation } from "react-router-dom"
import { EdxAppConfig, useRouteLayoutSelector } from "lidotel-ui"
import DefaultLayoutWrapper from "./DefaultLayoutWrapper"
import { SideBarContextProvider } from "../../context/SideBarContext"

interface LayoutProps {
    auth: AuthContextProps
    LidotelAppConfig: EdxAppConfig
    content: JSX.Element
    notificationBarMessage: string
    simpleLayoutRouteList: string[]
    isClosingSession: boolean
    onLogout: () => Promise<void>
}

const Layout = ({ auth, LidotelAppConfig, content, notificationBarMessage, simpleLayoutRouteList, isClosingSession, onLogout }: LayoutProps) => {
    const location = useLocation()
    const { routeHasDefaultLayout } = useRouteLayoutSelector()

    return (
        <Flex w="full" minH='100vh' position='relative'>
            <Flex className="one" w='full' flexDirection='column' justifyContent='center'>
                <SideBarContextProvider>
                    {routeHasDefaultLayout(simpleLayoutRouteList, location.pathname)?  
                        <DefaultLayoutWrapper 
                            auth={auth}
                            LidotelAppConfig={LidotelAppConfig}
                            content={content}
                            notificationBarMessage={notificationBarMessage}
                            isClosingSession={isClosingSession}
                            onLogout={onLogout} />
                        :
                        content}
                </SideBarContextProvider>
            </Flex>
        </Flex>
    )
}

export default Layout