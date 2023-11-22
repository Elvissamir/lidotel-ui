import { ChangeEvent } from "react"
import { FormErrors } from "../../../core/form"
import { Guest } from "../../../core/guests/Guests.types"
import LidotelModal from "../LidotelModal"
import LidotelModalForm from "../LidotelModalForm"
import LidotelModalFormHeader from "../LidotelModalFormHeader"
import GuestForm from "./GuestForm"

interface GuestFormModalProps {
    mode: "add" | "edit"
    guestData: Guest
    phone: string
    errors: FormErrors
    isSavingChanges: boolean 
    show: boolean 
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStatus: (e: ChangeEvent<HTMLSelectElement>) => void
    onAddPhone: () => void
    onRemovePhone: (phone: string) => void
    onSave: () => void
    onClose: () => void
}

const GuestFormModal = ({ mode, show, isSavingChanges, guestData, phone, errors, onInputChange, onRemovePhone, onAddPhone, onChangeStatus, onClose, onSave }: GuestFormModalProps) => {
    return (
        <LidotelModal
            show={show}
            content={<LidotelModalForm
                header={<LidotelModalFormHeader 
                    actionBtnText={mode === 'add'? 'Crear' : "Guardar"}
                    actionText={mode === 'add'? "Agregar Huésped" : "Editar Huésped" }
                    isSavingChanges={isSavingChanges}
                    onClose={onClose}
                    onSave={onSave} />} 
                content={<GuestForm
                    mode={mode}
                    guestData={guestData}
                    errors={errors}
                    phone={phone}
                    onAddPhone={onAddPhone}
                    onChangeStatus={onChangeStatus}
                    onInputChange={onInputChange}
                    onRemovePhone={onRemovePhone}
                    onSave={onSave} />} 
                height='auto'
                width="512px" />}
            onClose={onClose}
        />
    )
}

export default GuestFormModal