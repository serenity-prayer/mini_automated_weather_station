import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from 'react-iframe';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HistoryCharts() {
    const TEMP_DATA ='https://api.thingspeak.com/channels/1635256/fields/1.json?api_key=K1BT6Y77BEFGSQSB&start=2022-02-20%2022:02:20';

    const height = 400;
    const width = 300;

    const [data, setData] = useState([]);

    useEffect(() => {
        //weather forecast
        fetch(TEMP_DATA)
            .then(res => res.json())
            .then(result => {
                //set data to the object
                setData(result.feeds);

                console.log(data.feeds);
            })
            .catch(err =>{
                console.log(err);
            });
        
    },[]);
     
    return(
        <div className=" m">
              <div className='col border-radius-rounded'>
                    <Iframe
                        url='https://api.thingspeak.com/channels/1635256/charts/1?start=2022-01-01%2000:00:00&color=4169e1&dynamic=true&title=Temperature%20&type=spline&xaxis=Time&yaxis=&height=350&width=1650'
                        width='1650'
                        height='350'
                        />
                </div>
                <div className='col border-radius-rounded'>
                    <Iframe
                        url='https://api.thingspeak.com/channels/1635256/charts/2?start=2022-01-01%2000:00:00&color=4169e1&dynamic=true&title=Humidity%20&type=spline&xaxis=Time&yaxis=&height=350&width=1650'
                        width='1650'
                        height='350'
                        />
                </div>
        </div>
    )
}

export default HistoryCharts;