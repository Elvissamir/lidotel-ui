import { useEffect, useState } from "react"
import { User } from "../../core/users/User.types"
import useLidotelTable from "../useLidotelTable"

const users: User[] = [
    { 
        userId: "1",
        firstName: "Juan",
        lastName: "Cardona",
        ci: "25516109",
        phones: ["0424-350-50-45"],
        address: { 
            state: "Distrito Federal", 
            city: 'Caracas',
            zoneCode: '1010',
            street: "Candelaria"
        },
        status: "Active",
        role: "Admin"
    },
    { 
        userId: "2",
        firstName: "Alfonso",
        lastName: "Mejias",
        ci: "25516109",
        phones: ["0424-902-12-45"],
        address: { 
            state: "Distrito Federal", 
            city: 'Caracas',
            zoneCode: '1010',
            street: "Candelaria"
        },
        status: "Active",
        role: "Admin"
    },
    { 
        userId: "3",
        firstName: "Antonella",
        lastName: "Perez",
        ci: "25516109",
        phones: ["0424-110-20-43"],
        address: { 
            state: "Distrito Federal", 
            city: 'Caracas',
            zoneCode: '1010',
            street: "Candelaria"
        },
        status: "Active",
        role: "Staff"
    },
    { 
        userId: "4",
        firstName: "Lorena",
        lastName: "Olivo",
        ci: "25516109",
        phones: ["0424-321-09-89"],
        address: { 
            state: "Distrito Federal", 
            city: 'Caracas',
            zoneCode: '1010',
            street: "Candelaria"
        },
        status: "Active",
        role: "Staff"
    }
]

const useUsersTable = () => {
    const [usersList, setUsersList] = useState<User[]>([])
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
    } = useLidotelTable({ data: usersList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchUsersData = () => setUsersList(users.map(user => ({...user})))

    useEffect(() => {
        fetchUsersData()
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

export default useUsersTable