import { Flex } from "@chakra-ui/react"
import TabHeading from "../tabs/TabHeading"
import LidotelTableHeader from "../tables/LidotelTableHeader"
import { TablePagination } from "lidotel-ui"
import { useState } from "react"
import LundryTableRows from "./LundryTableRows"
import LundryTable from "./LundryTable"
import useLundryTable from "../../../hooks/lundry/useLundryTable"

const LundryTabContent = () => {
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
        isFetchingData } = useLundryTable()

    const [isDeletingOrder, setIsDeletingOrder] = useState(false)

    const onDeleteOrder = () => {

    }

    return (
        <Flex flexDir='column' w='full'> 
            <TabHeading text="Lavanderia" />
            <Flex my='10px' />
            <LundryTable  
                headers={[
                    <LidotelTableHeader headerData={{ text: 'Nro de Habitacion', fieldName: 'roomId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Id Usuario', fieldName: 'userId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Fecha', fieldName: 'date', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />
                ]}
                itemsCount={paginatedData.length}
                rows={<LundryTableRows
                    isDeleting={isDeletingOrder}
                    onEdit={() => null}
                    onDelete={onDeleteOrder}
                    lundryRequest={paginatedData} />}
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

export default LundryTabContent