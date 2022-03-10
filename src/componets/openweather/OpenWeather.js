import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Onload from "./load/Onload";
import moment from "moment";
import './OpenWeather.css';

function OpenWeather(){
    
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState();
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

    const [sevenTemp, setSevenDayTemp] = useState();
    const [sevendate, setSevenDate] = useState();
    const [sevenhum, setSevenHum] = useState();
    const [sevendaydesc, setSevenDayDesc] = useState()
    const [sevenIcon, setSevenIcon] = useState();

    const [eightdayTemp, setEightDayTemp] = useState();
    const [eightdate, setEightDate] = useState();
    const [eighthum, setEightHum] = useState();
    const [eightdaydesc, setEightDayDesc] = useState();
    const [eightIcon, setEightIcon] = useState();

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
                setWeather(result.current);

                console.log(result);
                // setData(result.current.temp);
                setFistDayTemp(result.daily[0].temp.max);
                setFristDate(result.daily[0].dt);
                setFistDayHum(result.daily[0].humidity);
                setFistDayDesc(result.daily[0].weather[0].description);
                setFistDayIcon(result.daily[0].weather[0].icon);

                setSecondDayTemp(result.daily[1].temp.max);
                setSecondDate(result.daily[1].dt);
                setSecondDayHum(result.daily[1].humidity);
                setSecondDayDesc(result.daily[1].weather[0].description);
                setData(result.daily[1].rain);
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

                setSevenDayTemp(result.daily[6].temp.max);
                setSevenDate(result.daily[6].dt);
                setSevenHum(result.daily[6].humidity);
                setSevenDayDesc(result.daily[6].weather[0].description);
                setSevenIcon(result.daily[6].weather[0].icon);

                setEightDayTemp(result.daily[7].temp.max);                
                setEightDate(result.daily[7].dt);
                setEightHum(result.daily[7].humidity);
                setEightDayDesc(result.daily[7].weather[0].description);
                setEightIcon(result.daily[7].weather[0].icon);

                console.log(seconddayTemp);
                var newDate = moment(new Date(1645088400 * 1000)).format('dddd');
                console.log(newDate);
                console.log(moment(new Date(1645088400 * 1000)).format('LL'));
            })
            .catch(err =>{
                console.log(err);
            });

        // await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        //     .then(res => res.json())
        //     .then(result => {
        //         setData(result);
                
        //     })
        //     .catch(err =>{
        //         console.log(err);
        //     });
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
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(firstdate * 1000)).format('dddd')} |  {moment(new Date(firstdate * 1000)).format('LL')}</p>
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
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(seconddate * 1000)).format('dddd')} |  {moment(new Date(seconddate * 1000)).format('LL')}</p>
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
            
                       </div>
            
                        <div className="card-group">
        
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
                        </div>
            
                        <div className="card-group">
                                   
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
            
                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(sevendate * 1000)).format('dddd')} |  {moment(new Date(sevendate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature: </i>
                                        <p className="d-inline p-2 val">{sevenTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity: </p>
                                            <p className="d-inline p-2 val">{sevenhum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${sevenIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{sevendaydesc}</p>
                                </div>
                            </div>
            
                            <div className="card cardd">
                                <p className="card-header card-titled bg-primary text-white text-justify text-center">{moment(new Date(eightdate * 1000)).format('dddd')} |  {moment(new Date(eightdate * 1000)).format('LL')}</p>
                                <div className="card-body">
                                    <span>
                                        <i className="d-inline p-2 header">Temperature: </i>
                                        <p className="d-inline p-2 val">{eightdayTemp}<sup>&deg;</sup>C </p>
                                    </span>
                                        <div>
                                            <p className="d-inline p-2 header">Humidity: </p>
                                            <p className="d-inline p-2 val">{eighthum}% </p>
                                        </div>
                                
                                    <div class="d-inline p-2 text-white"> <img className="" height={30} width={100} src= {`https://openweathermap.org/img/wn/${eightIcon}.png`}  alt="weather-icon"/></div>
                                    <p className="titlep">{eightdaydesc}</p>
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