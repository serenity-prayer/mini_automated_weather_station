import React from 'react';
import './Activity.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function ActivityChild(){
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

            <div className="row">
                <h4 className='m-1 row-header text-center text-primary card-titled'>input your data</h4>
                <div className="">
                  <div className='card-group '>

                 <h1>
                    <TextField id="outlined-basic" label="enter crop" variant="outlined" />
                    <h1>  </h1>
                    <TextField id="outlined-basic" label="enter district" variant="outlined" />
                    <h1>  </h1>
                    <Button variant="contained" disableElevation>  submit  </Button>
    
   
                 </h1>

                  </div>
                  </div>
                  </div>
            
            <div className='row'>

         
            </div>
       </div>
    )
}
export default ActivityChild;