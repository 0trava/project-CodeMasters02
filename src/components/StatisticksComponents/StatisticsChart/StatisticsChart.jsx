import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  LabelList,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import './StatisticsChart.css';

/*
const data2 = [
  {
    name: 'To Do',
    day: 35,
    month: 30,
  },
  {
    name: 'In Progress',
    day: 20,
    month: 30,
  },
  {
    name: 'Done',
    day: 45,
    month: 40,
  },
];

const dataWithPercentageSymbol = data2.map(entry => ({
  ...entry,
  dayPercentage: `${entry.day}%`,
  monthPercentage: `${entry.month}%`,
}));
*/

export const StatisticsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 60,
          right: 30,
          left: 64,
          bottom: 0,
        }}
        barCategoryGap={170}
        barGap={14}
        
      >
        <defs>
          <linearGradient id="dayGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 210, 221, 0)" />
            <stop offset="96.87%" stopColor="rgba(255, 210, 221, 1)" />
          </linearGradient>

          <linearGradient id="monthGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(62, 133, 243, 0)" />
            <stop offset="100%" stopColor="rgba(62, 133, 243, 1)" />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          fontSize={14}
          fontWeight={400}
          stroke={'var(--text-color)'}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          tickCount={6}
          fontSize={14}
          fontWeight={400}
          stroke={'var(--text-color)'}
          axisLine={false}
          tickLine={false}
          tickMargin={64}
        >
          <Label
            position="top"
            dy={-40}
            dx={-45}
            fontSize={14}
            fontWeight={600}
            fill="#343434"
          >
            Tasks
          </Label>
        </YAxis>
        <Tooltip />
        <Bar
          name="By Day"
          dataKey="day"
          fill="url(#dayGradient)"
          barSize={27}
          radius={8}
        >
          <LabelList
            dataKey="dayPercentage"
            position="top"
            fontSize={14}
            fontWeight={400}
            fontFamily={"Inter"}
            textDecoration={"none"}
            
            stroke={'var(--text-color)'}
          />
        </Bar>
        <Bar dataKey="month" fill="url(#monthGradient)" barSize={27} radius={8}>
          <LabelList
            dataKey="monthPercentage"
            position="top"
            fontFamily='Inter'
            fontSize={14}
            fontWeight={400}
            stroke={'var(--text-color)'}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
