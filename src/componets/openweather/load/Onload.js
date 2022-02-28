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
                    height={100} 
                    width={100} />
                    {/* p-2 */}
            </div>
            <p className="m-3">Loading...</p>
            </div>
       </div>
    )
}

export default Onload
