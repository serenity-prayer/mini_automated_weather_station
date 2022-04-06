import React, {useState,useEffect} from 'react';
import './Activity.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ComposedChart,Line,Area,PieChart, Bar, Pie,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {firebase} from './Firebase.js';
import { getDatabase, ref, push, set } from "firebase/database";
import {onValue } from "firebase/database";
import Iframe from 'react-iframe';
import Firetable from './Table';
import Data from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivityTopper from './ActivityTopper';
import ActivitySecond from './ActivitySecond';

function ActivityChild(){

  return(

    <div>
      
      <div className=''>
        <ActivityTopper/>
      </div>
      <div className ="m-1">
        <ActivitySecond/>
      </div>

      <div>
      </div>
    </div>
  )
}
export default ActivityChild;