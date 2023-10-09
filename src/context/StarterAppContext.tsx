import { createContext } from "react";

interface StarterAppConfig {
    LidotelStarterApi: string
    showEmailPage: false
    showNotificationPage: false
}

const StarterAppContext = createContext<StarterAppConfig>({
    LidotelStarterApi: "",
    showEmailPage: false,
    showNotificationPage: false
})

interface StarterAppContextProviderProps {
    children: JSX.Element | JSX.Element[],
    appConfig: any
}

const StarterAppContextProvider = ({ children, appConfig }: StarterAppContextProviderProps) => {
    return (
        <StarterAppContext.Provider value={{ 
            LidotelStarterApi: appConfig.api.LidotelStarterApi,
            showEmailPage: appConfig.app.showEmailPage,
            showNotificationPage: appConfig.app.showNotificationPage
        }}>
            {children}
        </StarterAppContext.Provider>
    )
}

export {
    StarterAppContext,
    StarterAppContextProvider
}