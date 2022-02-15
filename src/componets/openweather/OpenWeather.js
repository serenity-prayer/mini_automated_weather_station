import React, { useEffect, useState } from "react";
import OpenData  from './OpenData';
import "bootstrap/dist/css/bootstrap.min.css";
//import database from './database'
import Onload from "./load/Onload";

function OpenWeather(){
    
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [forecast, setFocast] = useState();

    useEffect(() => {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        //weather forecast
        await fetch(`${process.env.REACT_APP_API_URLw}?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                //set data to the object
                setFocast(result);
                console.log(result);
            })
            .catch(err =>{
                console.log(err);
            });

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                
            })
            .catch(err =>{
                console.log(err);
            });
        }
        fetchData();
        
    },[lat,long])



    return(
        <div>
            {(typeof data.main !='undefined')? (<OpenData weatherdata={data}/>):(<div className="card">
                <Onload/>
            </div>)} 
            
        </div>
    );
}
export default OpenWeather;