import { Text } from "@chakra-ui/react"
import { LaundryRequest } from "../../../core/laundry/Laundry.types"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"

interface OrdersTableRowsProps {
    lundryRequest: LaundryRequest[]
    isDeleting: boolean 
    onDelete: (orderId: string) => void
    onEdit: (orderId: string) => void
}

const LundryTableRows = ({ lundryRequest, isDeleting, onEdit, onDelete }: OrdersTableRowsProps) => {
    return (
        <>
            {lundryRequest.map((request, index) => 
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

export default LundryTableRows