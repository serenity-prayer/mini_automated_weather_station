import React from 'react';
import './Activity.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BarChart,PieChart, Bar, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function ActivityChild(){
    const [district, setDistrict, crops, setCrops] = React.useState('');
    const handleChange = (event) => {
        setDistrict(event.target.value);
        
      };

const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,

          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

      
    return(
       <div>
            <div className="row">
                <h4 className='m-1 row-header text-center text-primary card-titled'>Plan Your Activities</h4>
                <div className="">
                  <div className='card-group '>
                       
                        <div className="card cardd m-3">
                            <img className= "card-img-top" src="https://th.bing.com/th/id/R.c29d8ae4fbf8d19022a96ee526ab1871?rik=zy%2bCcQTNCLtEmg&pid=ImgRaw&r=0" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title card-titled">Planting Time</h5>
                                <p className="card-text text-center"><i>From little seeds grow mighty trees.</i></p>
                            
                            </div>
                        </div>
                        <div className="card cardd m-3">
                            <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#0040FA" />
                            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            </PieChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                        </div>
                        <div className="card cardd m-3">
                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={150} height={40} data={data}>
                        <Bar dataKey="uv" fill="#8884d8" />

                        </BarChart>
                         </ResponsiveContainer>
                         </div>

                            </div>
                      

         
            <div className="row1">
                <h4 className='m-1 row-header text-center text-primary card-titled'>input your data</h4>
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
                        <MenuItem value={10}>Chitipa</MenuItem>
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
                        <h1>  
                         <h1> 
                        </h1>
                        </h1>
                
                    <h1>  
                         <h1>   
                        </h1>
                        </h1>
                    <Button variant="contained" disableElevation>  submit
                     </Button>

               
                </h1>
                <div>
                <h1> 
                <h1>
       

                </h1>
                </h1>
                </div>
              
                </div>
                </div>
                </div>
            
            <div className='row1'>

         
            </div>
       </div>
    )
}
export default ActivityChild;