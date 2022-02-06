<<<<<<< Updated upstream
import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
=======
import React from 'react';
import Rawdata from '../station/Rawdata';
import Homecharts from '../homecharts/Homecharts';
import { Area,XAxis, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'
import Footer from '../footer/Footer';
>>>>>>> Stashed changes

export default function LinearColor() {
  return (
<<<<<<< Updated upstream
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
=======
   <div>
      <div className=''>
        <Rawdata/>
        <Homecharts/>
      </div>
      <div className='bg-white trans_graph'>
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
                          {/* 22577E 5584AC 1C6DD0 39311D*/}
                          <stop offset="40%" stopColor='#1CC5DC' stopOpacity={0.4}/>
                          <stop offset="95%" stopColor='#39311D' stopOpacity={0.2}/>
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
        <Footer/>
      </div>
   </div>
>>>>>>> Stashed changes
  );
}