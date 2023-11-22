import { Button, Flex, Heading } from "@chakra-ui/react"

interface LidotelModalFormHeaderProps {
    isSavingChanges: boolean 
    actionText: string 
    actionBtnText: string 
    onSave: () => void
    onClose: () => void
}

const LidotelModalFormHeader = ({ actionText, actionBtnText, isSavingChanges, onSave, onClose }: LidotelModalFormHeaderProps) => {
    return (
        <Flex alignItems='start' justifyContent='space-between' w='full'>
            <Heading
                fontFamily='Poppins'
                fontWeight='700'
                fontSize='32px'
                w='40%'>{actionText}</Heading>
            <Flex alignItems='center'>
                <Button
                    onClick={onClose}
                    bg="white"
                    border="1px"
                    borderColor="black"
                    color='black'
                    size='xs'
                    padding='0 25px'
                    _hover={{ 
                        color: "yellow.600",
                        borderColor: "yellow.600" }}>
                            Cancel
                </Button>
                <Button
                    onClick={onSave}
                    isLoading={isSavingChanges}
                    border="1px"
                    borderColor="yellow.600"
                    bg="yellow.600"
                    color='white'
                    size='xs'
                    padding='0 25px'
                    ml='10px'
                    _hover={{ bg: "yellow.700" }}>{actionBtnText}</Button>
            </Flex>
        </Flex>
    )
}

export default LidotelModalFormHeader