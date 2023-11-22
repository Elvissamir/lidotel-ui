import { Flex } from "@chakra-ui/react"
import TabHeading from "../tabs/TabHeading"
import LidotelTableHeader from "../tables/LidotelTableHeader"
import { TablePagination } from "lidotel-ui"
import { useState } from "react"
import useComplaintsTable from "../../../hooks/complaints/useComplaintsTable"
import ComplaintsTable from "./ComplaintsTable"
import ComplaintsTableRows from "./ComplaintsTableRows"

const ComplaintsTabContent = () => {
    const { 
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
        isFetchingData} = useComplaintsTable()

    const [isDeletingComplaint, setIsDeletingComplaint] = useState(false)

    const onDeleteComplaint = () => {

    }

    return (
        <Flex flexDir='column' w='full'> 
            <TabHeading text="Reclamos" />
            <Flex my='10px' />
            <ComplaintsTable  
                headers={[
                    <LidotelTableHeader headerData={{ text: 'Nro Reclamo', fieldName: 'complaintId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Nro Habitación', fieldName: 'roomId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Descripción', fieldName: 'description', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Tipo', fieldName: 'type', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />
                ]}
                itemsCount={paginatedData.length}
                rows={<ComplaintsTableRows
                    isDeleting={isDeletingComplaint}
                    onEdit={() => null}
                    onDelete={onDeleteComplaint}
                    complaintsList={paginatedData} />}
                loading={isFetchingData}
                pagination={   
                    <Flex justifyContent='space-between' w='full'>
                        <Flex w='auto'>
                            <TablePagination 
                                currentPage={currentPage}
                                goToInitialPage={goToInitialPage}
                                goToLastPage={gotToLastPage}
                                goToNextPage={goToNextPage}
                                goToPreviousPage={goToPreviousPage}
                                canNextPage={canNextPage}
                                canPreviousPage={canPreviousPage}
                                pageSize={pageSize}
                                onDecrementPageSize={onDecrementPageSize}
                                onIncrementPageSize={onIncrementPageSize}
                                totalPages={totalPages}
                                maxPageSize={maxPerPage}
                                minPageSize={minPerPage} />
                        </Flex>
                    </Flex>} />
        </Flex>
    )
}

export default ComplaintsTabContent