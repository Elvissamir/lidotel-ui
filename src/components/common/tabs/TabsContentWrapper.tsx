import { Flex } from "@chakra-ui/react"

interface TabContentWrapperProps {
    children: JSX.Element[] | JSX.Element
}

const TabContentWrapper = ({ children }: TabContentWrapperProps) => {
    return (
        <Flex 
            bg='white'
            borderRadius='4px'
            padding='30px 32px 54px 34px'
            w='full'>
                {children}
        </Flex>
    )
}

export default TabContentWrapper