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
import Results from'./Results.jsx';
import {firebase} from './Firebase.js';
import { getDatabase, ref, push, set } from "firebase/database";
import {onValue } from "firebase/database";
import Iframe from 'react-iframe';

function ActivityChild(){
    const [district, setDistrict, crops, setCrops] = React.useState('');
    const handleChange = (event) => {
        setDistrict(event.target.value);
        
      }
    //get data from firebase states
    const [firedata, setFireData] = useState([]);
    const [graphdata, setGraphData] = useState ();
    //setfirebase data function
    useEffect(() => {
      onValue(ref(firebase), snapshot => {
        const data = snapshot.val();
        //console.log(data.weatherdata);
        setFireData(data.weatherdata);
        if(data!==null){
         
          
          // setFireData(Object.values(data));
         console.log(firedata);

        }
      })


    },[]);
    
const data = [
        {
          Day: 'Sunday',
          Temparature: 4000,
          Humidity: 2400,
          Average: 2400,
        },
        {
          Day: 'Monday',
          Temparature: 3000,
          Humidity: 1398,
          Average: 2210,
        },
        {
          Day: 'Tuesday',
          Temparature: 2000,
          Humidity: 9800,
          Average: 2290,
        },
        {
          Day: 'Wednessday',
          Temparature: 2780,
          Humidity: 3908,
          Average: 2000,
        },
        {
          Day: 'Thursday',
          Temparature: 1890,
          Humidity: 4800,
          Average: 2181,
        },
        {
          Day: 'Friday',
          Temparature: 2390,
          Humidity: 3800,
          Average: 2500,
        },
        {
          Day: 'Saturday',
          Temparature: 3490,
          Humidity: 4300,
          Average: 2100,
        },
      ];

function createData(Day, Temparature, Humidity,) {
  return { Day, Temparature, Humidity,};
}
const rows = [
  createData('Sunday', 159, 6.0, 24, 4.0),
  createData('Monday', 237, 9.0, 37, 4.3),
  createData('Tuesday', 262, 16.0, 24, 6.0),
  createData('Wednesday', 305, 3.7, 67, 4.3),
  createData('Thursday', 356, 16.0, 49, 3.9),
];
      
    return(
       <div>    
             <h4 className='m-1 row-header text-center text-primary card-titled'>ANALYSIS CHARTS</h4>
                <div>
                <Grid container direction="row" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>                    
                    <ComposedChart width={400} height={300} data={firedata}>
                    <XAxis dataKey="Day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="Temparature" barSize={20} fill="#0040FA" />
                    <Bar dataKey="Humidity" barSize={20} fill="#82ca9d" />
                
                  </ComposedChart>
                </Grid>  
                <div className="card  border-radius-rounded m-3">
                  <Iframe  url="https://thingspeak.com/apps/matlab_visualizations/448261?size=iframe"
                      width="450"
                      height="260"
                      id="myId"
                      className=""
                      display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
                 </div>
                   
                    <Grid item xs={4} >     
                    <TableContainer width={400} height={300} component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell aligh="rigt">DAY</TableCell>
                          <TableCell align="right">TEMPARATURE(AVG)</TableCell>
                          <TableCell align="right">HUMIDITY(AVG</TableCell>          
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.Day}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Day}
                            </TableCell>
                            <TableCell align="right">{row.Temparature}</TableCell>
                            <TableCell align="right">{row.Humidity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </Grid>
                    </Grid>
                        </div> 
             <h4 className='m-1 row-header text-center text-primary card-titled'>DATA ANALYSIS FORMS</h4>          
          <div className='card border-radius-rounded'>
            <div className="row1">
               
                <div className="">
                  <div className='card-group '>             
                 <h1><h1>
                 <Box sx={{ minWidth: 150 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">District</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={district}
                        label="district"
                        onChange={handleChange}
                        >      
                        <MenuItem value={20}>Chitipa</MenuItem>
                        <MenuItem value={30}>Karonga</MenuItem>
                        <MenuItem value={40}>Likoma</MenuItem>
                        <MenuItem value={50}>Mzimba</MenuItem>
                        <MenuItem value={60}>NkhataBay</MenuItem>
                        <MenuItem value={70}>Rumphi</MenuItem>
                        <MenuItem value={80}>Dedza</MenuItem>
                        <MenuItem value={90}>Dowa</MenuItem>
                        <MenuItem value={100}>Kasungu</MenuItem>
                        <MenuItem value={110}>Lilongwe</MenuItem>
                        <MenuItem value={120}>Mchinji</MenuItem>
                        <MenuItem value={130}>Nkhotakota</MenuItem>
                        <MenuItem value={140}>Ntcheu</MenuItem>
                        <MenuItem value={150}>Ntchisi</MenuItem>
                        <MenuItem value={160}>Salima</MenuItem>
                        <MenuItem value={170}>Balaka</MenuItem>
                        <MenuItem value={180}>Blantyre</MenuItem>
                        <MenuItem value={190}>Chikwawa</MenuItem>
                        <MenuItem value={200}>Chiradzulu</MenuItem>
                        <MenuItem value={210}>Machinga</MenuItem>
                        <MenuItem value={220}>Mangochi</MenuItem>
                        <MenuItem value={230}>Mulanje</MenuItem>
                        <MenuItem value={240}>Mwanza</MenuItem>
                        <MenuItem value={250}>Neno</MenuItem>
                        <MenuItem value={260}>Nsanje</MenuItem>
                        <MenuItem value={270}>Phalombe</MenuItem>
                        <MenuItem value={280}>Thyolo</MenuItem>
                        <MenuItem value={290}>Zomba</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                 </h1>
                 <Box sx={{ minWidth: 150 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">crops</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={crops}
                        label="Crops"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Maize</MenuItem>
                        <MenuItem value={20}>Rice</MenuItem>
                        <MenuItem value={30}>Groundnuts</MenuItem>
                        <MenuItem value={30}>Sugar Cane</MenuItem>
                        <MenuItem value={40}>Legumes</MenuItem>
                        <MenuItem value={50}>banana</MenuItem>
                        <MenuItem value={60}>Tea</MenuItem>
                        <MenuItem value={70}>Soya</MenuItem>
                        <MenuItem value={80}>Tobacco</MenuItem>
                        <MenuItem value={90}>Cotton</MenuItem>
                        <MenuItem value={80}>Cassava</MenuItem>
                        <MenuItem value={90}>Sweet potatoes</MenuItem>
                        <MenuItem value={90}>Irish potatoes</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <Button variant="contained" disableElevation>  submit </Button>
                </h1>
                <div>
                </div>
                </div>
                </div>
                <h4 className='m-2 row-header text-center text-primary card-titled'>ANALYSIS RESULTS</h4>  
                <div className='card border-radius-rounded'>
               
                <Results/>
                </div>
              </div>
              </div>
              </div>
    )
}
export default ActivityChild;