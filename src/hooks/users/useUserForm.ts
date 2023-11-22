import { ChangeEvent, useEffect, useState } from "react"
import { User, UserRole, UserStatus } from "../../core/users/User.types"
import { FormDataFieldNames, UserFormData, UserFormMode, UseUserFormProps } from "./useUserForm.types"

const initialUserData: User = {
    userId: '',
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
    status: 'Active',
    role: 'Staff'
}

const fields: FormDataFieldNames = {
    firstName: "firstName",
    lastName: "lastName",
    ci: 'ci',
    phone: 'phone',
    status: 'status',
    role: 'role'
}

const getInitialData = (editUserData?: User): UserFormData => {
    const formData: UserFormData = {
        userData: {
            userId: '',
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
            status: 'Active',
            role: 'Staff'
        },
        errors: {}
    }

    if (editUserData) {
        formData.userData = {
            userId: editUserData.userId,
            firstName: editUserData.firstName,
            lastName: editUserData.lastName,
            ci: editUserData.ci,
            address: {
                state: editUserData.address.state,
                city: editUserData.address.city,
                street: editUserData.address.street,
                zoneCode: editUserData.address.zoneCode
            },
            phones: editUserData.phones.map(phone => phone),
            status: editUserData.status,
            role: editUserData.role
        }
    }

    return formData
}

const useUserForm = ({ reset, mode, editUserData }: UseUserFormProps) => {
    const [formData, setFormData] = useState<UserFormData>(getInitialData(editUserData))
    const [phone, setPhone] = useState<string>("")
    const [formMode, setFormMode] = useState<UserFormMode>(mode? mode : "add")
    const [isSavingChanges, setIsSavingChanges] = useState(false)

    const onChangeMode = (mode: UserFormMode) => setFormMode(mode)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let nformData = {...formData}
        const inputId = e.target.id
        const value = e.target.value

        if (inputId === fields.phone)
            setPhone(value)
        else {
            nformData.userData[inputId] = value
            setFormData(nformData)
        }
    }

    const onChangeRole = (e: ChangeEvent<HTMLSelectElement>) => {
        let nformData = {...formData}

        const inputId = e.target.id
        const value = e.target.value

        if (inputId === fields.role)
            nformData.userData.role = value as UserRole

        setFormData(nformData)
    }
    
    const onChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        const nformData = {...formData}

        const inputId = e.target.id
        const value = e.target.value

        if (inputId === fields.status)
            nformData.userData.status = value as UserStatus

        setFormData(nformData)
    }
    
    const onAddPhone = () => {
        if (phone !== '') {
            const nformData = {...formData}
    
            nformData.userData.phones.push(phone)
    
            setPhone("")
            setFormData(nformData)
        }
    }

    const onRemovePhone = (phoneId: string) => {
        const nformData = {...formData}

        nformData.userData.phones = nformData.userData.phones.filter(phone => phone !== phoneId)

        setFormData(nformData)
    }

    const onAdd = () => {
        setIsSavingChanges(true)
    }

    const onEdit = () => {
        setIsSavingChanges(true)
    }

    useEffect(() => {
        if (reset && editUserData) {
            console.log("reset")
            setFormData(getInitialData(editUserData))
        }
    }, [ reset ])

    return {
        formData,
        phone,
        formMode,
        isSavingChanges,
        onChangeMode,
        onInputChange,
        onChangeRole,
        onChangeStatus,
        onAddPhone,
        onRemovePhone,
        onAdd,
        onEdit
    }
}

export default useUserForm