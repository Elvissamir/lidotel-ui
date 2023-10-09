import { ChangeEvent, useState, useEffect } from "react"
import { TableUser } from "../core/interfaces/table"

const usersarr: TableUser[] = [
    { firstName: 'Alan', lastName: 'Collins', email: 'alan_collins@mail.com', country: 'USA', company: 'AMAZON' },
    { firstName: 'Joe', lastName: 'Collins', email: 'big_joe@mail.com', country: 'USA', company: 'GOOGLE' },
    { firstName: 'Sebastian', lastName: 'Bach', email: 'sebs@mail.com', country: 'USA', company: 'FACBOOK' },
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

const useUserTable = () => {
    const [ users, setUsers ] = useState([...usersarr])
    const [ userToAdd, setUserToAdd ] = useState({...initialUser})
    const [ userToDelete, setUserToDelete ] = useState({...initialUser})
    const [ userToEdit, setUserToEdit ] = useState({ ...initialUser })
    const [ filteredUsers, setFilteredUsers ] = useState([...users])
    const [ searchField, setSearchField ] = useState<string>(Object.keys(initialUser)[0])
    const [ searchText, setSearchText ] = useState<string>('')

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const closeDeleteModal = () => setShowDeleteModal(false)

    const [showAddModal, setShowAddModal] = useState(false)
    const closeAddModal = () => setShowAddModal(false)

    const [showEditModal, setShowEditModal] = useState(false)
    const closeEditModal = () => setShowEditModal(false)

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
    
    const handleChangeEdit = (e: ChangeEvent<HTMLInputElement>) => {
        const nuserToEdit = {...userToEdit}

        if (e.target.id === 'firstName') nuserToEdit.firstName = e.target.value
        if (e.target.id === 'lastName') nuserToEdit.lastName = e.target.value
        if (e.target.id === 'email') nuserToEdit.email = e.target.value
        if (e.target.id === 'country') nuserToEdit.country = e.target.value
        if (e.target.id === 'company') nuserToEdit.company = e.target.value

        setUserToEdit(nuserToEdit)
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

    const editUserHandler = (email: string) => {
        const toEdit = users.find(user => user.email === email)

        if (toEdit) {
            setShowEditModal(true)
            setUserToEdit({...toEdit})
        }
    }

    const editUser = (email: string) => {
        const nuser = {...userToEdit}
        nuser.country = nuser.country.substring(0, 3).toLocaleUpperCase()

        const nusers = [...users]
        const userIndex = nusers.findIndex(user => user.email === email)

        if (userIndex !== -1) {
            nusers[userIndex] = nuser

            setUsers(nusers)
            setUserToEdit({...initialUser})
            closeEditModal()
        }

        closeEditModal()
    }

    const handleFilterByText = (text: string) => {
        console.log('search field', searchField)

        const searchFieldText = searchField[0].toLocaleLowerCase() + searchField.substring(1)

        const nfilteredUsers = [...users].filter(user => user[searchFieldText as keyof TableUser]
            .toLocaleLowerCase()
            .includes(text.toLocaleLowerCase()))

        console.log(nfilteredUsers)

        setFilteredUsers(nfilteredUsers)
    }

    const handleChangeSearchField = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log('select', e.target.value)
        setSearchField(e.target.value)
    }
    
    const handleSearchByField = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        console.log('search text changed', searchText)
        handleFilterByText(searchText)
    }, [ searchText, searchField, users ])

    return {
        removeUser,
        removeUserHandler,
        handleChange,
        handleChangeEdit,
        handleFilterByText,
        handleSearchByField,
        handleChangeSearchField,
        editUserHandler,
        closeEditModal,
        addUserHandler,
        addUser,
        userToDelete,
        filteredUsers,
        userToAdd,
        userToEdit,
        users,
        searchField, 
        searchText,
        editUser,
        showAddModal,
        showDeleteModal,
        showEditModal,
        closeDeleteModal,
        closeAddModal
    }
}

export default useUserTable