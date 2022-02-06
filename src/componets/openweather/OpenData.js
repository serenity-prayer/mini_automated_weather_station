import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';

const OpenData= ({weatherdata}) =>{
    return(
        <div className="card">
            <small>{moment().format('dddd')}</small>
            <small>{moment().format('LL')}</small>
            <h2 className="card-header text-center">{weatherdata.name}</h2>
            <div className='card-body'>
                <div className='card-group'>
                    <div className='card'>
                        <h5 className='card-title'>Temperature</h5>
                        <h4 className='card-text'>{weatherdata.main.temp} <code><sup>0</sup>C</code></h4>
                    </div>
                    <div className='card'>
                        <h5 className='card-title'>Humidity</h5>
                        <h4 className='card-text'>{weatherdata.main.humidity}<code>%</code></h4>
                    </div>
                    <div className='card'>
                        <h5 className='card-title'>Pressure</h5>
                        <h4 className='card-text'>{weatherdata.main.pressure}<code>hPa</code></h4>
                    </div>
                    <div className='card'>
                        <h5 className='card-title'>Wind</h5>
                        <h4 className='card-text'>{weatherdata.wind.speed}<code>Km/hr</code></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OpenData;