import { Flex, Button, Text} from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";
import { CustomModal } from "lidotel-ui";
import { createColumnHelper } from "@tanstack/react-table";
import { TableUser } from "../../core/interfaces/table";
import useUserTable from "../../hooks/useUserTable";
import DataTable from "../common/DataTable";
import TableUserForm from "../common/TableUserForm";

const columnHelper = createColumnHelper<TableUser>();
const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      header: "FirstName"
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => info.getValue(),
      header: "LastName"
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue(),
      header: "Email",
      meta: {
        isNumeric: true
      }
    }),
    columnHelper.accessor("country", {
        cell: (info) => info.getValue(),
        header: "Country"
    }),
    columnHelper.accessor("company", {
        cell: (info) => info.getValue(),
        header: "Company"
    })
];

const SortedTablePageContent = () => {
    const {
        users,
        userToAdd,
        userToDelete,
        filteredUsers,
        addUser,
        addUserHandler,
        removeUser,
        removeUserHandler,
        showAddModal,
        showDeleteModal,
        handleChange,
        closeAddModal,
        editUserHandler,
        closeEditModal,
        showEditModal,
        handleChangeEdit,
        userToEdit,
        handleFilterByText,
        searchField,
        searchText,
        handleChangeSearchField,
        handleSearchByField,
        editUser,
        closeDeleteModal
    } = useUserTable()

    return (
        <>
            <Flex justifyContent='flex-end' w='full'>
                <Button onClick={addUserHandler} variant='primaryBlue600' size='md'>
                    <Text color='white' mr='10px'>Add user</Text>
                    <HiPlus fontSize='15px' />
                </Button>
            </Flex>
            <CustomModal 
                type='alert' 
                header={`Delete user ${userToDelete.firstName}`}
                content={`Are you sure you want to delete the user by email: ${userToDelete.email}`}
                isOpen={showDeleteModal}
                onClose={closeDeleteModal}
                footer={<div>
                    <Button 
                        onClick={() => removeUser(userToDelete.email)}
                        variant='primaryRed500'
                        size='md'>Delete</Button>
                </div>} />
            <CustomModal 
                type='information' 
                header='Add User'
                content={<TableUserForm userData={userToAdd} onChange={handleChange} />}
                isOpen={showAddModal}
                onClose={closeAddModal}
                footer={<div>
                    <Button 
                        onClick={addUser}
                        variant='primaryBlue600'
                        size='md'>Add</Button>
                </div>} />
            <CustomModal   
                type='confirmation' 
                header={`Edit User ${userToEdit.firstName}`}
                content={<TableUserForm userData={userToEdit} onChange={handleChangeEdit} />}
                isOpen={showEditModal}
                onClose={closeEditModal}
                footer={<div>
                    <Button 
                        onClick={() => editUser(userToEdit.email)}
                        variant='primaryGreen500'
                        size='md'>Save</Button>
                </div>} />
            <Flex mt='20px' w='full'>
                <DataTable 
                    data={filteredUsers} 
                    columns={columns} 
                    searchField={searchField}
                    searchText={searchText}
                    onSearchByField={handleSearchByField}
                    onChangeSearchField={handleChangeSearchField}
                    onFilter={handleFilterByText}
                    onEditUser={editUserHandler}
                    onDeleteUser={removeUserHandler} />
            </Flex>
        </>
    )
}

export default SortedTablePageContent