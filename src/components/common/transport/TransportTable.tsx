import LidotelTable from "../tables/LidotelTable"

interface TransportTableProps {
    headers: JSX.Element[]
    rows: JSX.Element
    itemsCount: number
    pagination: JSX.Element
    loading: boolean 
}

const TransportTable = ({ headers, itemsCount, rows, loading, pagination }: TransportTableProps) => {
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

export default TransportTable