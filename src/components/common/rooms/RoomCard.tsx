import { Flex, Link, Text } from "@chakra-ui/react"
import { Room, RoomStatus } from "../../../core/rooms/Room.types"
import { Link as RouterLink } from "react-router-dom"
import routes from "../../../core/routes"
import LidotelCard from "../LidotelCard"

interface RoomCardProps {
    data: Room
}

const RoomCard = ({ data }: RoomCardProps) => {
    const selectStatusColor = (status: RoomStatus) => {
        if (status === 'Available') 
            return 'green.300'

        if (status === 'Unavailable')
            return 'red.600'

        return 'gray.400'
    }

    const generateRoomUrl = () => {
        console.log(`${routes.room.url}/${data.roomId}`)

        return `${routes.room.url}/${data.roomId}`
    }

    return (
       <LidotelCard h="200px" w='full'>
            <Flex flexDir='column' w='full' h='full'>
            <Flex w='full'>
                <Text fontWeight='bold'>Habitación { data.roomNumber }</Text>
                <Flex 
                    borderRadius='full'
                    bg={selectStatusColor(data.status)} 
                    h='20px' 
                    w='20px' 
                    ml='auto' />
            </Flex>
            <Flex flexDir='column' mt='12px' w='full'>
                <Flex>
                    <Flex>
                        <Text fontWeight='bold'>Desde:</Text>
                        <Text ml='5px'>{data.occupiedFrom}</Text>
                    </Flex>
                    <Flex ml='16px'>
                        <Text fontWeight='bold'>Hasta:</Text>
                        <Text ml='5px'>{data.occupiedUntil}</Text>
                    </Flex>
                </Flex>
                <Flex mt='6px'>
                    <Text fontWeight='bold'>Usuarios:</Text>
                    <Text ml='5px'>{data.hostsCount}</Text>
                </Flex>
            </Flex>
            <Flex>
                <Text fontWeight='bold'>Descripción:</Text>
                <Text ml='5px'>{data.description}</Text>
            </Flex>
            <Flex mt='auto' w='full'>
                <Link 
                    color='blue.500'
                    as={RouterLink} 
                    to={generateRoomUrl()}>Ver detalles</Link>
            </Flex>
            </Flex>
       </LidotelCard>
    )
}

export default RoomCard