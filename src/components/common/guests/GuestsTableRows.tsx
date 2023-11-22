import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Button, Link, Text } from "@chakra-ui/react"
import { FaEye } from "react-icons/fa"
import { Link as RouterLink } from 'react-router-dom'
import { Guest } from "../../../core/guests/Guests.types"
import routes from "../../../core/routes"
import DeleteBtn from "../DeleteBtn"
import EditItemBtn from "../EditItemBtn"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"
import GuestStatusTag from "./GuestStatusTag"

interface GuestsTableRowsProps {
    guestsList: Guest[]
    isDeleting: boolean 
    onDelete: (guestId: string) => void
    onEdit: (guestId: string) => void
}

const GuestsTableRows = ({ guestsList, isDeleting, onEdit, onDelete }: GuestsTableRowsProps) => {
    return (
        <>
            {guestsList.map((guest, index) => 
                <LidotelTableRow key={index}>
                    <LidotelTableRowData width="40px">
                        <Text>{guest.guestId}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Text>{guest.firstName}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Text>{guest.lastName}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="150px">
                        {guest.phones.map((phone, index) => 
                            <Text key={index}>{phone}</Text>
                        )}
                    </LidotelTableRowData>
                    <LidotelTableRowData width="250px">
                        <GuestStatusTag status={guest.status} />
                    </LidotelTableRowData>
                    <LidotelTableRowData width="25px">
                        <Link 
                            as={RouterLink} 
                            to={`${routes.hosts.url}/${guest.guestId}`}
                            w='25px'>
                                <FaEye />
                        </Link>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="25px">
                        <EditItemBtn
                            itemId={guest.guestId}
                            isLoading={false}
                            onEdit={onEdit} />
                    </LidotelTableRowData>
                    <LidotelTableRowData width="25px">
                        <DeleteBtn 
                            itemId={guest.guestId}
                            isLoading={isDeleting}
                            onDelete={onDelete} />
                    </LidotelTableRowData>
                </LidotelTableRow>
            )}
        </>
    )
}

export default GuestsTableRows