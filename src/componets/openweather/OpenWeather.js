import React, { useEffect, useState } from "react";
import OpenData  from './OpenData';
import "bootstrap/dist/css/bootstrap.min.css";

function OpenWeather(){
    
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            });
        }
        fetchData();
    },[lat,long])

    return(
        <div>
            {/* {(typeof data.main !='undefined')? (<OpenData weatherdata={data}/>):(<div className="card">
                <code className="text-center text-danger">Oops! Unstable Network</code>
            </div>)} */}
            
        </div>
    );
}
export default OpenWeather;