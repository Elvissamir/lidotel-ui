import { Flex } from "@chakra-ui/react"
import { TablePagination } from "lidotel-ui"
import useVisitsTable from "../../../hooks/visits/useVisitsTable"
import LidotelTableHeader from "../tables/LidotelTableHeader"
import TabHeading from "../tabs/TabHeading"
import VisitsTable from "./VisitsTable"
import VisitsTableRows from "./VisitsTableRows"

const VisitsTabContent = () => {
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
    } = useVisitsTable()

    return (
        <Flex flexDir='column' w='full'>
            <TabHeading text="Visitas" />
            <Flex my='10px' />
            <VisitsTable  
                headers={[
                    <LidotelTableHeader headerData={{ text: 'Id Visita', fieldName: 'visitId', sortedByField, showSorting: true, sortingType, onSortAsc: sortNumericAsc, onSortDesc: sortNumericDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Id Usuario', fieldName: 'userId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Id Habitacion', fieldName: 'roomId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Id factura', fieldName: 'billId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Inicio', fieldName: 'startDate', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Fin', fieldName: 'endDate', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />
                ]}
                itemsCount={paginatedData.length}
                rows={<VisitsTableRows
                    visitsList={paginatedData} />}
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

export default VisitsTabContent