import { useContext, useState } from "react"
import { Flex } from "@chakra-ui/react"
import AppRouter from "../routes/AppRouter"
import { 
    SessionInactiveModal, 
    LoadingScreen,
    LidotelAppConfig,
    useAuthActions, 
    useLoadingState,
    useIdleSession,
    LidotelAuthDataContext } from "lidotel-ui" 
import { Helmet } from "react-helmet-async"
import Layout from "./Layout"
import simpleLayoutRoutes from "../../core/layoutRoutes"

const LayoutWrapper = () => {
    const { LidotelAppConfig} = useContext(LidotelAuthDataContext)
    const { handleLogOut } = useAuthActions()
    const { loadingState, stateMessage } = useLoadingState()
    const { showInactiveModal, onCloseInactiveModal } = useIdleSession({ timeout: 10000 * 60 })
    const [isClosingSession, setIsClosingSession] = useState(false)

    const onLogout = async () => {
        await handleLogOut()

        setIsClosingSession(true)
    }

    return (
        <Flex 
            flexDirection='column' 
            position='relative'
            minH='100vh'
            width='100%'>
                <LoadingScreen state={stateMessage} delay={1} loading={loadingState !== 'finished'} />
                    <Helmet>
                        <title>The Exchange | {stateMessage}</title>
                    </Helmet>
                    <Layout 
                        LidotelAppConfig={LidotelAppConfig as LidotelAppConfig}
                        content={<AppRouter />}
                        notificationBarMessage='The Exchange Online Community is now live!'
                        simpleLayoutRouteList={simpleLayoutRoutes}
                        isClosingSession={isClosingSession} 
                        onLogout={onLogout} />
        </Flex>
    )
}

export default LayoutWrapper