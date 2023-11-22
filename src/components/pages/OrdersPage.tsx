import { useContext } from 'react'
import Page from './Page'
import { LidotelAuthDataContext, UserProfileContext } from 'lidotel-ui'
import routes from '../../core/routes'
import OrdersPageContent from './OrdersPageContent'

const OrdersPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)
    const { userProfile } = useContext(UserProfileContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading=''
            title={userProfile? routes.orders.name : 'Loading...'}>
                <OrdersPageContent />    
        </Page>
    )
}

export default OrdersPage