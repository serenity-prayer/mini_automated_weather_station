/**
 * App Module
 * @module ./OpenWeather.js
 * @author Steven Kamwaza && Maxwell Mpinganjira
 * @version 1.6
 * @description Weather Prediction Component| new change include css customerzation, responsiveness
 * 
 */

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Onload from "./load/Onload";
import moment from "moment";
import './OpenWeather.css';

function OpenWeather(){
    
    /* The below code is using the useState hook to set the state of the variables. */
    /**
     * @constant {string} lat
     */
    const [lat, setLat] = useState([]);
     /**
     * @constant {string} long
     */
    const [long, setLong] = useState([]);

     /**
     * @constant {string} weather
     */
    const [weather, setWeather] = useState();
    
    const [firstdayTemp, setFistDayTemp] = useState();
    const [firstdayIcon, setFistDayIcon] = useState();
    const [firstdate, setFristDate] = useState();
    const [fisthum, setFistDayHum] = useState();
    const [firstdaydesc, setFistDayDesc] = useState();

    const [seconddayTemp, setSecondDayTemp] = useState();
    const [seconddate, setSecondDate] = useState();
    const [secondhum, setSecondDayHum] = useState();
    const [seconddaydesc, setSecondDayDesc] = useState();
    const [secondIcon, setSecondIcon] = useState();

    const [thirddayTemp,  setThirdDayTemp] = useState();
    const [thirddate, setThirdDate] = useState();
    const [thirdhum, setThirdDayHum] = useState();
    const [thirddaydesc, setThirdDayDesc] = useState();
    const [thirdIcon, setThirdIcon] = useState();

    const [fourthdayTemp, setFourthDayTemp] = useState();
    const [fourthdate, setFourthDate] = useState();
    const [fourthhum, setFourthDayHum] = useState();
    const [fourthdaydesc, setFourthDayDesc] = useState();
    const [fourthIcon, setFourthIcon] = useState();

    const [fifthdayTemp,  setFifthDayTemp] = useState();
    const [fifthdate, setFifthDate] = useState();
    const [fifthhum, setFifthHum] = useState();
    const [fifthdaydesc, setFifthDayDesc] = useState();
    const [fifthIcon, setFifthIcon] = useState();

    const [sixthdayTemp, setSixthDayTemp] = useState();
    const [sixthdate, setSixthDate] = useState();
    const [sixthhum, setSixthHum] = useState();
    const [sixthdaydesc, setSixthDayDesc] = useState()
    const [sixthIcon, setSixthIcon] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        //weather forecast
        /* The below code is fetching the weather data from the API and then setting the data to the
        state. */

        await fetch(`${process.env.REACT_APP_API_URLw}?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                //set data to the object
                setWeather(result.current);
                setFistDayTemp(result.daily[0].temp.max);
                setFristDate(result.daily[0].dt);
                setFistDayHum(result.daily[0].humidity);
                setFistDayDesc(result.daily[0].weather[0].description);
                setFistDayIcon(result.daily[0].weather[0].icon);

                setSecondDayTemp(result.daily[1].temp.max);
                setSecondDate(result.daily[1].dt);
                setSecondDayHum(result.daily[1].humidity);
                setSecondDayDesc(result.daily[1].weather[0].description);
                setSecondIcon(result.daily[1].weather[0].icon);

                setThirdDayTemp(result.daily[2].temp.max);
                setThirdDate(result.daily[2].dt);
                setThirdDayHum(result.daily[2].humidity);
                setThirdDayDesc(result.daily[2].weather[0].description);
                setThirdIcon(result.daily[2].weather[0].icon);

                setFourthDayTemp(result.daily[3].temp.max);
                setFourthDate(result.daily[3].dt);
                setFourthDayHum(result.daily[3].humidity);
                setFourthDayDesc(result.daily[3].weather[0].description);
                setFourthIcon(result.daily[3].weather[0].icon);

                setFifthDayTemp(result.daily[4].temp.max);
                setFifthDate(result.daily[4].dt);
                setFifthHum(result.daily[4].humidity);
                setFifthDayDesc(result.daily[4].weather[0].description);
                setFifthIcon(result.daily[4].weather[0].icon);

                setSixthDayTemp(result.daily[5].temp.max);
                setSixthDate(result.daily[5].dt);
                setSixthHum(result.daily[5].humidity);
                setSixthDayDesc(result.daily[5].weather[0].description);
                setSixthIcon(result.daily[5].weather[0].icon);
            })
            .catch(err =>{
            });
        }
        
        fetchData();
        
    },[lat,long])


    return(
        <div>
            {(typeof weather !='undefined')? 
                (
                    <div>
                        
                       <div className="card-group">
                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">Today |  {moment(new Date(firstdate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature:</i>
                                        <p className="d-inline p-2 val">{firstdayTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity: </p>
                                            <p className="d-inline p-2 val">{fisthum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${firstdayIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{firstdaydesc}</p>
                                </div>
            
                            </div>
                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">Tommorrow ( {moment(new Date(seconddate * 1000)).format('dddd')} ) |  {moment(new Date(seconddate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature:</i>
                                        <p className="d-inline p-2 val">{seconddayTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity: </p>
                                            <p className="d-inline p-2 val">{secondhum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${secondIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{seconddaydesc}</p>
                                </div>
            
                            </div>

                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(thirddate * 1000)).format('dddd')} |  {moment(new Date(thirddate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature: </i>
                                        <p className="d-inline p-2 val">{thirddayTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity:  </p>
                                            <p className="d-inline p-2 val">{thirdhum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${thirdIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{thirddaydesc}</p>
                                </div>
            
                            </div>
            
                       </div>
            
                        <div className="card-group">            
                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(fourthdate * 1000)).format('dddd')} |  {moment(new Date(fourthdate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature: </i>
                                        <p className="d-inline p-2 val">{fourthdayTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity: </p>
                                            <p className="d-inline p-2 val">{fourthhum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${fourthIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{fourthdaydesc}</p>
                                </div>
                            </div>
                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(fifthdate * 1000)).format('dddd')} |  {moment(new Date(fifthdate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature: </i>
                                        <p className="d-inline p-2 val">{fifthdayTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity: </p>
                                            <p className="d-inline p-2 val">{fifthhum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${fifthIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{fifthdaydesc}</p>
                                </div>
                            </div>
                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(sixthdate * 1000)).format('dddd')} |  {moment(new Date(sixthdate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature: </i>
                                        <p className="d-inline p-2 val">{sixthdayTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity: </p>
                                            <p className="d-inline p-2 val">{sixthhum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${sixthIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{sixthdaydesc}</p>
                                </div>
                            </div>
                        </div>                       
                        
                    </div>
                ):(

                    <div className="card">
                        <Onload/>
                    </div>
                )
            }
        </div>
    );
}
export default OpenWeather;