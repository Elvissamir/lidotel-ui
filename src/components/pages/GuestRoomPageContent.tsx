import { Flex, Text } from "@chakra-ui/react"
import { FaClock } from "react-icons/fa"
import { useLocation } from "react-router-dom"
import { Order } from "../../core/orders/Orders.types"
import { RoomStatus } from "../../core/rooms/Room.types"
import OrdersAccordion from "../common/orders/OrdersAccordion"

const allOrders: Order[] = [
    { 
        roomNumber: 1,
        userId: "1",
        orderId: "1",
        title: "Almuerzo",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 300 } ],
        status: "In Progress",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 2,
        userId: "1",
        orderId: "1",
        title: "Desayuno",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 400 } ],
        status: "Completed",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 3,
        userId: "1",
        orderId: "1",
        title: "Desayuno",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 400 } ],
        status: "Canceled",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 4,
        userId: "1",
        orderId: "1",
        title: "Desayuno",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 500 } ],
        status: "Completed",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 5,
        userId: "1",
        orderId: "1",
        title: "Almuerzo",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 600 } ],
        status: "Completed",
        type: "Food",
        created_at: "20/11/2023"
    }
]

const GuestRoomPageContent = () => {
    // orders options
    // room options

    const location = useLocation()
    const timeLeft = 5

    const getRoomId = () => location.pathname[location.pathname.length - 1]

    const getRoomStatusColor = (roomStatus: RoomStatus) => {
        if (roomStatus === "Unavailable")
            return "green.400"

        if (roomStatus === 'Available')
            return "gray.500"

        return "red.500"
    }

    return (
        <Flex flexDir='column' w='full'>
            <Flex 
                alignItems='center'
                fontWeight='700'
                fontSize='30px'>
                    <Flex 
                        borderRadius='full'
                        bg={getRoomStatusColor("Unavailable")}
                        h='12px' 
                        w='12px' />
                    <Text ml='10px'>Habitación {getRoomId()}</Text>
            </Flex>
            <Text fontSize='16px'>Juan Cardona</Text>
            <Flex 
                fontSize='14px'
                alignItems='center'>
                    <Text 
                        color='gray.600'
                        mr='5px'>
                            Tiempo restante: {timeLeft}h
                    </Text>
                    <FaClock color="gray" />
            </Flex>
            <Flex flexDir='column' mt='20px'>
                <Text fontWeight='700'>Órdenes</Text>
                <Flex borderRadius='4px' shadow='lg' padding='10px' w='full'>
                   <OrdersAccordion orders={allOrders} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default GuestRoomPageContent