import { useContext } from 'react'
import Page from './Page'
import { LidotelAuthDataContext } from 'lidotel-ui'
import RoomPageContent from './RoomPageContent'

const RoomPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title="Habitacion">
                <RoomPageContent />    
        </Page>
    )
}

export default RoomPage