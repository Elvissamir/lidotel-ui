import { Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { Order } from "../../core/orders/Orders.types"
import DeliveryCard from "../common/delivery/DeliveryCard"

const DeliveryPageContent = () => {
    return (
        <>
            <Flex flexDirection="column" w='full'>
                <Text fontSize='32px' fontWeight='bold'>Delivery</Text>
                <Grid 
                    templateColumns='repeat(4, 350px)' 
                    gap='20px'
                    mt='25px'>
                       
                </Grid>
            </Flex>
        </>
    )
}

export default DeliveryPageContent