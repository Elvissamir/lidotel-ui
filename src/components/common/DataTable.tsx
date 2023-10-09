import * as React from "react";
import { ChangeEvent } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Button, Flex, Select, Input } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel
} from "@tanstack/react-table";
import { TableUser } from "../../core/interfaces/table";
import { RiPencilFill } from "react-icons/ri";
import { TablePagination } from "lidotel-ui";

export interface DataTableProps {
  data: TableUser[]
  columns: ColumnDef<TableUser, any>[]
  searchField: string 
  searchText: string 
  onSearchByField: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeSearchField: (e: ChangeEvent<HTMLSelectElement>) => void
  onFilter: (text: string) => void
  onEditUser: (email: string) => void
  onDeleteUser: (email: string) => void
};

const DataTable = ({ data, columns, searchField, searchText, onEditUser, onDeleteUser, onFilter, onChangeSearchField, onSearchByField  }: DataTableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    getState,
    setPageSize,
    setPageIndex,
    initialState: {
      pagination: {
        pageIndex,
        pageSize
      }
    }
  } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0
      }
    },
    state: {
      sorting
    }
  });

  const minPageSize = 1
  const maxPageSize = 10

  const handleDecrementPageSize = () => {
    if (getState().pagination.pageSize > minPageSize)
      setPageSize(pageSize => pageSize - 1)
  }

  const handleIncrementPageSize = () => {
    if (getState().pagination.pageSize < maxPageSize)
      setPageSize(pageSize => pageSize + 1)
  }

  return (
    <Flex flexDir='column' justifyContent='flex-end' alignItems='flex-end' w='full'>
      <Flex mb='30px'>
        <Select onChange={onChangeSearchField} value={searchField} size='sm' w='150px'>
          {columns.map((column, index) => 
            <option key={index} value={column.header+''}>{column && column.header? column.header+'' : ''}</option>  
          )}
        </Select>
        <Input 
          onChange={onSearchByField} 
          size='sm'
          ml='15px'
          placeholder='Search by text'
          value={searchText}
          w='200px' />
      </Flex>
      <Table>
        <Thead borderBottom='2px' borderBottomColor='blue.700'>
          {getHeaderGroups().map((headerGroup, index) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta: any = header.column.columnDef.meta;
                return (
                  <Th
                    fontFamily='Archivo narrow'
                    fontSize='18px'
                    paddingLeft='0'
                    color='blue.700'
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    textAlign='start'
                    isNumeric={false}>
                      {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                      )}
                    <chakra.span   
                      fontSize='12px'
                      color='gray.500' 
                      ml='2px'
                      w='5px'>
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === "desc" ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                );
              })}
              <Th  
                  fontFamily='Archivo narrow'
                  fontSize='18px'
                  paddingLeft='0'
                  color='blue.700' key={`remove-${index}`}>
                Remove 
              </Th>
              <Th  
                  fontFamily='Archivo narrow'
                  fontSize='18px'
                  paddingLeft='0'
                  paddingRight='0'
                  color='blue.700' key={`edit-`}>
                  Edit
              </Th>
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {getRowModel().rows.map((row, index) => (
            <Tr key={index}>
              {row.getVisibleCells().map((cell) => {
                const meta: any = cell.column.columnDef.meta;
                return (
                  <Td 
                    fontFamily='Archivo narrow'
                    textAlign='start'
                    fontSize='16px' 
                    key={cell.id} 
                    paddingLeft='0'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
              <Td 
                display='flex' 
                justifyContent='center' 
                paddingLeft='0'
                w='100px'>
                  <Button 
                      onClick={() => onDeleteUser(row.original.email)} 
                      variant='primaryRed500' 
                      h='30px' 
                      w='30px' 
                      padding='10px' 
                      minW='25px' 
                      borderRadius='full'>X</Button>
              </Td>
              <Td
                 paddingLeft='0'
                 paddingRight='0'>
                  <Button 
                      onClick={() => onEditUser(row.original.email)} 
                      bg='black'
                      padding='10px'
                      h='30px' 
                      w='30px'  
                      marginLeft='5px'
                      minW='25px' 
                      borderRadius='full'>
                        <RiPencilFill color="white" fontSize='40px' />
                  </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex mr='auto'>
        <TablePagination
          pageSize={getState().pagination.pageSize}
          currentPage={getState().pagination.pageIndex + 1}
          minPageSize={minPageSize}
          maxPageSize={maxPageSize}
          totalPages={getPageCount()}
          canNextPage={getCanNextPage}
          canPreviousPage={getCanPreviousPage}
          onDecrementPageSize={handleDecrementPageSize}
          onIncrementPageSize={handleIncrementPageSize}
          goToPreviousPage={previousPage}
          goToInitialPage={() => setPageIndex(0)}
          goToLastPage={() => setPageIndex(getPageCount() - 1)}
          goToNextPage={nextPage} />
      </Flex>
    </Flex>
  );
}

export default DataTable