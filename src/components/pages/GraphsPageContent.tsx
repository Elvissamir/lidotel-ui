import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import HorizontalBarChart from "../common/HorizontalBarChart"
import LineChart from "../common/LineChart"
import PieChartGraph from "../common/PieChartGraph"
import ScatterChartGraph from "../common/ScatterChartGraph"
import SimpleBarChart from "../common/SimpleBarChart"
import StackedBarChart from "../common/StackedBarChart"

const GraphsPageContent = () => {
    return (
         <Flex flexDir='column' mt='30px' height='auto' w='full'>
            <Tabs w='full'>
                <TabList>
                    <Tab 
                        fontFamily='Open sans'
                        fontWeight='bold'>Simple Bar Chart</Tab>
                    <Tab  
                        fontFamily='Open sans'
                        fontWeight='bold'>Simple Bar Chart (Vertical)</Tab>
                    <Tab
                        fontFamily='Open sans'
                        fontWeight='bold'>Stacked Bar Chart</Tab>
                    <Tab
                        fontFamily='Open sans'
                        fontWeight='bold'>Line Chart</Tab>
                    <Tab
                        fontFamily='Open sans'
                        fontWeight='bold'>Pie Chart</Tab>
                    <Tab
                        fontFamily='Open sans'
                        fontWeight='bold'>Scatter Chart</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Heading color='blue.600' size='md' mb='20px'>Simple Bar Chart</Heading>
                        <Flex h='600px' w='full'> 
                            <SimpleBarChart />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Heading color='blue.600' size='md' mb='20px'>Simple Bar Chart (Vertical)</Heading>
                        <Flex h='500px' w='full'>
                            <HorizontalBarChart />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Heading color='blue.600' size='md' mb='20px'>Stacked Bar Chart</Heading>
                        <StackedBarChart />
                    </TabPanel>
                    <TabPanel>
                        <Heading color='blue.600' size='md' mb='20px'>Line Chart</Heading>
                        <LineChart />
                    </TabPanel>
                    <TabPanel>
                        <Heading color='blue.600' size='md' mb='20px'>Pie Chart</Heading>
                        <Flex position='relative' h='500px' w='850px'>
                            <Flex 
                                flexDir='column' 
                                justifyContent='center' 
                                alignItems='center' 
                                position='absolute' 
                                top='calc(50% + 20px)' 
                                left='calc(50% - 260px)'
                                h='50px'
                                w='100px'>
                                    <Text fontFamily='Poppins' fontWeight='bold' fontSize='20px' color='blue.900'>25K</Text>
                                    <Text fontFamily='Open sans' size='sm'>Students</Text>
                            </Flex>
                            <PieChartGraph />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Heading color='blue.600' size='md' mb='20px'>Scatter Chart</Heading>
                        <Flex w='800px'>
                            <ScatterChartGraph />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default GraphsPageContent