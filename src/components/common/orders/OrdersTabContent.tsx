import { Flex } from "@chakra-ui/react"
import TabHeading from "../tabs/TabHeading"
import OrdersTable from "./OrdersTable"
import LidotelTableHeader from "../tables/LidotelTableHeader"
import { TablePagination } from "lidotel-ui"
import OrdersTableRows from "./OrdersTableRows"
import { useState } from "react"
import useOrdersTable from "../../../hooks/orders/useOrdersTable"

const OrdersTabContent = () => {
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
    } = useOrdersTable()

    const [isDeletingOrder, setIsDeletingOrder] = useState(false)

    const onDeleteOrder = () => {

    }

    return (
        <Flex flexDir='column' w='full'> 
            <TabHeading text="Ordenes" />
            <Flex my='10px' />
            <OrdersTable  
                headers={[
                    <LidotelTableHeader headerData={{ text: 'Nro. Habitacion', fieldName: 'roomNumber', sortedByField, showSorting: true, sortingType, onSortAsc: sortNumericAsc, onSortDesc: sortNumericDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Id', fieldName: 'orderId', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Nombre', fieldName: 'title', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Estado', fieldName: 'status', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Tipo', fieldName: 'type', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />
                ]}
                itemsCount={paginatedData.length}
                rows={<OrdersTableRows
                    isDeleting={isDeletingOrder}
                    onEdit={() => null}
                    onDelete={onDeleteOrder}
                    ordersList={paginatedData} />}
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

export default OrdersTabContent