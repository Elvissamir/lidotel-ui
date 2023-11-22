import { Flex, Text } from "@chakra-ui/react"
import { Order } from "../../core/orders/Orders.types"
import DeleteBtn from "../common/DeleteBtn"
import OrderStatusTag from "../common/orders/OrderStatusTag"

const OrderPageContent = () => {
    const order: Order =  { 
        roomNumber: 5,
        userId: "1",
        orderId: "1",
        title: "Desayuno - Habitación 5",
        items: [ 
            { 
                title: "Pastelito de queso", 
                description: "Pastelito",
                price: 330
            },
            { 
                title: "Café", 
                description: "café",
                price: 300
            },
            { 
                title: "Pizza Margarita", 
                description: "pizza",
                price: 500
            } 
        ],
        status: "Completed",
        type: "Food",
        created_at: "20/11/2023"
    }

    return (
        <Flex w='full'>
            <Flex borderRadius='4px' shadow='lg' flexDir='column' padding='40px' w='full'>
                <Flex alignItems='center' justifyContent="space-between" w='450px'>
                    <Text
                        fontWeight='700'
                        fontSize='24px'>
                            Orden: {order.title}
                    </Text>
                    <DeleteBtn
                        itemId={order.orderId}
                        isLoading={false}
                        onDelete={() => null} />
                </Flex>
                <Flex>
                    <Flex flexDir='column'>
                        <Text fontWeight='700' >Id orden: </Text>
                        <Text>{order.orderId}</Text>
                    </Flex>
                    <Flex bg='gray.300' mx='16px' h='full' w='2px'></Flex>
                    <Flex flexDir='column'>
                        <Text fontWeight='700'>Status</Text>
                        <Flex>
                            <OrderStatusTag status={order.status} />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex bg='gray.300' my='16px' h='1px' w='full' />
                <Text fontWeight='700' fontSize='18px'>Detalles</Text>
                <Flex flexDir='column'>
                    <Text fontWeight='700'>Id Habitación</Text>
                    <Text>{order.orderId}</Text>

                    <Text fontWeight='700' mt='10px'>Id Usuario</Text>
                    <Text>{order.orderId}</Text>

                    <Text fontWeight='700' mt='10px'>Elementos</Text>
                    <Flex flexDir='column'>
                        {order.items.map(item => 
                            <Flex w='550px'>
                                <Text w='330px'>{item.title} - {item.description}</Text> 
                                <Text>{Math.floor(item.price * 0.01)}$</Text>
                            </Flex>
                        )}
                    </Flex>
                    <Text fontWeight='700' mt='10px'>
                        Fecha creación: 
                    </Text>
                    <Text>
                        {order.created_at}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default OrderPageContent