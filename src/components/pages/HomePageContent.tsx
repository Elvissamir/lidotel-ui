import { Flex, Heading, Text } from "@chakra-ui/react"
import { ExternalAppData, SkeletonCard, SkeletonText, UserProfile } from "lidotel-ui"
import ExamplesMenu from "../common/ExamplesMenu"

interface HomePageContentProps {
    userProfile: UserProfile | null
    externalApps: ExternalAppData[]
    bookmarkedApps: ExternalAppData[]
    appsList: ExternalAppData[]
    onAddBookmark: (appId: string) => Promise<void>
}

const HomePageContent = ({ userProfile, externalApps }: HomePageContentProps) => {
    const skeletonBookedApps = new Array(8).fill(0)
    const skeletonAllApps = new Array(12).fill(0)

    if (userProfile && externalApps.length > 0) {
        return (
            <>
                <Flex flexDirection='column' w='full'>
                    <Flex flexDir='column' alignItems='baseline'>
                        <Heading>{ userProfile? `Welcome, ${userProfile.firstName} ${userProfile.lastName}` : 'Guest'}</Heading>
                        <Text mt='15px'>Check some examples of tables, graphs and forms</Text>
                    </Flex>
                    <Flex mt='50px'>
                        <ExamplesMenu />
                    </Flex>
                </Flex>
            </>
        )
    }

    return (
        <Flex flexDirection='column' w='full'>
            <Flex alignItems='baseline'>
                <Heading width='400px'>
                    <SkeletonText height={30} />
                </Heading>
            </Flex>
            <Flex marginTop='50px' wrap='wrap'>
                <Flex direction='column'>
                    <Heading fontSize='xl' width='200px'>
                        <SkeletonText height={26} />
                    </Heading>
                    <Flex wrap='wrap' justifyContent='start' alignItems='start'>
                        {skeletonBookedApps.map((app, index) => 
                            <SkeletonCard key={index} />
                        )}
                    </Flex>
                </Flex>
                <Flex direction='column' marginTop='30px'>
                    <Heading fontSize='xl' width='200px'>
                        <SkeletonText height={26} />
                    </Heading>
                    <Flex wrap='wrap'>
                        {skeletonAllApps.map((app, index) => 
                            <SkeletonCard key={index} />
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomePageContent