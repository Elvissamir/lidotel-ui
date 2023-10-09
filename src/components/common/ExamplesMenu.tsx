import { Flex, Img, Link, Text } from "@chakra-ui/react"
import { AnimatePresence, motion } from 'framer-motion'
import routes from "../../core/routes"
import { Link as RouterLink } from 'react-router-dom'
import { AiOutlineTable } from 'react-icons/ai'
import { FaWpforms } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { ArrowForwardIcon, BellIcon, EmailIcon } from "@chakra-ui/icons"
import { useContext } from "react"
import { StarterAppContext } from "../../context/StarterAppContext"

interface MenuItem {
    name: string 
    route: string 
    icon: JSX.Element
}

const ExamplesMenu = () => {
    const starterConfig = useContext(StarterAppContext)

    const examplesMenuList: MenuItem[] = [
        { name: 'Tables', route: routes.tables.url, icon: <AiOutlineTable fontSize='40px' width='30px' color='#1C3DAA' />},
        { name: 'Forms', route: routes.forms.url, icon: <FaWpforms fontSize='40px' width='30px' color='#1C3DAA' /> },
        { name: 'Graphs', route: routes.graphs.url, icon: <GoGraph fontSize='40px' width='30px' color='#1C3DAA' /> },
        { name: 'Emails', route: routes.emails.url, icon: <EmailIcon fontSize='40px' width='30px' color='#1C3DAA' /> },
        { name: 'Notifications', route: routes.notifications.url, icon: <BellIcon fontSize='40px' width='30px' color='#1C3DAA' /> }
    ]

    const shouldShowEmailItem = (item: MenuItem) => {
        if (item.name === 'Emails') {
            if (starterConfig.showEmailPage) 
                return true 
            
            return false
        }

        return true
    }

    const shouldShowNotificationItem = (item: MenuItem) => {
        if (item.name === "Notifications") {
            if (starterConfig.showEmailPage) 
                return true 
            
            return false
        }

        return true
    }

    return (
        <Flex
            display='grid'
            gridTemplateColumns='repeat(5, 250px)'
            gap='20px'
            wrap='wrap'
            justifyContent='start'
            alignItems='start'
            w='full'>
                <AnimatePresence>
                    { examplesMenuList.filter(item => shouldShowEmailItem(item)).filter(item => shouldShowNotificationItem(item)).map((example, index) => 
                        <motion.div 
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: index * 0.5, type: 'spring', stiffness: 100 }}
                            key={example.name}
                            style={{ display: 'flex' }}>
                                 <Flex 
                                        bg='white'
                                        borderRadius='4px'
                                        border='1px' 
                                        borderColor='gray.300'
                                        flexDir='column'
                                        h='112px'
                                        w='242px'>
                                              <Link 
                                                    fontSize='14px'
                                                    display='flex'
                                                    flexDir='column'
                                                    as={RouterLink} 
                                                    to={example.route} 
                                                    textDecor='none'
                                                    padding='30px 14px 20px 14px'
                                                    h='full'
                                                    w='full'>
                                                        {typeof(example.icon) === 'string'? 
                                                            <Img src={`/assets/${example.icon}`} h='32px' w='32px' /> : 
                                                            example.icon}
                                                        <Flex mt='5px' color='blue.600' alignItems='center'>
                                                            <Text 
                                                                fontFamily='Poppins' 
                                                                fontWeight='400'
                                                                color='blue.600'>{example.name}</Text>
                                                            <ArrowForwardIcon color='blue.600' ml='10px' />
                                                        </Flex>
                                                </Link>
                                    </Flex>
                        </motion.div>)}
                </AnimatePresence>
        </Flex>
    )
}

export default ExamplesMenu