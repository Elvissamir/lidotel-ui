import { ChangeEvent, useEffect, useState } from "react"
import { Guest, GuestStatus } from "../../core/guests/Guests.types"
import { FormDataFieldNames, GuestFormData, GuestFormMode, UseGuestFormProps } from "./useGuestForm.types"

const initialGuestData: Guest = {
    guestId: '',
    firstName: '',
    lastName: '',
    ci: '',
    address: {
        state: '',
        city: '',
        street: '',
        zoneCode: ''
    },
    phones: [],
    status: 'Active'
}

const fields: FormDataFieldNames = {
    firstName: "firstName",
    lastName: "lastName",
    ci: 'ci',
    phone: 'phone',
    status: 'status'
}

const getInitialData = (editGuestData?: Guest): GuestFormData => {
    const formData: GuestFormData = {
        guestData: {
            guestId: '',
            firstName: '',
            lastName: '',
            ci: '',
            address: {
                state: '',
                city: '',
                street: '',
                zoneCode: ''
            },
            phones: [],
            status: 'Active'
        },
        errors: {}
    }

    if (editGuestData) {
        formData.guestData = {
            guestId: editGuestData.guestId,
            firstName: editGuestData.firstName,
            lastName: editGuestData.lastName,
            ci: editGuestData.ci,
            address: {
                state: editGuestData.address.state,
                city: editGuestData.address.city,
                street: editGuestData.address.street,
                zoneCode: editGuestData.address.zoneCode
            },
            phones: editGuestData.phones.map(phone => phone),
            status: editGuestData.status
        }
    }

    return formData
}

const useGuestForm = ({ reset, mode, editGuestData }: UseGuestFormProps) => {
    const [formData, setFormData] = useState<GuestFormData>(getInitialData(editGuestData))
    const [phone, setPhone] = useState<string>("")
    const [formMode, setFormMode] = useState<GuestFormMode>(mode? mode : "add")
    const [isSavingChanges, setIsSavingChanges] = useState(false)

    const onChangeMode = (mode: GuestFormMode) => setFormMode(mode)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let nformData = {...formData}
        const inputId = e.target.id
        const value = e.target.value

        if (inputId === fields.phone)
            setPhone(value)
        else {
            nformData.guestData[inputId] = value
            setFormData(nformData)
        }
    }
    
    const onChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        const nformData = {...formData}

        const inputId = e.target.id
        const value = e.target.value

        if (inputId === fields.status)
            nformData.guestData.status = value as GuestStatus

        setFormData(nformData)
    }
    
    const onAddPhone = () => {
        if (phone !== '') {
            const nformData = {...formData}
    
            nformData.guestData.phones.push(phone)
    
            setPhone("")
            setFormData(nformData)
        }
    }

    const onRemovePhone = (phoneId: string) => {
        const nformData = {...formData}

        nformData.guestData.phones = nformData.guestData.phones.filter(phone => phone !== phoneId)

        setFormData(nformData)
    }

    const onAdd = () => {
        setIsSavingChanges(true)
    }

    const onEdit = () => {
        setIsSavingChanges(true)
    }

    useEffect(() => {
        if (reset && editGuestData) {
            console.log("reset")
            setFormData(getInitialData(editGuestData))
        }
    }, [ reset ])

    return {
        formData,
        phone,
        formMode,
        isSavingChanges,
        onChangeMode,
        onInputChange,
        onChangeStatus,
        onAddPhone,
        onRemovePhone,
        onAdd,
        onEdit
    }
}

export default useGuestForm