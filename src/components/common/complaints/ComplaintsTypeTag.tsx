import { Flex } from "@chakra-ui/react"
import { ComplaintType } from "../../../core/complaints/Complaints.types"

interface ComplaintTypeTagProps {
    type: ComplaintType
}

const selectText = (type: ComplaintType) => {
    if (type === 'Resources')
        return "Recursos"
    
    if (type === 'Security')
        return "Seguridad"

    return  "Servicios"
}

const selectColor = (type: ComplaintType) => 'black'

const ComplaintTypeTag = ({ type }: ComplaintTypeTagProps) => {
    return (
        <Flex 
            borderRadius='4px'
            border='1px'
            borderColor={selectColor(type)}
            color={selectColor(type)}
            justifyContent='center'
            padding='2px 5px'
            w='115px'>
                { selectText(type) }
        </Flex>
    )
}

export default ComplaintTypeTag