import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Guest } from "../../../core/guests/Guests.types"
import useGuestForm from "../../../hooks/guests/useGuestForm"
import DeleteBtn from "../DeleteBtn"
import TabHeading from "../tabs/TabHeading"
import GuestFormModal from "./GuestFormModal"
import GuestStatusTag from "./GuestStatusTag"

interface GuestDetailsTabContentProps {
    guest: Guest
}

const GuestDetailsTabContent = ({ guest }: GuestDetailsTabContentProps) => {
    const [showEditGuestModal, setShowEditGuestModal] = useState(false)
    const onShowEditForm = () => setShowEditGuestModal(true)
    const onCloseEditForm = () => setShowEditGuestModal(false)

    const {
        formData,
        phone,
        formMode,
        onInputChange,
        onChangeStatus,
        onAddPhone,
        onRemovePhone,
        onEdit
    } = useGuestForm({ 
        mode: "edit",
        editGuestData: guest, 
        reset: showEditGuestModal 
    })

    return (
        <Flex>
            <Flex borderRadius='4px' flexDir='column' w='full'>
                <TabHeading text="Detalles" />
                <Flex flexDir='column'>
                    <Text fontWeight='700'>CI: </Text>
                    <Text>{guest.ci}</Text>
                    <Text fontWeight='700' mt='10px'>Teléfonos:</Text>
                    <Flex>
                        {guest.phones.map(phone => 
                            <Text>{phone}</Text>    
                        )}
                    </Flex>
                    <Text fontWeight='700' mt='10px'>
                        Dirección: 
                    </Text>
                    <Text>
                        {`${guest.address.state} ${guest.address.city} ${guest.address.street} ${guest.address.zoneCode}`}
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
                <GuestFormModal
                    mode={formMode}
                    guestData={formData.guestData}
                    errors={formData.errors}
                    phone={phone}
                    isSavingChanges={false}
                    show={showEditGuestModal}
                    onClose={onCloseEditForm}
                    onAddPhone={onAddPhone}
                    onChangeStatus={onChangeStatus}
                    onInputChange={onInputChange}
                    onRemovePhone={onRemovePhone}
                    onSave={onEdit} />
            </Flex>
        </Flex>
    )
}

export default GuestDetailsTabContent