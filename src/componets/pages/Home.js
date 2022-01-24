import React from 'react';
import Rawdata from '../station/Rawdata';
import Homecharts from '../homecharts/Homecharts';
import { Area,XAxis, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'

const data = [
  {
    temp: 0,
    hum: 2400,
  },
  {
    temp: 30,
    hum: 2400,
  },
  {
    temp: -10,
    hum: 1398,
  },
  {
    temp: 29,
    hum: 9800,
  },
  {
    temp: -3,
    hum: 3908,
  }
];

function Home(){
  return (
   <div>
      <div className=''>
        <Rawdata/>
        <Homecharts/>
      </div>
      <div className='container p-2 bg-white trans_graph'>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
                width ={500}
                height={500} 
                data ={data}
                margin={{top:10}}>
                  <defs>
                     <linearGradient 
                        id ="colorview" 
                        xl ="0" 
                        y1="0" 
                        x2="0"
                        y2="1">
                          <stop offset="30%" stopColor='#5584AC' stopOpacity={0.4}/>
                          <stop offset="85%" stopColor='#5584AC' stopOpacity={0.2}/>
                     </linearGradient>
                  </defs>
                 
                  <Area 
                      type="monotone" 
                      dataKey='temp' 
                      stroke='#5584AC' fill="url(#colorview)"/>
                <XAxis dataKey="press" stroke ="#5584AC"/>
                <Tooltip/>
            </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className=''>
        <Rawdata/>
      </div>
   </div>
  );
}
export default Home;