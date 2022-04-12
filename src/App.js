/**
 * App Module
 * @module App.js
 * @author Steven Kamwaza && Maxwell Mpinganjira
 * @version 1.0
 * @description A min auto weather station dashboard
 * 
 */

import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AnalyCharts from "./componets/home/AnalyCharts";

const App = () =>{
    return(
        <div>
            <div className='containerh'>
                <AnalyCharts/>
            
            </div>
        
        </div>
    )
}
export default App; 