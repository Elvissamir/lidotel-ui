import { Flex, Heading } from "@chakra-ui/react"
import { UserProfile } from "lidotel-ui"
import ExamplesMenu from "../common/ExamplesMenu"

interface HomePageContentProps {
    userProfile: UserProfile | null
}

const HomePageContent = ({ userProfile }: HomePageContentProps) => {
    return (
        <>
            <Flex flexDirection='column' w='full'>
                <Flex flexDir='column' alignItems='baseline'>
                    <Heading>{ userProfile? `Bienvenido, ${userProfile.firstName} ${userProfile.lastName}` : 'Invitado'}</Heading>
                </Flex>
                <Flex mt='50px'>
                    <ExamplesMenu />
                </Flex>
            </Flex>
        </>
    )
}

export default HomePageContent