import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { Button, Card, Flex, FormControl, Heading, Text } from "@chakra-ui/react"
import { CustomFormLabel, CustomInput, CustomSwitch } from "lidotel-ui"
import useNotificationsForm from "../../hooks/useNotificationsForm"

const NotificationsPageContent = () => {
    const {
        formData,
        isSendingNotification,
        isValidFormData,
        errors,
        mode,
        onChangeMode,
        onInputChange,
        onSendEmail,
        messageSent,
    } = useNotificationsForm()

    return (
        <>
            <Flex flexDirection='column' w='full'>
                <Flex flexDir='column' alignItems='baseline'>
                    <Heading>Send Notification</Heading>
                    <Text mt='15px'>Send notifications</Text>
                </Flex>
                <Flex mt='50px'>
                    <form action="">
                        <Card borderRadius='4px' padding='25px' w='350px'>
                            <Flex flexDir='column'>
                                <Flex w='full'>
                                    <CustomSwitch
                                        isChecked={mode === 'Lidotel'}
                                        onCheck={() => onChangeMode("Lidotel")} />
                                    <Text fontFamily='Open sans' fontSize='12px' ml='10px'>From The Exchange</Text>
                                </Flex>
                                <Flex w='full' mt='5px'>
                                    <CustomSwitch
                                        isChecked={mode === 'application'}
                                        onCheck={() => onChangeMode("application")} />
                                    <Text fontFamily='Open sans' fontSize='12px' ml='10px'>From Application</Text>
                                </Flex>
                                <Flex w='full' mt='5px'>
                                    <CustomSwitch
                                        isChecked={mode === 'user'}
                                        onCheck={() => onChangeMode("user")} />
                                    <Text fontFamily='Open sans' fontSize='12px' ml='10px'>From User Action</Text>
                                </Flex>
                            </Flex>
                            <FormControl mt='16px'>
                                <CustomFormLabel
                                    htmlFor="to"
                                    text="To" />
                                <CustomInput
                                    id="to"
                                    disabled={isSendingNotification}
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
                                    disabled={isSendingNotification || mode === 'Lidotel'}
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
                                    disabled={isSendingNotification}
                                    value={formData.message}
                                    error={errors && errors["message"] && errors["message"].message}
                                    onChange={onInputChange} />
                            </FormControl>
                            {formData.createdByUser && mode === 'user' && <>
                                <Text fontFamily='Open sans' fontWeight='600' mt='22px'>Created By User</Text>
                                <FormControl mt='0px'>
                                    <CustomFormLabel
                                        htmlFor="firstName"
                                        text="First Name" />
                                    <CustomInput
                                        id="firstName"
                                        disabled={isSendingNotification}
                                        value={formData.createdByUser.firstName}
                                        error={errors && errors["firstName"] && errors["firstName"].message}
                                        onChange={onInputChange} />
                                </FormControl>
                                <FormControl mt='16px'>
                                    <CustomFormLabel
                                        htmlFor="lastName"
                                        text="Last Name" />
                                    <CustomInput
                                        id="lastName"
                                        disabled={isSendingNotification}
                                        value={formData.createdByUser.lastName}
                                        error={errors && errors["lastName"] && errors["lastName"].message}
                                        onChange={onInputChange} />
                                </FormControl>
                            </>}
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
                                isLoading={isSendingNotification}
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

export default NotificationsPageContent