import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Oval } from "react-loader-spinner";
import './load.css';

function Onload() {
    return (
       <div className="container d-flex justify-content-center mt-3 p-2">
            <div>
            <div>
                <Oval             
                    color="#00BFFF" 
                    height={80} 
                    width={80} />
                    {/* p-2 */}
            </div>
            <br/>
            <p className="mt-3">Loading...</p>
            </div>
       </div>
    )
}

export default Onload
