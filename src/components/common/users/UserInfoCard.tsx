import { Card, Flex, Text } from "@chakra-ui/react"
import { FaUser } from "react-icons/fa"
import { User } from "../../../core/users/User.types"

interface UserInfoCardProps {
    user: User
}

const UserInfoCard = ({ user }: UserInfoCardProps) => {
    return (
        <Card 
            boxShadow='lg'
            padding='20px'
            _notFirst={{ ml: '20px' }}
            h='260px'
            w='full'>
                <Flex flexDir='column' w='full'>
                    <Flex w='full'>
                        <FaUser fontSize='18px' width='50px' />
                        <Text fontWeight='bold' ml='5px'>{ `${user.firstName} ${user.lastName}` }</Text>
                    </Flex>
                    <Flex flexDir='column' mt='12px' w='full'>
                        <Flex flexDir='column'>
                            <Text fontWeight='bold' size='sm'>Id:</Text>
                            <Text>{user.userId}</Text>
                        </Flex>
                        <Flex flexDir='column'>
                            <Text fontWeight='bold' size='sm'>CI:</Text>
                            <Text>{user.ci}</Text>
                        </Flex>
                        <Flex flexDir='column' mt='6px'>
                            <Text fontWeight='bold' size='sm'>Teléfonos:</Text>
                            <Flex flexDir='column'>
                                {user.phones.map(phone => 
                                    <Text>{phone}</Text>
                                )}
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir='column' mt='6px'>
                        <Text fontWeight='bold' size='sm'>Dirección:</Text>
                        <Text size='sm'>{`${user.address.state} ${user.address.city} ${user.address.street ?? ""} ${user.address.zoneCode}`}</Text>
                    </Flex>
                </Flex>
        </Card>
    )
}

export default UserInfoCard