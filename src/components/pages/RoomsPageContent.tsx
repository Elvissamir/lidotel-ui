import { Card, Flex, Text } from "@chakra-ui/react"

type RoomStatus = "Available" | "Unavailable" | "Disabled"
type RoomType = "Custom" | "Resort"

interface IRoom {
    status: RoomStatus
    from: string 
    to: string 
    users: number 
    description: RoomType
}

const rooms: IRoom[] = [
    { 
        status: 'Available', 
        from: "01/10/2023", 
        to: "02/10/2023",
        users: 2,
        description: "Custom"
    },
    { 
        status: 'Available', 
        from: "01/10/2023", 
        to: "02/10/2023",
        users: 2,
        description: "Resort"
    },
    { 
        status: 'Available', 
        from: "01/10/2023", 
        to: "02/10/2023",
        users: 2,
        description: "Resort"
    }
]

const RoomsPageContent = () => {
    return (
        <>
            <Flex flexDirection='column' w='full'>
                {rooms.map((room, index) => 
                    <Card w='250px'>
                        <Flex w='full'>
                            <Text>Habitación {index}</Text>
                        </Flex>
                    </Card>
                )}
            </Flex>
        </>
    )
}

export default RoomsPageContent