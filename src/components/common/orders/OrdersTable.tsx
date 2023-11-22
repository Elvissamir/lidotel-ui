import LidotelTable from "../tables/LidotelTable"

interface OrdersTableProps {
    headers: JSX.Element[]
    rows: JSX.Element
    itemsCount: number
    pagination: JSX.Element
    loading: boolean 
}

const OrdersTable = ({ headers, itemsCount, rows, loading, pagination }: OrdersTableProps) => {
    return (
        <LidotelTable 
            headers={headers}
            rows={rows}
            itemsCount={itemsCount}
            thPadding="16px"
            loading={loading}
            pagination={pagination} />
    )
}

export default OrdersTable