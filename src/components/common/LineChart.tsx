import { Flex } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useGraphDataControls from '../../hooks/useGraphDataControls';
import GraphDataControls from './GraphDataControls';

const graphData = [
    {
      name: 'A',
      uv: 4,
      pv: 2,
      amt: 2400,
    },
    {
      name: 'B',
      uv: 3,
      pv: 1,
      amt: 2210,
    },
    {
      name: 'C',
      uv: 2,
      pv: 9,
      amt: 2290,
    },
    {
      name: 'D',
      uv: 2,
      pv: 3,
      amt: 2000,
    },
  ];

const LineChartGraph = () => {
  const { data, handleDataChange } = useGraphDataControls({ graphData })

    return (
      <Flex h='600px' w='full'>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="blue" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="orange" />
            </LineChart>
        </ResponsiveContainer> 
        <Flex ml='30px'>
          <GraphDataControls 
            graphName='Line Chart'
            data={data}
            height='510px'
            pvLabelColor='blue'
            uvLabelColor='orange'
            onIncreaseData={handleDataChange}
            onDecreaseData={handleDataChange} />
        </Flex>
      </Flex>
    )
}

export default LineChartGraph