import { useEffect, useState } from "react"
import { Complaint } from "../../core/complaints/Complaints.types"
import useLidotelTable from "../useLidotelTable"

const allComplaints: Complaint[] = [
    { 
        roomId: "1",
        complaintId: "1",
        type: "Resources",
        description: ""
    },
    { 
        roomId: "2",
        complaintId: "1",
        type: "Security",
        description: ""
    },
    { 
        roomId: "3",
        complaintId: "1",
        type: "Services",
        description: ""
    },
    { 
        roomId: "4",
        complaintId: "1",
        type: "Services",
        description: ""
    },
    { 
        roomId: "5",
        complaintId: "1",
        type: "Resources",
        description: ""
    }
]

const useComplaintsTable = () => {
    const [complaintsList, setComplaintsList] = useState<Complaint[]>([])
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
    } = useLidotelTable({ data: complaintsList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchComplaintsData = () => {
        setComplaintsList(allComplaints.map(complaint => ({...complaint})))
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

export default useComplaintsTable