import LidotelTable from "../tables/LidotelTable"

interface VisitsTableProps {
    headers: JSX.Element[]
    rows: JSX.Element
    itemsCount: number
    pagination: JSX.Element
    loading: boolean 
}

const VisitsTable = ({ headers, itemsCount, rows, loading, pagination }: VisitsTableProps) => {
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

export default VisitsTable