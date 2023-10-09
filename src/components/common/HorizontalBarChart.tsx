import { Flex } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import useGraphDataControls from '../../hooks/useGraphDataControls';
import GraphDataControls from './GraphDataControls';

const graphData = [
    {
      name: 'First',
      uv: 100,
      amt: 2400,
    },
    {
      name: 'Third',
      uv: 80,
      amt: 40,
    },
    {
      name: 'Second',
      uv: 40,
      amt: 2290,
    },
];

const HorizontalBarChart = () => {
  const { data, handleDataChange } = useGraphDataControls({ graphData })

  return (
    <Flex h='400px' w='full'>
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
              width={500}
              height={300}
              data={data}
              layout='vertical'
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type='number' />
                  <YAxis type='category' dataKey='name' />
                  <Bar dataKey="uv" fill="#3D5EFC" />
          </BarChart>
      </ResponsiveContainer>

      <GraphDataControls
        graphName='Simple (Vertical)' 
        data={data}
        height='450px'
        uvLabelColor='#3D5EFC'
        onIncreaseData={handleDataChange}
        onDecreaseData={handleDataChange} />
    </Flex>
  )
}

export default HorizontalBarChart