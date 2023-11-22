import { Flex } from "@chakra-ui/react"
import { TablePagination } from "lidotel-ui"
import { useState } from "react"
import useGuestsTable from "../../hooks/guests/useGuestsTable"
import GuestsTable from "../common/guests/GuestsTable"
import GuestsTableRows from "../common/guests/GuestsTableRows"
import LidotelTableHeader from "../common/tables/LidotelTableHeader"
import TabHeading from "../common/tabs/TabHeading"

const HostsPageContent = () => {
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
        isFetchingData
    } = useGuestsTable()

    const [isDeletingOrder, setIsDeletingOrder] = useState(false)

    const onDeleteOrder = () => {

    }

    return (
        <Flex flexDir='column' w='full'> 
            <TabHeading text="Huéspedes" />
            <Flex my='10px' />
            <GuestsTable  
                headers={[
                    <LidotelTableHeader headerData={{ text: 'Id huésped', fieldName: 'guestId', sortedByField, showSorting: true, sortingType, onSortAsc: sortNumericAsc, onSortDesc: sortNumericDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Nombre', fieldName: 'firstName', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Apellido', fieldName: 'lastName', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Teléfonos', fieldName: 'phones', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Estado', fieldName: 'status', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />
                ]}
                itemsCount={paginatedData.length}
                rows={<GuestsTableRows
                    isDeleting={isDeletingOrder}
                    onEdit={() => null}
                    onDelete={onDeleteOrder}
                    guestsList={paginatedData} />}
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

export default HostsPageContent