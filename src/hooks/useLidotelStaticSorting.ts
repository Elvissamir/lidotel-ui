import { useEffect, useState } from 'react'
import { ControlTableSortType } from '../components/common/tables/controlTable.types'

interface UseControlTableSortingProps {
    data: any[]
}

export interface SortByParams {
    field: string 
}

const useLidotelStaticSorting = ({ data }: UseControlTableSortingProps) => {
    const [sortedData, setSortedData] = useState([...data])
    const [sortedByField, setSortedByField] = useState('')
    const [sortingType, setSortingType] = useState<ControlTableSortType>("asc")

    const sortTextDesc = ({ field }: SortByParams) => {
        const nsortedData = [...data]

        nsortedData.sort((a, b) => b[field].localeCompare(a[field]))

        setSortedData(nsortedData)
        setSortedByField(field)
        setSortingType("desc")
    }

    const sortTextAsc = ({ field }: SortByParams) => {
        const nsortedData = [...data]

        nsortedData.sort((a, b) => a[field].localeCompare(b[field]))

        setSortedData(nsortedData)
        setSortedByField(field)
        setSortingType("asc")
    }

    const sortNumericDesc = ({ field }) => {
        const nsortedData = [...data]

        nsortedData.sort((a, b) => b[field] - a[field])

        setSortedData(nsortedData)
        setSortedByField(field)
        setSortingType("desc")
    }

    const sortNumericAsc = ({ field }) => {
        const nsortedData = [...data]

        nsortedData.sort((a, b) => a[field] - b[field])

        setSortedData(nsortedData)
        setSortedByField(field)
        setSortingType("asc")
    }

    useEffect(() => {
        setSortedData([...data])
    }, [ data ])

    return {
        sortedData,
        sortTextAsc,
        sortTextDesc,
        sortNumericDesc,
        sortNumericAsc,
        sortedByField,
        sortingType
    }
}

export default useLidotelStaticSorting