import React from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";

const data = [
{
	name: "Work",
	l1: 4500,
	l2: 2400,
	amt: 2400,
},
{
	name: "STUDY",
	l1: 3000,
	l2: 1398,
	amt: 2210,
},
{
	name: "PLAY",
	l1: 2000,
	l2: 9800,
	amt: 2290,
},
{
	name: "TASK",
	l1: 2780,
	l2: 3908,
	amt: 2000,
},
];

export default function Charts() {
return (
	<div style={{ width: "1100px",
				height: "600px",
				backgroundColor: "black" }}>
	<ResponsiveContainer width="100%"
						height="100%">
		<LineChart
		width={500}
		height={300}
		data={data}
		margin={{
			top: 5,
			right: 30,
			left: 80,
			bottom: 5,
		}}
		>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="name" />
		<YAxis />
		<Tooltip />
		<Legend />
		<Line
			type="monotone"
			dataKey="l2"
			stroke="#8884d8"
			activeDot={{ r: 8 }}
		/>
		<Line type="monotone"
				dataKey="l1"
				stroke="#82ca9d" />
		</LineChart>
	</ResponsiveContainer>
	</div>
);
}


