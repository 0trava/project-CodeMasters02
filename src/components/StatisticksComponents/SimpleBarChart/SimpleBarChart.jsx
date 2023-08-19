import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "To Do",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "In progress",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Done",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },

];

export const StatisticsPage = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}
