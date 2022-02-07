import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '10:20',
      temp: 40,
      hum: 2400,
      prain: 400,
    },
    {
      name: '12:00',
      temp: -10,
      hum: 1398,
      rain: 10,
    },
    {
      name: '13:30',
      temp: 29,
      hum: 9800,
      rain: 290,
    },
    {
      name: '14:30',
      temp: 21,
      hum: 3908,
      rain: 200,
    },
    {
      name: '15:00',
      temp: 18,
      hum: 4800,
      rain: 181,
    },
    {
      name: '16:00',
      temp: 10,
      hum: 3800,
      rain: 500,
    },
    {
      name: '17:00',
      temp: 29,
      hum: 4300,
      rain: 100,
    },
  ];


function Homecharts(){
  return (
    <div className="card-group">
      <div className="card m-1 bg-white rounded">
        
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">Temperature</h5>
          <p className="card-text">
            <ResponsiveContainer width="90%" aspect ={4/1}>
                    <AreaChart data = {data}>
                        <XAxis dataKey="name" stroke ="#FF8E00"/>
                        <Area type="monotone" dataKey="temp" stackId="1" stroke="#FF8E00" fill="#FF8E00" />
                        <Tooltip/>
                        <CartesianGrid dataKey={data.temp}/>
                    </AreaChart>
                </ResponsiveContainer>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card m-1 bg-white rounded">
        
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">Rainfall</h5>
          <p className="card-text">
            <ResponsiveContainer width="90%" aspect ={4/1}>
                    <AreaChart data = {data}>
                        <XAxis dataKey="rain" stroke ="#54BAB9"/>
                        <Area type="monotone" dataKey="rain" stackId="1" stroke="#54BAB9" fill="#54BAB9" />
                        <Tooltip/>
                        <CartesianGrid dataKey={data.rain} />
                    </AreaChart>
                </ResponsiveContainer>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card m-1 bg-white rounded">
        
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">Humidity</h5>
          <p className="card-text">
            <ResponsiveContainer width="90%" aspect ={4/1}>
                <AreaChart data = {data}>
                    <XAxis dataKey="hum" stroke ="#8A39E1"/>
                    <Area type="monotone" dataKey="hum" stackId="1" stroke="#8A39E1" fill="#8A39E1" />
                    <Tooltip/>
                    <CartesianGrid dataKey={data.hum} />
                </AreaChart>
            </ResponsiveContainer>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 seconds ago</small>
        </div>
      </div>
    </div>
  );
}
export default Homecharts;