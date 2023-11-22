
import { ChangeEvent } from "react"
import { FormErrors } from "../../../core/form"
import { User } from "../../../core/users/User.types"
import LidotelModal from "../LidotelModal"
import LidotelModalForm from "../LidotelModalForm"
import LidotelModalFormHeader from "../LidotelModalFormHeader"
import UserForm from "./UserForm"

interface UserFormModalProps {
    mode: "add" | "edit"
    userData: User
    phone: string
    errors: FormErrors
    isSavingChanges: boolean 
    show: boolean 
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeRole: (e: ChangeEvent<HTMLSelectElement>) => void
    onChangeStatus: (e: ChangeEvent<HTMLSelectElement>) => void
    onAddPhone: () => void
    onRemovePhone: (phone: string) => void
    onSave: () => void
    onClose: () => void
}

const UserFormModal = ({ mode, show, isSavingChanges, userData, phone, errors, onInputChange, onChangeRole, onRemovePhone, onAddPhone, onChangeStatus, onClose, onSave }: UserFormModalProps) => {
    return (
        <LidotelModal
            show={show}
            content={<LidotelModalForm
                header={<LidotelModalFormHeader 
                    actionBtnText={mode === 'add'? 'Crear' : "Guardar"}
                    actionText={mode === 'add'? "Agregar Usuario" : "Editar Usuario" }
                    isSavingChanges={isSavingChanges}
                    onClose={onClose}
                    onSave={onSave} />} 
                content={<UserForm
                    mode={mode}
                    userData={userData}
                    errors={errors}
                    phone={phone}
                    onAddPhone={onAddPhone}
                    onChangeRole={onChangeRole}
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

export default UserFormModal