/**
 * App Module
 * @author Steven Kamwaza && Maxwell Mpinganjira
 * @version 1.0
 * @description A min auto weather station live dashboard
 * 
 */

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from 'react-iframe';

function Datacharts(){
    return(
        <div>
            <div className='card-group'>
                <div className='card border-radius-rounded'>
                    <h5 className='card-header text-primary font-weight-bold'>Temperature</h5>
                    <Iframe
                        url='https://thingspeak.com/channels/1635256/widgets/420233'
                        width='400'
                        height='260'
                        />
                </div>
                <div className='card border-radius-rounded'>
                    <h5 className='card-header text-primary font-weight-bold'>Humidity</h5>
                    <Iframe
                        url='https://thingspeak.com/channels/1635256/widgets/420234'
                        width='400'
                        height='260'
                        />

                </div>

                <div className='card border-radius-rounded'>
                    <h5 className='card-header text-primary font-weight-bold'>Rain Fall</h5>
                    <Iframe
                        url='https://thingspeak.com/channels/1635256/widgets/420237'
                        width='400'
                        height='260'
                        />
                </div>
            </div>
            
        </div>
    )
}
export default Datacharts;