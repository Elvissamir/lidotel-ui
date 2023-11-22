import { useEffect, useState } from "react"
import { TransportRequest } from "../../core/transport/Transport.types"
import useLidotelTable from "../useLidotelTable"

const allTransportRequests: TransportRequest[] = [
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

const useTransportsTable = () => {
    const [transportRequestList, setTransportRequestList] = useState<TransportRequest[]>([])
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
    } = useLidotelTable({ data: transportRequestList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchLundryRequestsData = () => {
        setTransportRequestList(allTransportRequests.map(request => ({...request})))
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

export default useTransportsTable