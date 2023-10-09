import { Flex } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

const SimpleBarChart = () => {
  const { data, handleDataChange } = useGraphDataControls({ graphData })

  return (
      <Flex h='500px' w='full'>
        <Flex w='600px'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#3D5EFC" />
                <Bar dataKey="uv" fill="#001c66" />
            </BarChart>
          </ResponsiveContainer>

        </Flex>

        <GraphDataControls
          graphName='Simple Chart'
          data={data}
          height='500px'
          pvLabelColor='#3D5EFC'
          uvLabelColor='#001c66'
          onDecreaseData={handleDataChange}
          onIncreaseData={handleDataChange} />
      </Flex>
  )
}

export default SimpleBarChart