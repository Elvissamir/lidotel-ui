import { useContext } from 'react'
import { LidotelAuthDataContext, UserProfileContext } from "lidotel-ui"
import LoginPageContent from "./LoginPageContent"
import Page from "./Page"

const LoginPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading='Inicio de Sesión'
            title={userProfile? 'Home' : 'Loading...'}>
                <LoginPageContent />    
        </Page>
    )
}

export default LoginPage