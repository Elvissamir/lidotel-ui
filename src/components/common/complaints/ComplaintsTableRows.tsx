import { Text } from "@chakra-ui/react"
import { Complaint } from "../../../core/complaints/Complaints.types"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"
import ComplaintTypeTag from "./ComplaintsTypeTag"

interface OrdersTableRowsProps {
    complaintsList: Complaint[]
    isDeleting: boolean 
    onDelete: (orderId: string) => void
    onEdit: (orderId: string) => void
}

const ComplaintsTableRows = ({ complaintsList, isDeleting, onEdit, onDelete }: OrdersTableRowsProps) => {
    return (
        <>
            {complaintsList.map((complaint, index) => 
                <LidotelTableRow key={index}>
                    <LidotelTableRowData width="150px">
                        <Text>{complaint.complaintId}</Text>
                    </LidotelTableRowData>
                      <LidotelTableRowData width="150px">
                        <Text>{complaint.roomId}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="150px">
                        <Text>{complaint.description}</Text>
                    </LidotelTableRowData>
                      <LidotelTableRowData width="150px">
                        <ComplaintTypeTag type={complaint.type} />
                    </LidotelTableRowData>
                </LidotelTableRow>
            )}
        </>
    )
}

export default ComplaintsTableRows