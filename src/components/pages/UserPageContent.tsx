import { Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { User } from '../../core/users/User.types'
import useUserForm from '../../hooks/users/useUserForm'
import DeleteBtn from '../common/DeleteBtn'
import UserFormModal from '../common/users/UserFormModal'
import UserRoleTag from '../common/users/UserRoleTag'
import UserStatusTag from '../common/users/UserStatusTag'

const UserPageContent = () => {
    const user: User =  { 
        userId: "1",
        firstName: "Juan",
        lastName: "Cardona",
        ci: "25516109",
        phones: ["0424-240-29-45"],
        address: { 
            state: "Distrito Federal", 
            city: 'Caracas',
            zoneCode: '1010',
            street: "Candelaria"
        },
        status: "Active",
        role: "Admin"
    }

    const [showEditUserModal, setShowEditUserModal] = useState(false)
    const onShowEditForm = () => setShowEditUserModal(true)
    const onCloseEditForm = () => setShowEditUserModal(false)

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
        editUserData: user, 
        reset: showEditUserModal 
    })

    return (
        <Flex>
            <Flex borderRadius='4px' shadow='lg' flexDir='column' padding='20px' w='full'>
                <Flex alignItems='center' justifyContent="space-between">
                    <Text
                        fontWeight='700'
                        fontSize='24px'>
                            Usuario: {`${user.firstName} ${user.lastName}`}
                    </Text>
                    <DeleteBtn
                        itemId={user.userId}
                        isLoading={false}
                        onDelete={() => null} />
                </Flex>
                <Flex>
                    <Flex flexDir='column'>
                        <Text fontWeight='700' >Id usuario: </Text>
                        <Text>{user.userId}</Text>
                    </Flex>
                    <Flex bg='gray.300' mx='16px' h='full' w='2px'></Flex>
                    <Flex flexDir='column'>
                        <Text fontWeight='700'>Status</Text>
                        <Flex>
                            <UserStatusTag status={user.status} />
                        </Flex>
                    </Flex>
                    <Flex bg='gray.300' mx='16px' h='full' w='2px'></Flex>
                    <Flex flexDir="column">
                        <Text fontWeight='700'>Cargo</Text>
                        <Flex>
                            <UserRoleTag role={user.role} />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex bg='gray.300' my='16px' h='1px' w='full' />
                <Text fontWeight='700' fontSize='18px'>Detalles</Text>
                <Flex flexDir='column'>
                    <Text fontWeight='700'>CI: </Text>
                    <Text>{user.ci}</Text>
                    <Text fontWeight='700' mt='10px'>Teléfonos: </Text>
                    <Flex>
                        {user.phones.map(phone => 
                            <Text>{phone}</Text>    
                        )}
                    </Flex>
                    <Text fontWeight='700' mt='10px'>
                        Dirección: 
                    </Text>
                    <Text>
                        {`${user.address.state} ${user.address.city} ${user.address.street} ${user.address.zoneCode}`}
                    </Text>
                </Flex>
                <Flex mt='16px' w='full'>
                    <Button
                        onClick={onShowEditForm}
                        bg='black'
                        color='white'
                        _hover={{ bg: 'yellow.600' }}>
                            Editar
                    </Button>
                </Flex>
            </Flex>
            <Flex>
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
            </Flex>
        </Flex>
    )
}

export default UserPageContent