import { TableUser } from "../../core/interfaces/table"
import { ChangeEvent } from "react"
import { Flex,   
    FormControl,
    FormLabel,
    Input } from "@chakra-ui/react"

interface TableUserFormProps {
    userData: TableUser
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TableUserForm = ({ userData, onChange }: TableUserFormProps) => {
    return (
        <Flex flexDir='column'>
            <FormControl mt='10px'>
                <FormLabel>FirstName</FormLabel>
                <Input onChange={onChange} id='firstName' type='text' value={userData.firstName} />
            </FormControl>
            <FormControl mt='15px'>
                <FormLabel>LastName</FormLabel>
                <Input onChange={onChange} id='lastName' type='text' value={userData.lastName} />
            </FormControl>
            <FormControl mt='15px'>
                <FormLabel>Email</FormLabel>
                <Input onChange={onChange} id='email' type='email' value={userData.email} />
            </FormControl>
            <FormControl mt='15px'>
                <FormLabel>Country</FormLabel>
                <Input onChange={onChange} id='country' type='text' value={userData.country} />
            </FormControl>
            <FormControl mt='15px'>
                <FormLabel>Company</FormLabel>
                <Input onChange={onChange} id='company' type='text' value={userData.company} />
            </FormControl>
        </Flex>
    )
}

export default TableUserForm