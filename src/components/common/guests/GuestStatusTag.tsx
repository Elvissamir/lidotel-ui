import { Flex } from "@chakra-ui/react"
import { GuestStatus } from "../../../core/guests/Guests.types"

interface OrderStatusTagProps {
    status: GuestStatus
}

const selectColor = (status: GuestStatus) => {
    if (status === 'Unknown')
        return 'gray.300'
    
    if (status === 'Active')
        return 'green.500'

    return 'orange.500'
}

const selectStatusText = (status: GuestStatus) => {
    if (status === 'Unknown')
        return "Desconocido"
    
    if (status === "Inactive")
        return 'Inactivo'
    
    return "Activo"
}

const GuestStatusTag = ({ status }: OrderStatusTagProps) => {
    return (
        <Flex 
            borderRadius='4px'
            border='1px'
            borderColor={selectColor(status)}
            color={selectColor(status)}
            justifyContent='center'
            fontSize='13px'
            padding='2px 5px'
            w='80px'>
                { selectStatusText(status) }
        </Flex>
    )
}

export default GuestStatusTag