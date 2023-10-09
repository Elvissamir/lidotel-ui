import { Button, Flex, Input, Select, Text } from "@chakra-ui/react"
import { TableState, Updater } from "@tanstack/react-table"

interface DataTablePaginationProps {
    pageIndex: number
    pageSize: number
    getState: () => TableState
    canPreviousPage: () => boolean
    previousPage: () => void
    canNextPage: () => boolean
    nextPage: () => void
    pageCount: () => number
    pageOptions: () => number[]
    setPageIndex: (updater: Updater<number>) => void
    setPageSize: (updater: Updater<number>) => void
}

const DataTablePagination = ({ 
    canPreviousPage, 
    previousPage, 
    canNextPage, 
    nextPage, 
    pageCount,
    getState,
    setPageIndex,
    setPageSize }: DataTablePaginationProps) => {

    return (
        <Flex justifyContent='center' alignItems='center' mt='30px' w='full'>
            <Flex alignItems='center'>
                <Flex alignItems='center'>
                    <Button
                        bg="gray.300"
                        minW='30px'
                        onClick={() => setPageIndex(0)}
                        isDisabled={!canPreviousPage()}>
                        {'<<'}
                    </Button>
                    <Button
                        bg="gray.300"
                        minW='30px'
                        ml='10px'
                        onClick={previousPage}
                        isDisabled={!canPreviousPage()}>
                        {'<'}
                    </Button>
                    <Button
                        bg="gray.300"
                        minW='30px'
                        ml='10px'
                        onClick={nextPage}
                        isDisabled={!canNextPage()}>
                        {'>'}
                    </Button>
                    <Button
                        bg="gray.300"
                        minW='30px'
                        ml='10px'
                        onClick={() => setPageIndex(pageCount() - 1)}
                        isDisabled={!canNextPage()}>
                        {'>>'}
                    </Button>
                </Flex>
                <Flex alignItems='center' ml='20px' w='110px'>
                    <Flex mr='10px'>Page</Flex>
                    <strong>
                        {getState().pagination.pageIndex + 1} of{' '}
                        {pageCount()}
                    </strong>
                </Flex>
                <Text ml='10px'>|</Text>
                <Flex alignItems='center' ml='15px' w='250px'>
                    <Text>Go to Page:</Text>
                    <Input
                        type="number"
                        defaultValue={getState().pagination.pageIndex + 1}
                        onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        setPageIndex(page) }}
                        ml='10px'
                        maxW='120px' />
                </Flex>
                <Select
                    value={getState().pagination.pageSize}
                    onChange={e => { setPageSize(Number(e.target.value)) }}
                    marginLeft='15px'
                    maxW='150px'>
                        {[5, 10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                            </option>
                        ))}
                    </Select>
            </Flex>
        </Flex>
    )
}

export default DataTablePagination