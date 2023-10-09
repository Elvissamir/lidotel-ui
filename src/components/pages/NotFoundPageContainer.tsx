import { Flex } from "@chakra-ui/react"
import { NotFoundPage } from "lidotel-ui"

const NotFoundPageContainer = () => {
    return (
        <Flex 
            position='relative'
            overflow='hidden'
            height='100vh'
            width='100vw'>
                <NotFoundPage 
                    height="100vh"
                    minHeight="100vh"
                    minWidth="100vw"
                    width="100vw" />
        </Flex>
    )
}

export default NotFoundPageContainer