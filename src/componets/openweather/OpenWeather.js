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

    // const [temp , setTemp] = useState();
    // const [hum , setHum] = useState();
    // const [wind , setWind] = useState();
    // const [pressure , setPress] = useState();



    useEffect(() => {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&&appid=27fa978b9ed3a3e7ce8137be2d78cbac
        await fetch(`${process.env.REACT_APP_API_URLw}?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
            // setTemp(result.main.temp);
            // setHum(result.main.humidity);
            // setWind(result.wind.speed);
            // setPress(result.main.pressure);
       
            setFocast(result.current);
            console.log(forecast);
        })
        .catch(err =>{
            console.log(err);
        });

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                // setTemp(result.main.temp);
                // setHum(result.main.humidity);
                // setWind(result.wind.speed);
                // setPress(result.main.pressure);
           
                setData(result);
                // console.log(result);
            })
            .catch(err =>{
                console.log(err);
            });
        }
        fetchData();
        
    },[lat,long])



    return(
        <div>
            {/* {(typeof data.main !='undefined')? (<OpenData weatherdata={data}/>):(<div className="card">
                <Onload/>
            </div>)} */}
           {/* <h1>{forecast.current.pressure}</h1> */}
            
        </div>
    );
}
export default OpenWeather;