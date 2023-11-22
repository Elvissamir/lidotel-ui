import { useEffect, useState } from "react"
import { LaundryRequest } from "../../core/laundry/Laundry.types"
import { Order } from "../../core/orders/Orders.types"
import useLidotelTable from "../useLidotelTable"

const allLundryRequests: LaundryRequest[] = [
    { 
        roomId: "1", 
        userId: "1",
        date: "11/11/2023"
    },
    { 
        roomId: "5", 
        userId: "10",
        date: "11/11/2023"
    },
    { 
        roomId: "4", 
        userId: "50",
        date: "11/11/2023"
    },
    { 
        roomId: "10", 
        userId: "100",
        date: "11/11/2023"
    },
    { 
        roomId: "7", 
        userId: "20",
        date: "11/11/2023"
    }
]

const useLundryTable = () => {
    const [lundryRequestList, setLundryRequestList] = useState<LaundryRequest[]>([])
    const {
        sortedData,
        sortTextAsc,
        sortTextDesc,
        sortNumericDesc,
        sortNumericAsc,
        sortedByField,
        sortingType,
        currentPage,
        pageSize,
        paginatedData,
        totalPages,
        minPerPage,
        maxPerPage,
        onDecrementPageSize,
        onIncrementPageSize,
        canNextPage,
        canPreviousPage,
        goToInitialPage,
        goToNextPage,
        goToPreviousPage,
        gotToLastPage
    } = useLidotelTable({ data: lundryRequestList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchLundryRequestsData = () => {
        setLundryRequestList(allLundryRequests.map(request => ({...request})))
    }

    useEffect(() => {
        fetchLundryRequestsData()
    }, [])

    return {
        sortedData,
        sortTextAsc,
        sortTextDesc,
        sortNumericDesc,
        sortNumericAsc,
        sortedByField,
        sortingType,
        currentPage,
        pageSize,
        paginatedData,
        totalPages,
        minPerPage,
        maxPerPage,
        onDecrementPageSize,
        onIncrementPageSize,
        canNextPage,
        canPreviousPage,
        goToInitialPage,
        goToNextPage,
        goToPreviousPage,
        gotToLastPage,
        isFetchingData
    }
}

export default useLundryTable