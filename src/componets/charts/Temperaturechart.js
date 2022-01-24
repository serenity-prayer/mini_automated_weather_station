import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '10:20',
      temp: 40,
      hum: 2400,
      amt: 2400,
    },
    {
      name: '12:00',
      temp: -10,
      hum: 1398,
      amt: 2210,
    },
    {
      name: '13:30',
      temp: 29,
      hum: 9800,
      amt: 2290,
    },
    {
      name: '14:30',
      temp: 21,
      hum: 3908,
      amt: 2000,
    },
    {
      name: '15:00',
      temp: 18,
      hum: 4800,
      amt: 2181,
    },
    {
      name: '16:00',
      temp: 10,
      hum: 3800,
      amt: 2500,
    },
    {
      name: '17:00',
      temp: 29,
      hum: 4300,
      amt: 2100,
    },
  ];

function Temperaturechart() {
    return (
        <div>
            <h1>Temperature Graph</h1>
            <div className='graphs'>
                <ResponsiveContainer width="100%" aspect ={4/1}>
                    <LineChart data = {data}>
                        <XAxis dataKey="name" stroke ="#ffff"/>
                        <YAxis dataKey={data.temp} stroke ="#ffff"/>
                        <Line type="monotone" dataKey="temp" stroke ="#ffff" />
                        <Tooltip/>
                        <CartesianGrid dataKey={data.temp} stroke ="#22577E"/>
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>
    )
}
export default Temperaturechart;