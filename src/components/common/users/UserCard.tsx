import { Card, Flex, Link, Text } from "@chakra-ui/react"
import { FaUser } from "react-icons/fa"
import { User } from "../../../core/users/User.types"
import { Link as RouterLink } from 'react-router-dom'
import routes from "../../../core/routes"
import UserRoleTag from "./UserRoleTag"
import UserStatusTag from "./UserStatusTag"

interface UserCardProps {
    data: User
}

const UserCard = ({ data }: UserCardProps) => {
    return (
        <Card 
            boxShadow='lg'
            padding='20px'
            _notFirst={{ ml: '20px' }}
            h='auto'
            w='full'>
                <Flex flexDir='column' w='full'>
                    <Flex w='full'>
                        <Link display='flex' as={RouterLink} to={`${routes.users}/${data.userId}`}>
                            <FaUser fontSize='18px' width='50px' />
                            <Text fontSize='13px' fontWeight='bold' ml='5px'>{ `${data.firstName} ${data.lastName}` }</Text>
                        </Link>
                    </Flex>
                    <Flex flexDir='column' mt='12px' w='full'>
                        <Flex flexDir='column' w='full'>
                            <Text size='sm' fontWeight='700' mb='5px'>Cargo</Text>
                            <UserRoleTag role={data.role} />
                        </Flex>
                        <Flex flexDir='column' mt='12px' w='full'>
                            <Text size='sm' fontWeight='700' mb='5px'>Estado</Text>
                            <UserStatusTag status={data.status} />
                        </Flex>
                        <Link display='flex' as={RouterLink} to={`${routes.users}/${data.userId}`}>
                            <Text fontSize='13px' color='blue.500' mt='16px'>Ver detalles</Text>
                        </Link>
                    </Flex>
                </Flex>
        </Card>
    )
}

export default UserCard