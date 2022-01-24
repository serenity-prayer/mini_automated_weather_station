import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '10:20',
      temp: 40,
      hum: 2400,
      press: 2400,
    },
    {
      name: '12:00',
      temp: -10,
      hum: 1398,
      press: 2210,
    },
    {
      name: '13:30',
      temp: 29,
      hum: 9800,
      press: 2290,
    },
    {
      name: '14:30',
      temp: 21,
      hum: 3908,
      press: 2000,
    },
    {
      name: '15:00',
      temp: 18,
      hum: 4800,
      press: 2181,
    },
    {
      name: '16:00',
      temp: 10,
      hum: 3800,
      press: 2500,
    },
    {
      name: '17:00',
      temp: 29,
      hum: 4300,
      press: 2100,
    },
  ];


function Homecharts(){
  return (
    <div className="card-group">
      <div className="card m-1 bg-white rounded">
        
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">Temperature</h5>
          <p className="card-text">
            <ResponsiveContainer width="100%" aspect ={4/1}>
                    <LineChart data = {data}>
                        <XAxis dataKey="name" stroke ="#5584AC"/>
                        <Line type="monotone" dataKey="temp"  />
                        <Tooltip/>
                        <CartesianGrid dataKey={data.temp}/>
                    </LineChart>
                </ResponsiveContainer>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card m-1 bg-white rounded">
        
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">Pressure</h5>
          <p className="card-text">
            <ResponsiveContainer width="100%" aspect ={4/1}>
                    <LineChart data = {data}>
                        <XAxis dataKey="press" stroke ="#5584AC"/>
                        <Line type="monotone" dataKey="press"  />
                        <Tooltip/>
                        <CartesianGrid dataKey={data.press} />
                    </LineChart>
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
            <ResponsiveContainer width="100%" aspect ={4/1}>
                <LineChart data = {data}>
                    <XAxis dataKey="hum" stroke ="#5584AC"/>
                    <Line type="monotone" dataKey="hum"  />
                    <Tooltip/>
                    <CartesianGrid dataKey={data.hum} />
                </LineChart>
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