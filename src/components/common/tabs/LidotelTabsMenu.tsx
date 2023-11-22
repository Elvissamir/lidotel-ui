import { useState } from 'react'
import { Tabs, TabList, Tab, TabIndicator, TabPanel, TabPanels } from "@chakra-ui/react"
import TabContentWrapper from './TabsContentWrapper'

interface LidotelTabsMenuProps {
    tabsList: string[]
    children: JSX.Element[]
    initialIndex?: number
    contentMt?: string 
    includeWrapper?: boolean
}

const LidotelTabsMenu = ({ children, tabsList, initialIndex, contentMt, includeWrapper }: LidotelTabsMenuProps) => {
    const [index, setIndex] = useState(initialIndex? initialIndex : 0)

    return (
        <Tabs 
            isLazy
            index={index}
            onChange={(nindex) => setIndex(nindex)}
            position="relative" 
            variant="unstyled" 
            w='full'>
                <TabList>
                    {tabsList.map(tab => 
                        <Tab 
                            key={tab}
                            fontFamily='Open sans'
                            fontWeight='bold'
                            padding='0'
                            _selected={{ color: '#ac8000' }}
                            _notFirst={{ ml: '32px' }}>{tab}</Tab>
                    )}
                </TabList>
                <TabIndicator
                    mt="5px"
                    height="2px"
                    bg="#ac8000"
                    borderRadius="1px" />
                <TabPanels padding='0'>
                    {children.map((child, index) => 
                        <TabPanel mt={contentMt? contentMt : '45px'} padding='0' key={index} w='full'>
                            {includeWrapper === false? 
                              child  : 
                                <TabContentWrapper>
                                    {child}
                                </TabContentWrapper> }
                        </TabPanel>
                    )}
                </TabPanels>
        </Tabs>
    )
}

export default LidotelTabsMenu