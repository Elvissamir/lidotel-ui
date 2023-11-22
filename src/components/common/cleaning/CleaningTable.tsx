import LidotelTable from "../tables/LidotelTable"

interface CleaningTableProps {
    headers: JSX.Element[]
    rows: JSX.Element
    itemsCount: number
    pagination: JSX.Element
    loading: boolean 
}

const CleaningTable = ({ headers, itemsCount, rows, loading, pagination }: CleaningTableProps) => {
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

export default CleaningTable