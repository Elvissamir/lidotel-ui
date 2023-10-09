import { Flex } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GraphDataItem } from '../../core/interfaces/graphs';
import useGraphDataControls from '../../hooks/useGraphDataControls';
import GraphDataControls from './GraphDataControls';

const graphData: GraphDataItem[] = [
  {
    name: 'Page A',
    uv: 5,
    pv: 10,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 10,
    pv: 5,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 10,
    pv: 2,
    amt: 2290,
  }
];

const StackedBarChart = () => {
 const { data, handleDataChange } = useGraphDataControls({ graphData })

  return (
    <Flex h='500px' w='full'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          layout='vertical'
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type='number' />
          <YAxis dataKey="name" type='category' />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#FF8F6C" />
          <Bar dataKey="uv" stackId="a" fill="#3D5EFC" />
        </BarChart>
      </ResponsiveContainer>

      <GraphDataControls 
        graphName='Stacked Chart'
        data={data}
        pvLabelColor='#FF8F6C'
        uvLabelColor='#3D5EFC'
        onIncreaseData={handleDataChange} 
        onDecreaseData={handleDataChange} />
    </Flex>
  );
}

export default StackedBarChart