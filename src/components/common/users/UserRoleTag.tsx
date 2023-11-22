import { Flex, Text } from "@chakra-ui/react"
import { UserRole } from "../../../core/users/User.types"

interface UserRoleTagProps {
    role: UserRole
}

const selectRoleText = (role: UserRole) => {
    if (role === "Admin")
        return 'Administrador'

    return "Personal"
}

const UserRoleTag = ({ role }: UserRoleTagProps) => {
    return (
        <Flex 
            borderRadius='4px'
            border='1px'
            borderColor="black"
            color='black'
            alignItems='center'
            justifyContent='center'
            padding='2px 5px'
            w='auto'
            maxW='120px'>
                <Text size='sm'>
                    { selectRoleText(role) }
                </Text>
        </Flex>
    )
}

export default UserRoleTag