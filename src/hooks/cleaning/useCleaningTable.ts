import { useEffect, useState } from "react"
import { CleaningRequest } from "../../core/cleaning/Cleaning.types"
import useLidotelTable from "../useLidotelTable"

const allCleaningRequests: CleaningRequest[] = [
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

const useCleaningTable = () => {
    const [cleaningRequestList, setCleaningRequestsList] = useState<CleaningRequest[]>([])
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
    } = useLidotelTable({ data: cleaningRequestList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchComplaintsData = () => {
        setCleaningRequestsList(allCleaningRequests.map(request => ({...request})))
    }

    useEffect(() => {
        fetchComplaintsData()
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

export default useCleaningTable