import React from 'react'
import './rawdata.css';

function Rawdata() {
    return (
        <div className="raw_data">
            <div className='raw_item'>
                <span className='temp'>Temperature</span>
                <div className="raw">
                    <span className='raw_value'>25 C</span>
                    <p>Room Temperature</p>

                </div>
            </div>

            <div className='raw_item'>
                <span className='temp'>Humidity</span>
                <div className="raw">
                    <span className='raw_value'>200</span>
                    <p>Low Humidity</p>

                </div>
            </div>

            <div className='raw_item'>
                <span className='temp'>Rain Fall</span>
                <div className="raw">
                    <span className='raw_value'>1024</span>
                    <p>No rain </p>

                </div>
            </div>
            
        </div>
    )
}
export default Rawdata;