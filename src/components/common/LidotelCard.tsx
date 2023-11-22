import { Card } from "@chakra-ui/react"

interface LidotelCardProps {
    children: JSX.Element
    h: string 
    w: string 
}

const LidotelCard = ({ children, h, w }: LidotelCardProps) => {
    return (
        <Card 
            border='1px'
            borderColor='white'
            boxShadow='lg'
            padding='20px'
            h={h}
            w={w}
            _hover={{ borderColor: 'yellow.600' }}
            _notFirst={{ ml: '20px' }}>
                { children }
        </Card>
    )
}   

export default LidotelCard