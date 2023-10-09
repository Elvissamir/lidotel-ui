import { Flex, Heading, useColorModeValue } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"

interface PageProps {
    appName: string
    heading: string
    title: string
    htmlTags?: JSX.Element[]
    children: JSX.Element
}

const Page = ({ appName, title, heading, children, htmlTags }: PageProps) => {
    const headingColor = useColorModeValue('blue.900', 'white')

    return (
        <>
            <Helmet>
                <title>{appName} | {title}</title>
                {htmlTags}
            </Helmet>
            <Flex flexDir='column' padding='32px' w='full'>
                <Flex justifyContent='space-between' w='full'>
                    <Heading color={headingColor} textAlign='start' size='2xl'>{heading}</Heading>
                </Flex>
                { children }
            </Flex>
        </>
    )
}

export default Page