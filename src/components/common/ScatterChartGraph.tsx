import { Button, Card, Flex, FormControl, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import { useState } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ControlAction } from '../../core/interfaces/graphs';

const graphData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

const ScatterChartGraph = () => {
  const [ data, setData ] = useState([...graphData])
  const [ point, setPoint ] = useState({ x: 0, y: 0, z: 0 })
  
  const addPoint = () => {
    const ndata = [...data]
    ndata.push(point)
    
    setPoint({ x: 0, y: 0, z: 0 })
    setData(ndata)
  }

  const handlePointChange = (coor: string, action: ControlAction) => {
    const npoint = {...point}

    if (action === 'increase') 
      npoint[coor] += 1
    else 
      npoint[coor] -=1 
    
    setPoint(npoint)
  }

  return (
    <Flex w='full'>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Weights" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>

      <Card ml='30px' p='20px' h='420px' w='350px'>
        <Heading>Scatter Chart</Heading>
        <FormControl mt='20px'>
          <FormLabel>X</FormLabel>
          <NumberInput defaultValue={15} min={10} max={20} value={point.x}>
              <NumberInputField />
              <NumberInputStepper>
                  <NumberIncrementStepper onClick={() => handlePointChange('x', "increase")} />
                  <NumberDecrementStepper onClick={() => handlePointChange('x', "decrease")} />
              </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl mt='20px'>
          <FormLabel>Y</FormLabel>
          <NumberInput defaultValue={15} min={10} max={20} value={point.y}>
              <NumberInputField />
              <NumberInputStepper>
                  <NumberIncrementStepper onClick={() => handlePointChange('y', "increase")} />
                  <NumberDecrementStepper onClick={() => handlePointChange('y', "decrease")} />
              </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl mt='20px'>
          <FormLabel>Z</FormLabel>
          <NumberInput defaultValue={15} min={10} max={20} value={point.z}>
              <NumberInputField />
              <NumberInputStepper>
                  <NumberIncrementStepper onClick={() => handlePointChange('z', "increase")} />
                  <NumberDecrementStepper onClick={() => handlePointChange('z', "decrease")} />
              </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Button onClick={addPoint} mt='30px' variant='primaryBlue600' size='md'>Add</Button>
      </Card>
    </Flex>
  );
}

export default ScatterChartGraph