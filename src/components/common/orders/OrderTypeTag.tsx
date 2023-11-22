import { Flex } from "@chakra-ui/react"
import { OrderType } from "../../../core/orders/Orders.types"

interface OrderTypeTagProps {
    type: OrderType
}

const selectTypeText = (type: OrderType) => {
    if (type === "Food")
        return "Alimento"

    return 'Otro'
}

const OrderTypeTag = ({ type }: OrderTypeTagProps) => {
    return (
        <Flex 
            borderRadius='4px'
            border='1px'
            justifyContent='center'
            padding='2px'
            w='100px'>
                { selectTypeText(type) }
        </Flex>
    )
}

export default OrderTypeTag