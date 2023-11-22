import { Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"
import { Visit } from "../../../core/visit/Visits.types"
import routes from "../../../core/routes"

interface VisitsTableRowsProps {
    visitsList: Visit[]
}

const VisitsTableRows = ({ visitsList }: VisitsTableRowsProps) => {
    return (
        <>
            {visitsList.map((visit, index) => 
                <LidotelTableRow key={index}>
                    <LidotelTableRowData width="60px">
                        <Text>{visit.visitId}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Link 
                            color='blue.500' 
                            as={RouterLink} 
                            to={`${routes.users.url}/${visit.userId}`}>
                                { visit.userId }
                        </Link>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Link 
                            color='blue.500' 
                            as={RouterLink} 
                            to={`${routes.rooms.url}/${visit.roomId}`}>
                                { visit.roomId }
                        </Link>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Link 
                            color='blue.500' 
                            as={RouterLink} 
                            to={`${routes.bills.url}/${visit.billId}`}>
                                { visit.billId }
                        </Link>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Text>{visit.startDate}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Text>{visit.endDate}</Text>
                    </LidotelTableRowData>
                </LidotelTableRow>
            )}
        </>
    )
}

export default VisitsTableRows