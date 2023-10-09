import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { Button, Card, Flex, FormControl, Heading, Text } from "@chakra-ui/react"
import { CustomFormLabel, CustomInput } from "lidotel-ui"
import useEmailForm from "../../hooks/useEmailForm"

const EmailsPageContent = () => {
    const {
        formData,
        isSendingEmail,
        isValidFormData,
        errors,
        onInputChange,
        onSendEmail,
        messageSent,
    } = useEmailForm()

    return (
        <>
            <Flex flexDirection='column' w='full'>
                <Flex flexDir='column' alignItems='baseline'>
                    <Heading>Send Email</Heading>
                    <Text mt='15px'>Send an example email</Text>
                </Flex>
                <Flex mt='50px'>
                    <form action="">
                        <Card borderRadius='4px' padding='25px' w='350px'>
                            <FormControl mt='16px'>
                                <CustomFormLabel
                                    htmlFor="to"
                                    text="To" />
                                <CustomInput
                                    id="to"
                                    disabled={isSendingEmail}
                                    value={formData.to}
                                    error={errors && errors["to"] && errors["to"].message}
                                    onChange={onInputChange} />
                            </FormControl>
                            <FormControl mt='16px'>
                                <CustomFormLabel
                                    htmlFor="from"
                                    text="From" />
                                <CustomInput
                                    id="from"
                                    disabled={isSendingEmail}
                                    value={formData.from}
                                    error={errors && errors["from"] && errors["from"].message}
                                    onChange={onInputChange} />
                            </FormControl>
                            <FormControl mt='16px'>
                                <CustomFormLabel
                                    htmlFor="message"
                                    text="Message" />
                                <CustomInput
                                    id="message"
                                    disabled={isSendingEmail}
                                    value={formData.message}
                                    error={errors && errors["message"] && errors["message"].message}
                                    onChange={onInputChange} />
                            </FormControl>
                            <Flex mt={messageSent.sent !== null?  "10px" : "0px"}> 
                                { messageSent.sent === true && <Text
                                    display='flex'
                                    alignItems='center'
                                    fontFamily='Open sans'
                                    fontSize='14px'>
                                    <CheckIcon 
                                        bg="blue.700"
                                        borderRadius='full'
                                        color='white' 
                                        padding='3px'
                                        mr='5px' />
                                    { messageSent.message }
                                </Text> }
                                { messageSent.sent === false && <Text
                                    display='flex'
                                    alignItems='center'
                                    fontFamily='Open sans'
                                    fontSize='14px'>
                                        <CloseIcon 
                                            borderRadius='full'
                                            bg="red.500"
                                            color='white'
                                            padding='3px' 
                                            mr='5px' />
                                        { messageSent.message }
                                </Text> }
                            </Flex>
                            <Button
                                onClick={onSendEmail}
                                isLoading={isSendingEmail}
                                isDisabled={!isValidFormData()}
                                mt={messageSent.sent === true || messageSent.sent === false? "12px" : "25px"}
                                h='30px'
                                variant='primaryBlue600'>
                                    Send
                            </Button>
                        </Card>
                    </form>
                </Flex>
            </Flex>
        </>
    )
}

export default EmailsPageContent