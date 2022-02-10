import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import "./rawdata.css";
import { ResponsiveContainer } from 'recharts';
const Rawdata = () => {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");

  return (
    <div className="card-group">
         <div className="card m-1 ">
             <div>
             <ResponsiveContainer  >  
                 <div>
                     <Paper className="paper">
                     <h6 className="fontcss">{value.name}</h6>
                        <div className="elementcenter">
                        <p>
                            Min
                            <br />
                            {`${Math.floor(temp.temp_min - 273.15)}° C`}
                        </p>
                        <h6 className="fontcss">{`${Math.floor(temp.temp - 273.15)}° C`}</h6>
                        <p>
                            Max
                            <br />
                                                    {`${Math.floor(temp.temp_max - 273.15)}° C`}
                                </p>
                                </div>
                            </Paper>
                            </div>
                            </ResponsiveContainer>
             </div> 
            </div>   
            <div className="card">
            <p className="card-m-1">
            <ResponsiveContainer >  
    <div>
      <Paper className="paper">
      
        <h6 className="fontcss">{value.name}</h6>
        <div className="elementcenter">
          <p>
            Min
            <br />
            {`${Math.floor(temp.temp_min - 273.15)}mm`}
          </p>
          <h6 className="fontcss">{`${Math.floor(temp.temp - 273.15)}mm`}</h6>
          <p>
            Max
            <br />
            {`${Math.floor(temp.temp_max - 273.15)}mm`}
          </p>
        </div>
      </Paper>
    </div>
    </ResponsiveContainer>  
    </p>
    </div>   
    
      <div className="card">
      <p className="card-text">
      <ResponsiveContainer >  
    <div>
      <Paper className="paper">
      
        <h6 className="fontcss">{value.name}</h6>
        <div className="elementcenter">
          <p>
            Min
            <br />
            {`${Math.floor(temp.temp_min - 273.15)}g.kg-1`}
          </p>
          <h6 className="fontcss">{`${Math.floor(temp.temp - 273.15)}g.kg-1`}</h6>
          <p>
            Max
            <br />
            {`${Math.floor(temp.temp_max - 273.15)}g.kg-1`}
          </p>
        </div>
      </Paper>
    </div>
    </ResponsiveContainer>  
    </p> 
    
</div>
</div>

  );
};

export default Rawdata;