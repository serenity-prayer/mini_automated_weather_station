/**
 * App Module
 * @module ../historycharts.js
 * @author Steven Kamwaza && Maxwell Mpinganjira
 * @version 1.0
 * @description A min auto weather station dashboard history charts
 * 
 */

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from 'react-iframe';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HistoryCharts() {
    /**
     * @constant {string} TEMP_DATA
     */
    const TEMP_DATA ='https://api.thingspeak.com/channels/1635256/fields/1.json?api_key=K1BT6Y77BEFGSQSB&start=2022-02-20%2022:02:20';

    const height = 400;
    const width = 300;

    /**
     * @constant {Array.<string>} data
     */
    const [data, setData] = useState([]);

    useEffect(() => {
        //weather forecast

        /**
         * @param {TEMP_DATA} TEMP_DATA
         * @returns data
         */
        fetch(TEMP_DATA)
            .then(res => res.json())
            .then(result => {
                //set data to the object
                setData(result.feeds);
;
            })
            .catch(err =>{
                console.log(err);
            });
        
    },[]);
     
    return(
                    
        <div className=" m ml-3 pl-3">
            <div>TEMPERATURE</div>
              <div className='col border-radius-rounded'>
                    <Iframe
                        url='https://api.thingspeak.com/channels/1635256/charts/1?start=2022-01-01%2000:00:00&color=4169e1&dynamic=true&title=TEMPERATURE%20&type=spline&xaxis=Time&yaxis=&height=350&width=1650'
                        width='1650'
                        height='350'
                        display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
                </div>
                <div className='col border-radius-rounded'>
                    <Iframe
                        url='https://api.thingspeak.com/channels/1635256/charts/2?start=2022-01-01%2000:00:00&color=4169e1&dynamic=true&title=HUMIDITY%20&type=spline&xaxis=Time&yaxis=&height=350&width=1650'
                        width='1650'
                        height='350'
                        display="initial"
                        position="relative"
                        sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
                </div>
                <div className='col border-radius-rounded'>
                    <Iframe
                        url='https://api.thingspeak.com/channels/1635256/charts/3?start=2022-03-25%2000:00:00&color=4169e1&dynamic=true&title=RAINFALL%20&type=spline&xaxis=Time&yaxis=&height=350&width=1650'
                        width='1650'
                        height='350'
                        display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
                        </div>
                        <div className='col border-radius-rounded'>
                    <Iframe
                        url='https://api.thingspeak.com/channels/1635256/charts/4?start=2022-01-01%2000:00:00&color=4169e1&dynamic=true&title=LIGHT-INTENSITY%20&type=spline&xaxis=Time&yaxis=&height=350&width=1650'
                        width='1650'
                        height='350'
                        display="initial"
                        position="relative"
                        sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
                        </div> 
        </div>
    )
}

export default HistoryCharts;