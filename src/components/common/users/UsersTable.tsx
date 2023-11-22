import LidotelTable from "../tables/LidotelTable"

interface UsersTableProps {
    headers: JSX.Element[]
    rows: JSX.Element
    itemsCount: number
    pagination: JSX.Element
    loading: boolean 
}

const UsersTable = ({ headers, itemsCount, rows, loading, pagination }: UsersTableProps) => {
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

export default UsersTable