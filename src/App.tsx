import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { baseTheme, LoadingScreen, LidotelAuthContextProvider } from 'lidotel-ui'
import LayoutWrapper from './components/layout/LayoutWrapper'

// Fonts 
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600-italic.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/open-sans/400-italic.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import "@fontsource/archivo-narrow"
import { StarterAppContextProvider } from './context/StarterAppContext'

interface AppProps {
  appConfig: any
}

function App({ appConfig }: AppProps) {

  console.log('Starter app - shared package 2.0.48')

  return (
    <div className="App">
        <ColorModeScript initialColorMode={baseTheme.config.initialColorMode} />
        <ChakraProvider theme={baseTheme}>
          <HelmetProvider>
            <LoadingScreen loading={!appConfig? true : false} state='loading...' delay={0.5} />
            {appConfig && 
              <LidotelAuthContextProvider LidotelAppConfig={appConfig}>
                <StarterAppContextProvider appConfig={appConfig}>
                  <LayoutWrapper />
                </StarterAppContextProvider>
              </LidotelAuthContextProvider>}
          </HelmetProvider>
        </ChakraProvider>
    </div>
  );
}

export default App;