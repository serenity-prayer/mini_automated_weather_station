import React  from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './Home.css'
const data = [
 {
    name: 'sunday',
    temp: 23,
    hum: 20,
    rain: 5,
  },
  {
    name: 'monday',
    temp: 31,
    hum: 18,
    rain: 12,
  },
  {
    name: 'tuesday',
    temp: 20,
    hum: 9,
    rain: 22,
  },
  {
    name: 'wednesday',
    temp: 27,
    hum: 15,
    rain: 20,
  },
  {
    name: 'thursday',
    temp: 18,
    hum: 4,
    rain: 13,
  },
  {
    name: 'friday',
    temp: 23,
    hum: 30,
    rain: 9,
  },
  {
    name: 'saturday',
    temp: 34,
    hum: 12,
    rain: 24,
  },
  ];

function Home(){
    return (
        <div>
           <div className='container p-2 bg-white trans_graph'>
              <ResponsiveContainer width="100%" height="100%">
                  <AreaChart 
                      width ={500}
                      height={500} 
                      data ={data}
                      margin={{
                        top:10,
                        right:30,
                        left:0,
                        bottom:0,
                      }}>
                       <CartesianGrid strokeDasharray="3 3" />
                       <XAxis dataKey="name" />
                       <YAxis />
                        <Tooltip/>
                              
                             <Area type="monotone" dataKey="temp" stackId="1" stroke="#8884d8" fill="#F76E11" />
                             <Area type="monotone" dataKey="hum" stackId="1" stroke="#82ca9d" fill="#344CB7" />
                              <Area type="monotone" dataKey="rain" stackId="1" stroke="#ffc658" fill="#2A1157" />
                          
                              
                           
                     
                  </AreaChart>
              </ResponsiveContainer>
            </div>
        </div>
    )
    }
    export default Home;