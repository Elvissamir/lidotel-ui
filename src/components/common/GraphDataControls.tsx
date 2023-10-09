import { Card, Flex, FormControl, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"
import { ControlAction, GraphDataItem } from "../../core/interfaces/graphs"

interface GraphDataControlsProps {
    graphName: string
    data: GraphDataItem[]
    uvLabelColor?: string 
    pvLabelColor?: string
    height?: string
    onIncreaseData: (index: number, action: ControlAction, dataKey: string) => void
    onDecreaseData: (index: number, action: ControlAction, dataKey: string) => void
}

const GraphDataControls = ({ graphName, data, height, uvLabelColor, pvLabelColor, onIncreaseData, onDecreaseData }: GraphDataControlsProps) => {
    return (
        <Card flexDir='column' p='25px 30px' h={height? height : '420px'} w='300px'>
            <Heading size='md'>{ graphName } Controls</Heading>
            {data.map((item, index) =>
                <Flex flexDir='column' mt='10px' key={item.name}>
                    <Text fontFamily='Open sans' fontWeight='bolder'>{item.name}</Text>
                    <Flex justifyContent='space-between' w='full'>
                        {uvLabelColor &&  
                            <Flex w={pvLabelColor? '48%' : 'full'}>
                                <FormControl>
                                    <FormLabel color={uvLabelColor}>UV</FormLabel>
                                    <NumberInput defaultValue={15} min={10} max={20} value={item.uv}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper onClick={() => onIncreaseData(index, "increase", 'uv')} />
                                            <NumberDecrementStepper onClick={() => onDecreaseData(index, "decrease", 'uv')} />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            </Flex>}
                        {pvLabelColor &&  
                            <Flex w={uvLabelColor? '48%' : 'full'}>
                                <FormControl>
                                    <FormLabel color={pvLabelColor}>PV</FormLabel>
                                    <NumberInput defaultValue={15} min={10} max={20} value={item.pv}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper onClick={() => onIncreaseData(index, "increase", 'pv')} />
                                            <NumberDecrementStepper onClick={() => onDecreaseData(index, "decrease", 'pv')} />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            </Flex>}
                    </Flex>
                </Flex>
            )}
      </Card>
    )
}

export default GraphDataControls