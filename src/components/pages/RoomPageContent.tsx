import { Flex, Text } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import CleaningTabContent from "../common/cleaning/CleaningTabContent"
import ComplaintsTabContent from "../common/complaints/ComplaintsTabContent"
import LundryTabContent from "../common/lundry/LundryTabContent"
import OrdersTabContent from "../common/orders/OrdersTabContent"
import LidotelTabsMenu from "../common/tabs/LidotelTabsMenu"
import TransportTabContent from "../common/transport/TransportTabContent"

const tabsList: string[] = [
    'Ordenes',
    'Reclamos',
    'Lavanderia',
    'Traslados',
    'Limpieza'
]

const RoomPageContent = () => {
    const location = useLocation()
    const id = location.pathname[location.pathname.length - 1]

    return (
        <Flex flexDirection="column" w='full'>
            <Text fontSize='32px' fontWeight='bold'>Habitación {id}</Text>
            <Flex mt='16px' w='full'>
                <LidotelTabsMenu 
                    contentMt="30px"
                    includeWrapper={false}
                    tabsList={tabsList}>
                        <OrdersTabContent />
                        <ComplaintsTabContent />
                        <LundryTabContent />
                        <TransportTabContent />
                        <CleaningTabContent />
                </LidotelTabsMenu>
            </Flex>
        </Flex>
    )
}

export default RoomPageContent