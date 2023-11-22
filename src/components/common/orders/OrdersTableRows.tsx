import { Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { Order } from "../../../core/orders/Orders.types"
import routes from "../../../core/routes"
import LidotelTableRow from "../tables/LidotelTableRow"
import LidotelTableRowData from "../tables/LidotelTableRowData"
import OrderStatusTag from "./OrderStatusTag"
import OrderTypeTag from "./OrderTypeTag"

interface OrdersTableRowsProps {
    ordersList: Order[]
    isDeleting: boolean 
    onDelete: (orderId: string) => void
    onEdit: (orderId: string) => void
}

const OrdersTableRows = ({ ordersList, isDeleting, onEdit, onDelete }: OrdersTableRowsProps) => {
    return (
        <>
            {ordersList.map((order, index) => 
                <LidotelTableRow key={index}>
                    <LidotelTableRowData width="150px">
                        <Text>{order.roomNumber}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="60px">
                        <Link 
                            color="blue.500"
                            as={RouterLink} 
                            to={`${routes.orders.url}/${order.orderId}`}>
                                {order.userId}
                        </Link>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="150px">
                        <Text>{order.title}</Text>
                    </LidotelTableRowData>
                    <LidotelTableRowData width="150px">
                        <OrderStatusTag status={order.status} />
                    </LidotelTableRowData>
                    <LidotelTableRowData width="150px">
                        <OrderTypeTag type={order.type} />
                    </LidotelTableRowData>
                </LidotelTableRow>
            )}
        </>
    )
}

export default OrdersTableRows