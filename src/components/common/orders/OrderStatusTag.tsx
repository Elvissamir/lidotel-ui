import { Flex } from "@chakra-ui/react"
import { OrderStatus } from "../../../core/orders/Orders.types"

interface OrderStatusTagProps {
    status: OrderStatus
}

const selectColor = (status: OrderStatus) => {
    if (status === 'Unknown')
        return 'gray.300'
    
    if (status === 'Canceled')
        return 'red.500'

    if (status === 'Completed')
        return 'green.500'

    return 'orange.500'
}

const selectStatusText = (status: OrderStatus) => {
    if (status === 'Unknown')
        return "Desconocido"
    
    if (status === 'Canceled')
        return 'Cancelada'
    
    if (status === 'Completed')
        return 'Completada'

    return 'En Progreso'
}

const OrderStatusTag = ({ status }: OrderStatusTagProps) => {
    return (
        <Flex 
            borderRadius='4px'
            border='1px'
            borderColor={selectColor(status)}
            color={selectColor(status)}
            justifyContent='center'
            padding='2px 5px'
            w='115px'>
                { selectStatusText(status) }
        </Flex>
    )
}

export default OrderStatusTag