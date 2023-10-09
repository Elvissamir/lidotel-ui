import { useState, ChangeEvent } from 'react'
import { FormControl, FormLabel, Input, Button, Card, FormErrorMessage } from "@chakra-ui/react";

interface ExampleUser {
    firstName: string 
    lastName: string 
    email: string
}

interface FieldError {
    [key: string]: string
}

const FormsPageContent = () => {
    const [ user, setUser ] = useState<ExampleUser>({ firstName: '', lastName: '', email: '' })
    const [errors, setErrors] = useState<FieldError | null>(null)
    const [isSending, setIsSending] = useState(false)

    const validateData = () => {
        const validFname = validateName('firstName', user.firstName)
        const validLname = validateName('lastName', user.lastName)
        const validEmail = validateEmail('email', user.email)

        if (validFname || validLname || validEmail)
            return false

        return true
    }

    const validateName = (field: string, data: string) => {
        if (data.length < 2)
            return `The ${field} should have more than 2 letters`

        if (data.length > 15)
            return `The ${field} should have less than 15 letters`

        return null
    }

    const validateEmail = (field: string, data: string) => {
        if (!data.includes('@') || !data.includes('.'))
            return `The ${field} must be valid`

        return null
    }

    const validateField = (field: string, data: string) => {
        if (field === 'firstName' || field === 'lastName') 
            return validateName(field, data)
        
        return validateEmail(field, data)
    }

    const manageError = (field: string, value: string) => {
        const error = validateField(field, value)
        let nerrors: FieldError | null = {...errors}

        if (error)
            nerrors[field] = error
        else
            delete nerrors[field]

        if (Object.keys(nerrors).length === 0)
            nerrors = null

        return nerrors
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nuser = {...user}

        if (e.target.id === 'firstName')
            nuser.firstName = e.target.value
        else if (e.target.id === 'lastName')
            nuser.lastName = e.target.value
        else
            nuser.email = e.target.value

        const nerrors: FieldError | null = manageError(e.target.id, e.target.value)
        setErrors(nerrors)
        setUser(nuser)
    }

    return (
        <Card flexDir='column' w='350px' padding='30px' mr='auto' mt='30px'>
            <FormControl mt='10px' isInvalid={errors && errors["firstName"]? true : false}>
                <FormLabel htmlFor='firstName'>FirstName</FormLabel>
                <Input size='sm' onChange={handleChange} id='firstName' type='text' value={user.firstName} />
                <FormErrorMessage>{errors && errors['firstName']}</FormErrorMessage>
            </FormControl>
            <FormControl mt='15px' isInvalid={errors && errors["lastName"]? true : false}>
                <FormLabel htmlFor='lastName'>LastName</FormLabel>
                <Input size='sm' onChange={handleChange} id='lastName' type='text' value={user.lastName} />
                <FormErrorMessage>{errors && errors['lastName']}</FormErrorMessage>
            </FormControl>
            <FormControl mt='15px' isInvalid={errors && errors["email"]? true : false}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input size='sm' onChange={handleChange} id='email' type='email' value={user.email} />
                <FormErrorMessage>{ errors&& errors['email']}</FormErrorMessage>
            </FormControl>
            <Button 
                onClick={() => setIsSending(true)}
                isDisabled={!validateData()} 
                isLoading={isSending}
                mt='30px' 
                variant='primaryBlue600'
                size='md'>Send</Button>
        </Card>
    )
}

export default FormsPageContent