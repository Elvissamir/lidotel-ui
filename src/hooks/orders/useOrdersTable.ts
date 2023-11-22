import { useEffect, useState } from "react"
import { Order } from "../../core/orders/Orders.types"
import useLidotelTable from "../useLidotelTable"

const allOrders: Order[] = [
    { 
        roomNumber: 1,
        userId: "1",
        orderId: "1",
        title: "Pizza - Room 1",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 300 } ],
        status: "In Progress",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 2,
        userId: "1",
        orderId: "1",
        title: "Desayuno - Room 2",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 400 } ],
        status: "Completed",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 3,
        userId: "1",
        orderId: "1",
        title: "Cena - Room 3",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 400 } ],
        status: "Canceled",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 4,
        userId: "1",
        orderId: "1",
        title: "Pizza - Room 4",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 500 } ],
        status: "Completed",
        type: "Food",
        created_at: "20/11/2023"
    },
    { 
        roomNumber: 5,
        userId: "1",
        orderId: "1",
        title: "Hamburguesa - Room 5",
        items: [ { title: "Pizza Margarita", description: "pizza", price: 600 } ],
        status: "Completed",
        type: "Food",
        created_at: "20/11/2023"
    }
]

const useOrdersTable = () => {
    const [ordersList, setOrdersList] = useState<Order[]>([])
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
    } = useLidotelTable({ data: ordersList })

    const [ isFetchingData, setIsFetchingData ] = useState(false)

    const fetchOrdersData = () => {
        setOrdersList(allOrders.map(order => ({...order})))
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

export default useOrdersTable