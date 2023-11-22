import { PlusSquareIcon } from "@chakra-ui/icons"
import { Button, Flex, FormControl, Text } from "@chakra-ui/react"
import { CustomFormLabel, CustomInput, CustomSelect } from "lidotel-ui"
import { ChangeEvent } from "react"
import { FormErrors } from "../../../core/form"
import { User, UserRole, UserStatus } from "../../../core/users/User.types"
import DeleteBtn from "../DeleteBtn"

interface StatusOption {
    value: UserStatus
    text: string
}

interface RoleOption {
    value: UserRole
    text: string
}

interface UserFormProps {
    mode: "add" | "edit"
    userData: User
    phone: string
    errors: FormErrors
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeRole: (e: ChangeEvent<HTMLSelectElement>) => void
    onChangeStatus: (e: ChangeEvent<HTMLSelectElement>) => void
    onAddPhone: () => void
    onRemovePhone: (phone: string) => void
    onSave: () => void
}

const UserForm = ({ mode, userData, phone, errors, onInputChange, onChangeRole, onChangeStatus, onSave, onAddPhone, onRemovePhone }: UserFormProps) => {
    const statusOptions: StatusOption[] = [
        { text: "Activo", value: "Active" },
        { text: "Desconocido", value: "Unknown" },
        { text: "Inactivo", value: "Inactive" }
    ]

    const roleOptions: RoleOption[] = [
        { text: "Administrativo", value: "Admin" },
        { text: "Personal", value: "Staff" }
    ]

    return (
        <Flex flexDir='column' w='full'>
            <FormControl>
                <CustomFormLabel
                    htmlFor="firstName"
                    text="Nombre" />
                <CustomInput
                    id="firstName"
                    value={userData.firstName}
                    error={errors && errors["firstName"] && errors["firstName"].message}
                    onChange={onInputChange} />
            </FormControl>
            <FormControl mt='12px'>
                <CustomFormLabel
                    htmlFor="lastName"
                    text="Apellido" />
                <CustomInput
                    id="lastName"
                    value={userData.lastName}
                    error={errors && errors["lastName"] && errors["lastName"].message}
                    onChange={onInputChange} />
            </FormControl>
            <FormControl mt='12px'>
                <CustomFormLabel
                    htmlFor="ci"
                    text="CI" />
                <CustomInput
                    id="ci"
                    value={userData.ci}
                    error={errors && errors["ci"] && errors["ci"].message}
                    onChange={onInputChange} />
            </FormControl>
            <FormControl mt='12px'>
                <CustomFormLabel
                    htmlFor="phone"
                    text="Teléfono" />
                <Flex>
                    <CustomInput
                        id="phone"
                        value={phone}
                        error={errors && errors["phone"] && errors["phone"].message}
                        onChange={onInputChange} />
                    <Button 
                        onClick={onAddPhone}
                        bg='black' 
                        color='white' 
                        minW='20px'
                        padding='0'
                        ml='6px'
                        _hover={{ bg: 'yellow.600' }}>
                            <PlusSquareIcon h='full' w='full' />
                    </Button>
                </Flex>
            </FormControl>
            <Flex flexDir='column' mt='12px' w='full'>
                {userData.phones.map(phone => 
                    <Flex w='auto'>
                        <Text mr='5px'>{phone}</Text>
                        <DeleteBtn 
                            isLoading={false} 
                            itemId={phone} 
                            onDelete={onRemovePhone} />
                    </Flex>
                )}
            </Flex>
            <FormControl mt='12px'>
                <CustomFormLabel
                    htmlFor="status"
                    text="Estado" />
                <CustomSelect
                    id="status"
                    value={userData.status}
                    options={statusOptions}
                    error={errors && errors["status"] && errors["status"].message}
                    onChange={onChangeStatus} />
            </FormControl>
            <FormControl mt='12px'>
                <CustomFormLabel
                    htmlFor="role"
                    text="Cargo" />
                <CustomSelect
                    id="role"
                    value={userData.role}
                    options={roleOptions}
                    error={errors && errors["role"] && errors["role"].message}
                    onChange={onChangeRole} />
            </FormControl>
        </Flex>
    )
}

export default UserForm