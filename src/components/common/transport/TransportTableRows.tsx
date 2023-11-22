import { Text } from "@chakra-ui/react"
import { TransportRequest } from "../../../core/transport/Transport.types"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"

interface OrdersTableRowsProps {
    transportList: TransportRequest[]
    isDeleting: boolean 
    onDelete: (orderId: string) => void
    onEdit: (orderId: string) => void
}

const OrdersTableRows = ({ transportList, isDeleting, onEdit, onDelete }: OrdersTableRowsProps) => {
    return (
        <>
            {transportList.map((request, index) => 
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

export default OrdersTableRows