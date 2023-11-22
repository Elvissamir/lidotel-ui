import { useEffect, useState } from "react"
import { Guest } from "../../core/guests/Guests.types"
import useLidotelTable from "../useLidotelTable"

const allGuests: Guest[] = [
    { 
        guestId: "1",
        firstName: "Alfonso",
        lastName: "Saran",
        ci: "25516108",
        address: {
            state: "Distrito Capital",
            city: "Caracas",
            zoneCode: "1010"
        },
        phones: ["04241093949", "04241093329"],
        status: "Active"
    },
    { 
        guestId: "2",
        firstName: "Valentina",
        lastName: "Zamora",
        ci: "25516108",
        address: {
            state: "Distrito Capital",
            city: "Caracas",
            zoneCode: "1010"
        },
        phones: ["04161050209"],
        status: "Active"
    },
    { 
        guestId: "3",
        firstName: "Julian",
        lastName: "Castro",
        ci: "25516108",
        address: {
            state: "Distrito Capital",
            city: "Caracas",
            zoneCode: "1010"
        },
        phones: ["04121093989"],
        status: "Inactive"
    },
    { 
        guestId: "4",
        firstName: "Natalia",
        lastName: "Panelo",
        ci: "25516108",
        address: {
            state: "Distrito Capital",
            city: "Caracas",
            zoneCode: "1010"
        },
        phones: ["04249299829"],
        status: "Inactive"
    }
]

const useGuestsTable = () => {
    const [guestsList, setGuestsList] = useState<Guest[]>([])
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
    } = useLidotelTable({ data: guestsList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchOrdersData = () => {
        setGuestsList(allGuests.map(order => ({...order})))
    }

    useEffect(() => {
        fetchOrdersData()
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

export default useGuestsTable