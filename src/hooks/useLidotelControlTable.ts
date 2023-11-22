import { useEffect, useState } from "react"

interface useLidotelControlTableProps {
    data: any[]
}

const useLidotelControlTable = ({ data }: useLidotelControlTableProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [minPerPage, setMinPerPage] = useState(5)
    const [maxPerPage, setMaxPerPage] = useState(20)
    
    const totalPages = Math.ceil(data.length / pageSize)
    const indexOfLastItem = currentPage * pageSize
    const indexOfFirstItem = indexOfLastItem - pageSize
    const paginatedData= [...data].slice(indexOfFirstItem, indexOfLastItem)

    const goToInitialPage = () => setCurrentPage(1)
    const gotToLastPage = () => setCurrentPage(totalPages)
    const goToNextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1)
    }
    const goToPreviousPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }

    const canNextPage = () => {
        if (currentPage < totalPages)
            return true

        return false
    }

    const canPreviousPage = () => {
        if (currentPage > 1)
            return true 
        
        return false
    }

    const onDecrementPageSize = () => {
        if (pageSize > minPerPage)
            setPageSize(pageSize - 1)
    }

    const onIncrementPageSize = () => {
        if (pageSize < maxPerPage)
            setPageSize(pageSize + 1)
    }

    useEffect(() => {
        if (currentPage > totalPages)
            return setCurrentPage(totalPages)

        if (currentPage === 0 && totalPages > 0)
            return setCurrentPage(1)
    }, [ data ])
    
    return {
        currentPage,
        pageSize,
        paginatedData,
        totalPages,
        goToInitialPage,
        gotToLastPage,
        goToNextPage,
        goToPreviousPage,
        canNextPage,
        canPreviousPage,
        onDecrementPageSize,
        onIncrementPageSize,
        minPerPage,
        maxPerPage
    }
}

export default useLidotelControlTable