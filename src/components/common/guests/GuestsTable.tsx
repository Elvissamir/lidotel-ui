import LidotelTable from "../tables/LidotelTable"

interface GuestsTableProps {
    headers: JSX.Element[]
    rows: JSX.Element
    itemsCount: number
    pagination: JSX.Element
    loading: boolean 
}

const GuestsTable = ({ headers, itemsCount, rows, loading, pagination }: GuestsTableProps) => {
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

export default GuestsTable