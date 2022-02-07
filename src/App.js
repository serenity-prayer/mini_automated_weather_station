import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TopnavBar from './componets/topbar/TopnavBar';
import Home from './componets/pages/Home';
import OpenWeather from './componets/openweather/OpenWeather';
import OpenTable from './componets/openweather/OpenTable';


const App = () =>{
    return(
        <div>
            <TopnavBar className="position-sticky"/>
            
            <div className='containerh'>
               
                <div className="others_container">
                    {/* <Home/> */}
                </div>
            </div>
            <OpenTable/>
        </div>
    )
}
export default App; 