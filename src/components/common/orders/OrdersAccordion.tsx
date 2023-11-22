import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex } from "@chakra-ui/react"
import { Order, OrderStatus } from "../../../core/orders/Orders.types"

interface OrdersAccordionProps {
    orders: Order[]
}

const selectOrderStatusColor = (orderStatus: OrderStatus) => {
    if (orderStatus === 'Completed')
        return "yellow.500"

    if (orderStatus === 'In Progress')
        return "green.400"

    if (orderStatus === 'Canceled')
        return "red.600"

    return "gray.400"
}

const OrdersAccordion = ({ orders }: OrdersAccordionProps) => (
    <Accordion w='full'>
        {orders.map((order, index) => 
            <AccordionItem key={index}>
                <h2>
                    <AccordionButton>
                        <Flex alignItems='center' w='full'>
                            <Flex 
                                bg={selectOrderStatusColor(order.status)}
                                borderRadius='full' 
                                h='15px' 
                                w='15px' 
                                mr='6px' />
                            Orden: {order.title}
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        )}
    </Accordion>
)

export default OrdersAccordion