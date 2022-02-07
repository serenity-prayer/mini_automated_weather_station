import React, { useEffect, useState } from "react";
import OpenData  from './OpenData';
import "bootstrap/dist/css/bootstrap.min.css";
import datat from './axiso';
import database from './database'

function OpenWeather(){
    
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [temp , setTemp] = useState();
    const [hum , setHum] = useState();
    const [wind , setWind] = useState();
    const [pressure , setPress] = useState();

    //pushing data to firebase database
    // Push Function
    const Push = () => {
        database.ref("WeatherData").set({
        temp : temp,
        wind : wind,
        hum  : hum,
        press: pressure
        }).catch(alert);
    }

    useEffect(() => {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setTemp(result.main.temp);
                setHum(result.main.humidity);
                setWind(result.wind.speed);
                setPress(result.main.pressure)
            });
        }
        fetchData();
    },[lat,long])



    return(
        <div>
            {(typeof data.main !='undefined')? (<OpenData weatherdata={data}/>):(<div className="card">
                <code className="text-center text-danger">Oops! Unstable Network</code>
            </div>)}
            
        </div>
    );
}
export default OpenWeather;