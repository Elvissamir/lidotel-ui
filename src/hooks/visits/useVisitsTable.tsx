import { useEffect, useState } from "react"
import { Visit } from "../../core/visit/Visits.types"
import useLidotelTable from "../useLidotelTable"

const visits: Visit[] = [
    { 
        visitId: "1",
        userId: "1",
        billId: "1",
        roomId: "1",
        startDate: "10/09/2023",
        endDate: "11/09/2023"
    },
    { 
        visitId: "2",
        userId: "2",
        billId: "2",
        roomId: "1",
        startDate: "10/09/2023",
        endDate: "11/09/2023"
    },
    { 
        visitId: "3",
        userId: "1",
        billId: "3",
        roomId: "1",
        startDate: "10/09/2023",
        endDate: "11/09/2023"
    },
    { 
        visitId: "4",
        userId: "1",
        billId: "4",
        roomId: "1",
        startDate: "10/09/2023",
        endDate: "11/09/2023"
    },
    { 
        visitId: "5",
        userId: "1",
        billId: "5",
        roomId: "1",
        startDate: "10/09/2023",
        endDate: "11/09/2023"
    },
    { 
        visitId: "6",
        userId: "1",
        billId: "6",
        roomId: "1",
        startDate: "10/09/2023",
        endDate: "11/09/2023"
    },
    { 
        visitId: "7",
        userId: "1",
        billId: "7",
        roomId: "1",
        startDate: "10/09/2023",
        endDate: "11/09/2023"
    }
]

const useVisitsTable = () => {
    const [visitsList, setVisitsList] = useState<Visit[]>([])
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
    } = useLidotelTable({ data: visitsList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchVisitsData = () => setVisitsList(visits.map(user => ({...user})))

    useEffect(() => {
        fetchVisitsData()
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

export default useVisitsTable