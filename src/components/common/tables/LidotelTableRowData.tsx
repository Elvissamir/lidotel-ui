import { Td } from "@chakra-ui/react"

interface LidotelTableRowDataProps {
    children: JSX.Element | JSX.Element[]
    width: string 
}

const LidotelTableRowData = ({ children, width }: LidotelTableRowDataProps) => {
    return (
        <Td 
            paddingLeft='16px' 
            paddingRight='16px' 
            minW='50px'
            w={width}>
                {children}
        </Td>
    )
}

export default LidotelTableRowData