import React from 'react';
import './Activity.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function ActivityChild(){
    const [district, setDistrict, crops, setCrops] = React.useState('');
    const handleChange = (event) => {
        setDistrict(event.target.value);
        
      };
   
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
                            <img className= "card-img-top" src="https://www.greenpeace.org/static/planet4-africa-stateless/2020/03/b4ee3071-samuel-wathome-at-his-farm-scaled.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title card-titled">Weeding Time</h5>

                                <p className="card-text text-center"><i> If you don't control them, entire crops can be ruined.</i></p>
                            
                            </div>
                        </div>
                        <div className="card cardd m-3">
                            <img className='card-img-top' src='https://www.aljazeera.com/mritems/Images/2009/7/3/2009737125114954_8.jpg' alt='image'/>
                            <div className="card-body">
                                <h5 className="card-title card-titled">Haverst Time</h5>
                                <p className="card-text text-center">"The day of fortune is a harvest day, we must be busy when the corn is ripe."</p>
                            
                            </div>
                        </div>

                  </div>
                
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