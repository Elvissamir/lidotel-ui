import { PlusSquareIcon } from "@chakra-ui/icons"
import { Button, Flex, FormControl, Text } from "@chakra-ui/react"
import { CustomFormLabel, CustomInput, CustomSelect } from "lidotel-ui"
import { ChangeEvent } from "react"
import { FormErrors } from "../../../core/form"
import { Guest, GuestStatus } from "../../../core/guests/Guests.types"
import DeleteBtn from "../DeleteBtn"

interface StatusOption {
    value: GuestStatus
    text: string
}

interface GuestFormProps {
    mode: "add" | "edit"
    guestData: Guest
    phone: string
    errors: FormErrors
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStatus: (e: ChangeEvent<HTMLSelectElement>) => void
    onAddPhone: () => void
    onRemovePhone: (phone: string) => void
    onSave: () => void
}

const GuestForm = ({ guestData, phone, errors, onInputChange, onChangeStatus, onAddPhone, onRemovePhone }: GuestFormProps) => {
    const statusOptions: StatusOption[] = [
        { text: "Activo", value: "Active" },
        { text: "Desconocido", value: "Unknown" },
        { text: "Inactivo", value: "Inactive" }
    ]

    return (
        <Flex flexDir='column' w='full'>
            <FormControl>
                <CustomFormLabel
                    htmlFor="firstName"
                    text="Nombre" />
                <CustomInput
                    id="firstName"
                    value={guestData.firstName}
                    error={errors && errors["firstName"] && errors["firstName"].message}
                    onChange={onInputChange} />
            </FormControl>
            <FormControl mt='12px'>
                <CustomFormLabel
                    htmlFor="lastName"
                    text="Apellido" />
                <CustomInput
                    id="lastName"
                    value={guestData.lastName}
                    error={errors && errors["lastName"] && errors["lastName"].message}
                    onChange={onInputChange} />
            </FormControl>
            <FormControl mt='12px'>
                <CustomFormLabel
                    htmlFor="ci"
                    text="CI" />
                <CustomInput
                    id="ci"
                    value={guestData.ci}
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
                {guestData.phones.map(phone => 
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
                    value={guestData.status}
                    options={statusOptions}
                    error={errors && errors["status"] && errors["status"].message}
                    onChange={onChangeStatus} />
            </FormControl>
        </Flex>
    )
}

export default GuestForm