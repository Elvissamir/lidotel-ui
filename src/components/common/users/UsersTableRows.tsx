import { Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { FaEye } from "react-icons/fa"
import routes from "../../../core/routes"
import { User } from "../../../core/users/User.types"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"
import UserRoleTag from "./UserRoleTag"
import UserStatusTag from "./UserStatusTag"
import DeleteBtn from "../DeleteBtn"
import EditItemBtn from "../EditItemBtn"

interface UsersTableRowsProps {
    usersList: User[]
    isDeleting: boolean 
    onEdit: (userId: string) => void
    onDelete: (userId: string) => void
}

const UsersTableRows = ({ usersList, isDeleting, onEdit, onDelete }: UsersTableRowsProps) => {
    return (
        <>
            {usersList.map((user, index) => 
                <LidotelTableRow key={index}>
                    <LidotelTableRowData width="60px">
                        <Text>{user.userId}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Text>{user.firstName}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Text>{user.lastName}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="150px">
                        {user.phones.map((phone, index) => 
                            <Text key={index}>{phone}</Text>
                        )}
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <UserRoleTag role={user.role} />
                    </LidotelTableRowData>
                    <LidotelTableRowData width="250px">
                        <UserStatusTag status={user.status} />
                    </LidotelTableRowData>
                    <LidotelTableRowData width="25px">
                        <Link 
                            as={RouterLink} 
                            to={`${routes.users.url}/${user.userId}`}
                            w='25px'>
                                <FaEye />
                        </Link>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="25px">
                        <EditItemBtn
                            itemId={user.userId}
                            isLoading={false}
                            onEdit={onEdit} />
                    </LidotelTableRowData>
                    <LidotelTableRowData width="25px">
                        <DeleteBtn 
                            itemId={user.userId}
                            isLoading={isDeleting}
                            onDelete={onDelete} />
                    </LidotelTableRowData>
                </LidotelTableRow>
            )}
        </>
    )
}

export default UsersTableRows