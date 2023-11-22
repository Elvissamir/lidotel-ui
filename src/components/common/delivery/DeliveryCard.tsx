import { Card, Flex, Text } from "@chakra-ui/react"
import { Order, OrderStatus } from "../../../core/orders/Orders.types"

interface DeliveryCardProps {
    order: Order
}

const DeliveryCard = ({ order }: DeliveryCardProps) => {
    const selectStatusColor = (status: OrderStatus) => {
        if (status === "Completed") 
            return 'black'

        if (status === "Canceled")
            return 'red.600'

        if (status === "In Progress")
            return "green.300"

        return "gray.400"
    }

    return (
        <Card padding='20px'>
            <Flex>
                <Text 
                    fontWeight='700'
                    fontSize='22px'>
                        { order.roomNumber } - { order.title }
                </Text>
                <Flex 
                    borderRadius='full'
                    bg={selectStatusColor(order.status)} 
                    h='20px' 
                    w='20px' 
                    ml='auto' />
            </Flex>
            <Flex flexDir='column'>
                <Flex>
                    <Text fontWeight='bold'>Titulo</Text>
                    <Text ml='5px'>{order.title} - {order.orderId}</Text>
                </Flex>
                <Flex flexDir='column'>
                    <Text fontWeight='bold' mt='10px'>Items</Text>
                    {order.items.map(item => 
                        <Flex 
                            flexDir='column' 
                            borderColor='gray.400'
                            _notFirst={{ marginTop: "5px", borderTop: '1px' }}>
                                <Text> - {item.title}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Card>
    )
}

export default DeliveryCard