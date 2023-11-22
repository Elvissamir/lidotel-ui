import { Flex, Text } from '@chakra-ui/react'
import { Guest } from '../../core/guests/Guests.types'
import DeleteBtn from '../common/DeleteBtn'
import GuestDetailsTabContent from '../common/guests/GuestDetailsTabContent'
import GuestStatusTag from '../common/guests/GuestStatusTag'
import OrdersTabContent from '../common/orders/OrdersTabContent'
import LidotelTabsMenu from '../common/tabs/LidotelTabsMenu'
import VisitsTabContent from '../common/visits/VisitsTabContent'

const tabsList = [
    "Detalles",
    "Visitas",
    "Ordenes"
]

const GuestPageContent = () => {
    const guest: Guest =  { 
        guestId: "1",
        firstName: "Juan",
        lastName: "Cardona",
        ci: "25516109",
        phones: ["0424-240-29-45"],
        address: { 
            state: "Distrito Federal", 
            city: 'Caracas',
            zoneCode: '1010',
            street: "Candelaria"
        },
        status: "Active"
    }

    return (
        <Flex flexDir='column' w='full'>
            <Flex alignItems='center' justifyContent="space-between" w='350px'>
                <Text
                    fontWeight='700'
                    fontSize='24px'>
                        Huésped: {`${guest.firstName} ${guest.lastName}`}
                </Text>
                <Flex ml='10px'>
                    <DeleteBtn
                        itemId={guest.guestId}
                        isLoading={false}
                        onDelete={() => null} />
                </Flex>
            </Flex>
            <Flex>
                <Flex flexDir='column'>
                    <Text fontWeight='700' >Id huésped: </Text>
                    <Text>{guest.guestId}</Text>
                </Flex>
                <Flex bg='gray.300' mx='16px' h='full' w='2px'></Flex>
                <Flex flexDir='column'>
                    <Text fontWeight='700'>Status</Text>
                    <Flex>
                        <GuestStatusTag status={guest.status} />
                    </Flex>
                </Flex>
            </Flex>
            <Flex mt='32px'>
                <LidotelTabsMenu tabsList={tabsList}>
                    <GuestDetailsTabContent guest={guest} />
                    <VisitsTabContent />
                    <OrdersTabContent />
                </LidotelTabsMenu>
            </Flex>
        </Flex>
    )
}

export default GuestPageContent