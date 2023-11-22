import { Flex, Text } from "@chakra-ui/react"
import { UserStatus } from "../../../core/users/User.types"

interface UserStatusTagProps {
    status: UserStatus
}

const selectColor = (status: UserStatus) => {
    if (status === 'Unknown')
        return 'gray.300'

    if (status === "Active")
        return 'green.500'

    return 'orange.500'
}

const selectStatusText = (status: UserStatus) => {
    if (status === 'Unknown')
        return "Desconocido"
    
    if (status === "Active")
        return 'Activo'

    return 'Inactivo'
}

const UserStatusTag = ({ status }: UserStatusTagProps) => {
    return (
        <Flex 
            borderRadius='4px'
            border='1px'
            borderColor={selectColor(status)}
            color={selectColor(status)}
            justifyContent='center'
            padding='2px 5px'
            fontSize='13px'
            w='80px'>
                { selectStatusText(status) }
        </Flex>
    )
}

export default UserStatusTag