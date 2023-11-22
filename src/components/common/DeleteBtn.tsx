import { CloseIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

interface DeleteBtnProps {
    isLoading: boolean 
    itemId: string 
    onDelete: (itemId: string) => void
}

const DeleteBtn = ({ itemId, isLoading, onDelete }: DeleteBtnProps) => {
    return (
        <Button 
            onClick={() => onDelete(itemId)}
            isLoading={isLoading}
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            borderRadius='full'
            bg='red.500'
            color='white'
            minW='20px'
            padding='0'
            h='20px'
            w='20px'>
                <CloseIcon h='8px' w='8px' />
        </Button>
    )
}

export default DeleteBtn