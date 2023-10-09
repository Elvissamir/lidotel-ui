import { useState } from 'react'
import { Flex } from '@chakra-ui/react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { ControlAction } from '../../core/interfaces/graphs';
import useGraphDataControls from '../../hooks/useGraphDataControls';
import GraphDataControls from './GraphDataControls';

const graphData = [
    { name: 'Group A', uv: 10, fill: '#C2E5F0', amt: 50 },
    { name: 'Group B', uv: 40, fill: '#3D5EFC', amt: 100 },
    { name: 'Group C', uv: 40, fill: '#001C66', amt: 100 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, uv }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${uv}%`}
        </text>
    );
};

const PieChartGraph = () => {
   const { data, handleDataChange } = useGraphDataControls({ graphData })

    return (
        <Flex h='600px' w='full'> 
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={300} height={300}>
                    <Legend 
                        margin={{ left: 100 }}
                        layout="vertical" 
                        verticalAlign="middle" 
                        align='right' />
                    <Pie
                        dataKey="uv"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        innerRadius={100}
                        fill='blue'
                        labelLine={false}
                        label={renderCustomizedLabel} />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            <Flex ml='30px'>
                <GraphDataControls
                    graphName='Pie Chart'
                    data={data}
                    uvLabelColor='black'
                    onIncreaseData={handleDataChange}
                    onDecreaseData={handleDataChange} />
            </Flex>
        </Flex>
    )
}

export default PieChartGraph