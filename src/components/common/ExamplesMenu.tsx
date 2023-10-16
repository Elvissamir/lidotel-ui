import { Flex, Link, Text } from "@chakra-ui/react"
import { AnimatePresence, motion } from 'framer-motion'
import routes from "../../core/routes"
import { Link as RouterLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa"
import { TbDoor } from "react-icons/tb"
import { BiSolidUserPin } from 'react-icons/bi'
import { MdDeliveryDining } from 'react-icons/md'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useContext, useState } from "react"
import { StarterAppContext } from "../../context/StarterAppContext"

interface MenuItem {
    name: string 
    route: string 
    icon: JSX.Element
}

const ExamplesMenu = () => {
    const starterConfig = useContext(StarterAppContext)
    const [currentItem, setCurrentItem] = useState<number | null>(null)

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

    const onHover = (index: number | null) => {
        console.log('hover index', index)
        setCurrentItem(index)
    }

    const examplesMenuList: MenuItem[] = [
        { name: 'Usuarios', route: routes.users.url, icon: <FaUser fontSize='50px' width='50px' color={currentItem === 0? "yellow.600" : "black"} />},
        { name: 'Huespedes', route: routes.hosts.url, icon: <BiSolidUserPin fontSize='50px' width='50px' color={currentItem === 0? "yellow.600" : "black"} /> },
        { name: 'Habitaciones', route: routes.rooms.url, icon: <TbDoor fontSize='50px' width='50px' color={currentItem === 0? "yellow.600" : "black"} /> },
        { name: 'Delivery', route: routes.delivery.url, icon: <MdDeliveryDining fontSize='50px' width='50px' color={currentItem === 0? "yellow.600" : "black"} /> },
    ]

    return (
        <Flex
            display='grid'
            gridTemplateColumns='repeat(4, 340px)'
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
                                    h='180px'
                                    w='340px'
                                    _hover={{ borderColor: 'yellow.600' }}>
                                        <Link 
                                            fontSize='14px'
                                            display='flex'
                                            flexDir='column'
                                            color='yellow.700'
                                            as={RouterLink} 
                                            to={example.route}
                                            textDecor='none'
                                            padding='30px 14px 20px 14px'
                                            h='full'
                                            w='full'
                                            onMouseEnter={() => onHover(index)}
                                            onMouseLeave={() => onHover(null)}
                                            _hover={{
                                                "& p": { color: 'yellow.600' },
                                                "& span": { color: "yellow.600" }
                                            }}>
                                                <Flex>
                                                    { example.name === "Usuarios" && <FaUser fontSize='50px' width='50px' color={currentItem === 0? "#be8101" : 'black'} /> }
                                                    { example.name === 'Huespedes' && <BiSolidUserPin fontSize='50px' width='50px' color={currentItem === 1? "#be8101" : "black"} />}
                                                    { example.name === 'Habitaciones' && <TbDoor fontSize='50px' width='50px' color={currentItem === 2? "#be8101" : "black"} /> }
                                                    { example.name === 'Delivery' && <MdDeliveryDining fontSize='50px' width='50px' color={currentItem === 3? "#be8101" : "black"} /> }
                                                </Flex>
                                                <Flex mt='5px' alignItems='center'>
                                                    <Text 
                                                        fontFamily='Poppins' 
                                                        fontWeight='400'>{example.name}</Text>
                                                    <ArrowForwardIcon 
                                                        color={index === currentItem? 'yellow.600' : "gray.700"} 
                                                        ml='10px' />
                                                </Flex>
                                        </Link>
                                </Flex>
                        </motion.div>)}
                </AnimatePresence>
        </Flex>
    )
}

export default ExamplesMenu