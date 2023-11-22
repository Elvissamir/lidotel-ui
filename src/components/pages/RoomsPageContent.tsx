import { Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { Room } from "../../core/rooms/Room.types"
import RoomCard from "../common/rooms/RoomCard"

const rooms: Room[] = [
    { 
        roomId: '1',
        status: 'Available', 
        occupiedFrom: "01/10/2023", 
        occupiedUntil: "02/10/2023",
        hostsCount: 2,
        description: "Hab",
        type: 'Hab',
        roomNumber: 1
    },
    { 
        roomId: '2',
        status: 'Unavailable', 
        occupiedFrom: "01/10/2023", 
        occupiedUntil: "02/10/2023",
        hostsCount: 2,
        description: "Hab",
        type: 'Hab',
        roomNumber: 2
    },
    {   roomId: '3',
        status: 'Available', 
        occupiedFrom: "01/10/2023", 
        occupiedUntil: "02/10/2023",
        hostsCount: 2,
        description: "Hab",
        type: 'Hab',
        roomNumber: 3
    },
    { 
        roomId: '4',
        status: 'Disabled', 
        occupiedFrom: "01/10/2023", 
        occupiedUntil: "02/10/2023",
        hostsCount: 1,
        description: "Hab",
        type: 'Hab',
        roomNumber: 5
    },
    { 
        roomId: '5',
        status: 'Unavailable', 
        occupiedFrom: "01/10/2023", 
        occupiedUntil: "02/10/2023",
        hostsCount: 1,
        description: "Hab",
        type: 'Hab',
        roomNumber: 5
    }
]

const RoomsPageContent = () => {
    return (
        <>
            <Flex flexDirection="column" w='full'>
                <Text fontSize='32px' fontWeight='bold'>Habitaciones</Text>
                <Grid 
                    templateColumns='repeat(3, 1fr)' 
                    gridGap='20px'
                    mt='25px'>
                        {rooms.map((room, index) => 
                            <GridItem key={index}>
                                <RoomCard key={index} data={room} />
                            </GridItem>
                        )}
                </Grid>
            </Flex>
        </>
    )
}

export default RoomsPageContent