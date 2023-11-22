import { Flex } from "@chakra-ui/react"
import { TablePagination } from "lidotel-ui"
import { useState } from "react"
import { User } from "../../core/users/User.types"
import useUserForm from "../../hooks/users/useUserForm"
import useUsersTable from "../../hooks/users/useUsersTable"
import LidotelTableHeader from "../common/tables/LidotelTableHeader"
import TabHeading from "../common/tabs/TabHeading"
import UserFormModal from "../common/users/UserFormModal"
import UsersTable from "../common/users/UsersTable"
import UsersTableRows from "../common/users/UsersTableRows"

const UsersPageContent = () => {
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
    } = useUsersTable()

    const [isDeletingOrder, setIsDeletingOrder] = useState(false)

    const [showEditUserModal, setShowEditUserModal] = useState(false)
    const onShowEditForm = () => setShowEditUserModal(true)
    const onCloseEditForm = () => setShowEditUserModal(false)

    const [ selectedUser, setSelectedUser ] = useState<User>()
    const {
        formData,
        phone,
        formMode,
        onInputChange,
        onChangeRole,
        onChangeStatus,
        onAddPhone,
        onRemovePhone,
        onEdit
    } = useUserForm({ 
        mode: "edit",
        editUserData: selectedUser, 
        reset: showEditUserModal 
    })

    const onEditUser = (userId: string) => {
        const userById = paginatedData.find(user => user.userId === userId)

        if (userById) {
            setSelectedUser(userById)
            onShowEditForm()
        }
    }

    const onDeleteOrder = () => {

    }

    return (
        <Flex flexDir='column' w='full'> 
            <UserFormModal
                mode={formMode}
                userData={formData.userData}
                errors={formData.errors}
                phone={phone}
                isSavingChanges={false}
                show={showEditUserModal}
                onClose={onCloseEditForm}
                onAddPhone={onAddPhone}
                onChangeRole={onChangeRole}
                onChangeStatus={onChangeStatus}
                onInputChange={onInputChange}
                onRemovePhone={onRemovePhone}
                onSave={onEdit} />
            <TabHeading text="Usuarios" />
            <Flex my='10px' />
            <UsersTable  
                headers={[
                    <LidotelTableHeader headerData={{ text: 'Id usuario', fieldName: 'userId', sortedByField, showSorting: true, sortingType, onSortAsc: sortNumericAsc, onSortDesc: sortNumericDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Nombre', fieldName: 'firstName', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Apellido', fieldName: 'lastName', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Teléfonos', fieldName: 'phones', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Tipo', fieldName: 'role', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />,
                    <LidotelTableHeader headerData={{ text: 'Estado', fieldName: 'status', sortedByField, showSorting: true, sortingType, onSortAsc: sortTextAsc, onSortDesc: sortTextDesc }} />
                ]}
                itemsCount={paginatedData.length}
                rows={<UsersTableRows
                    isDeleting={isDeletingOrder}
                    onEdit={onEditUser}
                    onDelete={onDeleteOrder}
                    usersList={paginatedData} />}
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

export default UsersPageContent