import { EditIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

interface EditItemBtnProps {
    itemId: string
    isLoading: boolean 
    onEdit: (itemId: string) => void
}

const EditItemBtn = ({ itemId, isLoading, onEdit }: EditItemBtnProps) => {
    return (
        <Button 
            onClick={() => onEdit(itemId)}
            isLoading={isLoading}
            minW='25px'>
                <EditIcon />
        </Button>
    )
}

export default EditItemBtn