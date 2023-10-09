import { useState, ChangeEvent } from 'react';
import { Heading, useColorModeValue, Flex, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Button, Text } from "@chakra-ui/react";
import { CustomModal, SideBar } from "lidotel-ui";
import { SideBarMenuItemData } from "lidotel-ui/dist/components/layout/SideBar";
import { RiUserSettingsLine } from 'react-icons/ri';
import { HiPlus, HiUsers } from 'react-icons/hi';
import { TbArrowsLeftRight } from 'react-icons/tb';
import TableUserForm from '../common/TableUserForm';
import { TableUser } from '../../core/interfaces/table';

const tableHeaders = [
    "FirstName",
    "LastName",
    "Email",
    "Country",
    "Company",
    "REMOVE"
]

const usersarr: TableUser[] = [
    { firstName: 'Alan', lastName: 'Collins', email: 'alan_collins@mail.com', country: 'USA', company: 'AMAZON' },
    { firstName: 'Joe', lastName: 'Collins', email: 'big_joe@mail.com', country: 'USA', company: 'GOOGLE' },
    { firstName: 'Sebastian', lastName: 'Bach', email: 'sebs@mail.com', country: 'USA', company: 'FACEBOOK' },
    { firstName: 'Soromay', lastName: 'Villareal', email: 'soromay@mail.com', country: 'COL', company: 'OPENAI' },
    { firstName: 'Steve', lastName: 'Siz', email: 'stevesiz@mail.com', country: 'BRA', company: 'ZOOM' },
    { firstName: 'Amanda', lastName: 'Plata', email: 'amanplata@mail.com', country: 'ARG', company: 'APPLE' },
    { firstName: 'Leo', lastName: 'Greendl', email: 'green@mail.com', country: 'ENG', company: 'ZOOM' },
    { firstName: 'Greg', lastName: 'Al', email: 'gregal@mail.com', country: 'NZ', company: 'APPLE' },
]

const initialUser: TableUser = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    company: ''
}

const TablesPageContent = () => {
    const headingColor = useColorModeValue('blue.900', 'white')
    const [ users, setUsers ] = useState([...usersarr])
    const [ userToDelete, setUserToDelete ] = useState({...initialUser})
    const [ userToAdd, setUserToAdd ] = useState({...initialUser})

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const closeDeleteModal = () => setShowDeleteModal(false)

    const [showAddModal, setShowAddModal] = useState(false)
    const closeAddModal = () => setShowAddModal(false)

    const removeUserHandler = (email: string) => {
        const toDelete = users.find(user => user.email === email)

        if (toDelete) {
            setShowDeleteModal(true)
            setUserToDelete(toDelete)
        }
    }

    const removeUser = (email: string) => {
        const nusers = users.filter(user => user.email !== email)

        setUsers(nusers)
        setUserToDelete({...initialUser})
        closeDeleteModal()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nuserToAdd = {...userToAdd}

        if (e.target.id === 'firstName') nuserToAdd.firstName = e.target.value
        if (e.target.id === 'lastName') nuserToAdd.lastName = e.target.value
        if (e.target.id === 'email') nuserToAdd.email = e.target.value
        if (e.target.id === 'country') nuserToAdd.country = e.target.value
        if (e.target.id === 'company') nuserToAdd.company = e.target.value

        setUserToAdd(nuserToAdd)
    }

    const addUserHandler = () => {
        setShowAddModal(true)
    }

    const addUser = () => {
        const nuser = {...userToAdd}
        nuser.country = nuser.country.substring(0, 3).toLocaleUpperCase()

        const nusers = [...users]

        nusers.push(nuser)

        setUsers(nusers)
        setUserToAdd({...initialUser})
        closeAddModal()
    }

    return (
        <>
            <Flex justifyContent='space-between' w='full'>
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
                </div>} 
            />
            <Flex mt='50px'>
                <TableContainer>
                <Table variant='striped' colorScheme="blue">
                    <TableCaption>Users</TableCaption>
                    <Thead>
                    <Tr>
                        {tableHeaders.map((item, key) => 
                            <Th key={key}>{item}</Th> 
                        )}
                    </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((item, key) => 
                            <Tr key={key}>
                                <Td>{item.firstName}</Td>
                                <Td>{item.lastName}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.country}</Td>
                                <Td>{item.company}</Td>
                                <Td display='flex' justifyContent='center'>
                                    <Button 
                                        onClick={() => removeUserHandler(item.email)} 
                                        variant='primaryRed500' 
                                        h='20px' 
                                        w='20px' 
                                        padding='10px' 
                                        minW='10px' 
                                        borderRadius='full'>X</Button>
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
                </TableContainer>
            </Flex>
        </>
    )
}

export default TablesPageContent