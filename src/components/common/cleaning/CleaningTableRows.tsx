import { Text } from "@chakra-ui/react"
import { CleaningRequest } from "../../../core/cleaning/Cleaning.types"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"

interface CleaningTableRowsProps {
    cleaningRequestList: CleaningRequest[]
    isDeleting: boolean 
    onDelete: (orderId: string) => void
    onEdit: (orderId: string) => void
}

const CleaningTableRows = ({ cleaningRequestList, isDeleting, onEdit, onDelete }: CleaningTableRowsProps) => {
    return (
        <>
            {cleaningRequestList.map((request, index) => 
                <LidotelTableRow key={index}>
                    <LidotelTableRowData width="150px">
                        <Text>{request.roomId}</Text>
                    </LidotelTableRowData>
                      <LidotelTableRowData width="150px">
                        <Text>{request.userId}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="150px">
                        <Text>{request.date}</Text>
                    </LidotelTableRowData>
                </LidotelTableRow>
            )}
        </>
    )
}

export default CleaningTableRows