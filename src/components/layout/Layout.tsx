import { Flex } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { LidotelAppConfig, useRouteLayoutSelector } from "lidotel-ui"
import DefaultLayoutWrapper from "./DefaultLayoutWrapper"
import { SideBarContextProvider } from "../../context/SideBarContext"

interface LayoutProps {
    LidotelAppConfig: LidotelAppConfig
    content: JSX.Element
    notificationBarMessage: string
    simpleLayoutRouteList: string[]
    isClosingSession: boolean
    onLogout: () => Promise<void>
}

const Layout = ({ LidotelAppConfig, content, notificationBarMessage, simpleLayoutRouteList, isClosingSession, onLogout }: LayoutProps) => {
    const location = useLocation()
    const { routeHasDefaultLayout } = useRouteLayoutSelector()

    return (
        <Flex w="full" minH='100vh' position='relative'>
            <Flex className="one" w='full' flexDirection='column' justifyContent='center'>
                <SideBarContextProvider>
                    {routeHasDefaultLayout(simpleLayoutRouteList, location.pathname)?  
                        <DefaultLayoutWrapper 
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