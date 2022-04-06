// this componets is for recommendations and side graph on analytics componets

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';
import Iframe from 'react-iframe';


function ActivityTopper() {

    const [recorain, setRain] = useState([]);
    const [recotemp, setRecoData] = useState([]);
    const [humiditydata, setHumidity] = useState([]);
    const [lightdata, setLight] = useState([]);

    //fetching data for reccommendations
    useEffect(() => {
        function rainData() {
            fetch('https://api.thingspeak.com/channels/1635256/fields/3.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(items => items.json())
                .then(results => {
                    setRain(results.feeds)
                })
                .catch(err => { })
        }
        function tempData() {
            fetch('https://api.thingspeak.com/channels/1635256/fields/1.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(items => items.json())
                .then(results => {
                    setRecoData(results.feeds)
                })
                .catch(err => { })
        }
        function humData() {
            fetch('https://api.thingspeak.com/channels/1635256/fields/2.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(items => items.json())
                .then(results => {
                    setHumidity(results.feeds)
                })
                .catch(err => { })
        }
        function lightData() {
            fetch('https://api.thingspeak.com/channels/1635256/fields/4.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(items => items.json())
                .then(results => {
                    setLight(results.feeds)
                })
                .catch(err => { })
        }


        //call the functions
        humData();
        rainData();
        tempData();
        lightData();
    }, [])

    //elimating null variables and give it to new array
    let rainArray = []
    for (let item of recorain) {
        if (item.field3 !== null) {
            //returning the to new array rainArray
            rainArray.push(parseInt(item.field3));
        }
    }
    let tempArray = []
    for (let item of recotemp) {
        if (item.field1 !== null) {
            ///push to new array
            tempArray.push(parseInt(item.field1));
        }
    }

    /* The above code is creating an array of humidity values. */
    let humArray = []
    for (let item of humiditydata) {
        if (item.field2 !== null) {
            //push
            humArray.push(Number(item.field2));
        }
    }

    let lightArray = []
    for (let item of lightdata) {
        if (item.field4 !== null) {
            lightArray.push(parseInt(item.field4))
        }
    }
    // function average
    function averageCount(arr) {
        var sum = 0;
        // Iterate the elements of the array
        arr.forEach(function (item, idx) {
            sum += item;
        });
        // Returning the average of the numbers
        return sum / arr.length;
    }

    /* Calculating the average of the rain, temp, hum and light arrays. */
    const averageRain = averageCount(rainArray);
    const averageTemp = averageCount(tempArray);
    const averageHum = averageCount(humArray);
    const averageLigh = averageCount(lightArray);

    //recommedation conditions
    function recommend(monthly) {
        if (monthly === "January" && averageRain > 0) {
            return (
                <div className="">
                    <div className="card">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Maize Crops</h5>
                            <p className="card-text">Banking</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/havest.jpg" alt="tomato" />
                        <div className="card-body">
                            <h5 className="card-title">Tomato Crops</h5>

                            <ul className="card-text">
                                <li>Spraying</li>
                                <li>Weeding</li>
                                <li>Harvesting</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/dipping.jpg" alt="livestock" />
                        <div className="card-body">
                            <h5 className="card-title">Livestock Management</h5>

                            <ul className="card-text">
                                <li>Strategic Dipping </li>
                                <li>Disease Surveillance</li>
                                <li>Meat Inspection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        else if (monthly === "February" && averageRain > 0) {
            return (
                <div className="">
                    <div className="card">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Maize Crops</h5>
                            <p className="card-text">Construct Storage facilities in readiness for harvesting</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/havest.jpg" alt="tomato" />
                        <div className="card-body">
                            <h5 className="card-title">Tomato Crops</h5>

                            <ul className="card-text">
                                <li>Harvesting</li>
                                <li>Nursery Preparation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/dipping.jpg" alt="livestock" />
                        <div className="card-body">
                            <h5 className="card-title">Livestock Management</h5>

                            <ul className="card-text">
                                <li>Making Silage and hay</li>
                                <li>Mastitis Control</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        else if (monthly === 'March' && averageRain > 0) {

            return (
                <div className="">
                    <div className="card">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Maize Crops</h5>
                            <ul className="card-text">
                                <li>Construct Storage facilities</li>
                                <li>Harvesting</li>
                                <li>Purchasing Pesticide for Storage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/havest.jpg" alt="tomato" />
                        <div className="card-body">
                            <h5 className="card-title">Tomato Crops</h5>

                            <ul className="card-text">
                                <li>Harvesting</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/dipping.jpg" alt="livestock" />
                        <div className="card-body">
                            <h5 className="card-title">Livestock Management</h5>

                            <ul className="card-text">
                                <li>Stall Feeding </li>
                                <li>Vaccination Against Rabies</li>
                                <li>Strategic Dipping</li>
                                <li>Disease surveillance</li>
                                <li>Meat Inspection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        else if (monthly === "April" && averageRain > 0) {
            return (
                <>
                    <div className="card m-1">
                        <img className="card-img-top" src=" https://th.bing.com/th/id/OIP.fNkMI09qUhsi-4JTnqLt7gHaFj?pid=ImgDet&rs=1" />
                        <div className="card-body">
                            <h5 className="card-title">Maize Crops</h5>
                            <ul className="card-text">
                                <li>Harvesting</li>
                                <li>Constructing Storage facilities</li>
                                <li>Planting for Winter</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card m-1">
                        <img className="card-img-top" height={50} src="https://th.bing.com/th/id/OIP.GOONna1dC98OIg1mpXWmJQHaEK?pid=ImgDet&rs=1" alt="tomato" />
                        <div className="card-body">
                            <h5 className="card-title">GroundNuts Crops</h5>

                            <ul className="card-text">
                                <li>Lifting and Drying</li>
                                <li>Shelling</li>
                                <li>Grading</li>
                                <li>Seed Selection and Storage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card m-1">
                        <img className="card-img-top" src="https://neweralive.na/storage/uploads/2020/11/Farmers1.jpg" alt="livestock" />
                        <div className="card-body">
                            <h5 className="card-title">Livestock Management</h5>

                            <ul className="card-text">
                                <li>Newcastle Disease Vaccination </li>
                                <li>Disease Surveillance</li>
                                <li>Meat Inspection</li>
                            </ul>
                        </div>
                    </div>
                </>

            )
        }
        else if (monthly === "May" && averageRain > 0) {
            return (
                <div className="">
                    <div className="card">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Maize Crops</h5>
                            <ul className="card-text">
                                <li>Garden Preparation</li>
                                <li>Planting</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/havest.jpg" alt="tomato" />
                        <div className="card-body">
                            <h5 className="card-title">GroundNuts Crops</h5>

                            <ul className="card-text">

                                <li>Shelling</li>
                                <li>Grading</li>
                                <li>Seed Selection and Storage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/dipping.jpg" alt="livestock" />
                        <div className="card-body">
                            <h5 className="card-title">Livestock Management</h5>

                            <ul className="card-text">
                                <li>Remove Manure </li>
                                <li>Stall Feeding</li>
                                <li>Deworming</li>
                                <li>Meat Inspection</li>
                            </ul>
                        </div>
                    </div>
                </div>

            )
        }
        else if (monthly === "June") {
            return (
                <div className="">
                    <div className="card">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Maize Crops</h5>
                            <ul className="card-text">
                                <li>Harvesting</li>
                                <li>Constructing Storage facilities</li>
                                <li>Planting for Winter</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/havest.jpg" alt="tomato" />
                        <div className="card-body">
                            <h5 className="card-title">GroundNuts Crops</h5>

                            <ul className="card-text">
                                <li>Lifting and Drying</li>
                                <li>Shelling</li>
                                <li>Grading</li>
                                <li>Seed Selection and Storage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="./img/dipping.jpg" alt="livestock" />
                        <div className="card-body">
                            <h5 className="card-title">Livestock Management</h5>

                            <ul className="card-text">
                                <li>Newcastle Disease Vaccination </li>
                                <li>Disease Surveillance</li>
                                <li>Meat Inspection</li>
                            </ul>
                        </div>
                    </div>
                </div>

            )
        }
        else {
            return (
                <h1>oops</h1>
            )
        }
    }

    return (
        <div>
            <h4 className="card-header bg-primary text-white text-center">Recommend Farming Activities</h4>
            <div className="card-group">
                <div className="card m-1">
                    chart here
                </div>
                {recommend(moment().format('MMMM'))}
            </div>

            <div className='card-group mt-3'>

                <div className='card border-primary border-radius-rounded p-2'>
                    graph
                </div>

                <div className='card border-primary border-radius-rounded p-2'>
                    <table class="table table-hover ">
                        <thead className="thead bg-primary text-white">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Temperature</th>
                                <th scope="col">Humidity</th>
                                <th scope="col">Light Intensity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Average</th>
                                <td>{averageTemp} <sup>0</sup>C</td>
                                <td>{Math.round(averageHum)} g/m<sup>3</sup></td>
                                <td>{averageLigh} candela</td>
                            </tr>
                            <tr>
                                <th scope="row">Max</th>
                                <td>{Math.max(...tempArray)} <sup>0</sup>C</td>
                                <td>{Math.max(...humArray)} g/m<sup>3</sup></td>
                                <td>{Math.max(...lightArray)} candela</td>
                            </tr>
                            <tr>
                                <th scope="row">Min</th>
                                <td>{Math.min(...tempArray)} <sup>0</sup>C</td>
                                <td>{Math.min(...humArray)} g/m<sup>3</sup></td>
                                <td>{Math.min(...lightArray)} candela</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card-group mt-3">
                <div className="card  border-radius-rounded">
                    <Iframe url="https://thingspeak.com/apps/matlab_visualizations/452780?height=450&width=650"
                        width="650"
                        height="450"
                        id="myId"
                        className=""
                        display=""
                        position="relative"
                        sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts' />
                </div>
                <div className="card  border-radius-rounded ">
                    <Iframe url="https://thingspeak.com/apps/matlab_visualizations/452821?height=450&width=650"
                        width="650"
                        height="450"
                        id="myId"
                        className=""
                        display=""
                        position="relative"
                        sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts' />
                </div>

            </div>
        </div>
    )
}

export default ActivityTopper;