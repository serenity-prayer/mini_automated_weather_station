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
                    <div className='card m-1'>
                        <h5 className='card-title btn btn-primary  d-flex justify-content-center '>Temperature</h5>
                        <h4 className='card-text text-center justify-content-center'>{weatherdata.main.temp} <code><sup>0</sup>C</code></h4>
                    </div>
                    <div className='card m-1'>
                        <h5 className='card-title btn btn-primary  d-flex justify-content-center'>Humidity</h5>
                        <h4 className='card-text text-center justify-content-center'>{weatherdata.main.humidity}<code>%</code></h4>
                    </div>
                    <div className='card m-1'>
                        <h5 className='card-title btn btn-primary  d-flex justify-content-center'>Pressure</h5>
                        <h4 className='card-text text-center justify-content-center'>{weatherdata.main.pressure}<code>hPa</code></h4>
                    </div>
                    <div className='card m-1'>
                        <h5 className='card-title btn btn-primary  d-flex justify-content-center'>Wind</h5>
                        <h4 className='card-text text-center justify-content-center'>{weatherdata.wind.speed}<code>Km/hr</code></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OpenData;