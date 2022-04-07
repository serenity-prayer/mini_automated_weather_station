// this componets is for recommendations and side graph on analytics componets

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';
import Iframe from 'react-iframe';
import {ComposedChart,Line,Area, Bar,Scatter,  PieChart, Pie, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function ActivityTopper() {

    const [recorain, setRain] = useState([]);
    const [recotemp, setRecoData] = useState([]);
    const [humiditydata, setHumidity] = useState([]);
    const [lightdata, setLight] = useState([]);
    const [data, setData] = useState([]);
    const [graph, setGraph] = useState([]);

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
        /**
         * Fetch the data from the ThingSpeak API and store it in a variable
         */
        function lightData() {
            fetch('https://api.thingspeak.com/channels/1635256/fields/4.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(items => items.json())
                .then(results => {
                    setLight(results.feeds)
                })
                .catch(err => { })
        }
        function feedsData() {
            fetch('https://api.thingspeak.com/channels/1635256/feeds.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(items => items.json())
                .then(results => {
                    setData(results.feeds)
                  
                })
                .catch(err => { })
        }

        //call the functions
        feedsData();
        humData();
        rainData();
        tempData();
        lightData();

    }, [])
    //elimating null variables and give it to new array
    let graphArray = [];
    //graph data object
    
    let data_object = {}
    for(let item of data){

        if(item.field1 !== null){
            data_object.temperature= item.field1;
            data_object.time =item.created_at;
            graphArray.push(data_object)
        }
        if(item.field2 !== null){
            data_object.humidity= item.field2;
            graphArray.push(data_object)
        }
               
    }

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
        else if (monthly === "April" || averageRain < 1) {
            return (
                <>
                    <div className="card   border-radius-rounded m-3 p-1">
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

                    <div className="card   border-radius-rounded m-3 p-1">
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

                    <div className="card   border-radius-rounded m-3 p-1">
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
                        <img className="card-img-top" src="https://th.bing.com/th/id/R.1ba40bc1a213028b6b5268c33cb72146?rik=dP1LdI0%2bknlsSQ&pid=ImgRaw&r=0" />
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
        else if(monthly === "July" && averageRain >0){
            return(
                <>
                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" src=" https://th.bing.com/th/id/OIP.fNkMI09qUhsi-4JTnqLt7gHaFj?pid=ImgDet&rs=1" />
                    <div className="card-body">
                        <h5 className="card-title">Maize Crops</h5>
                        <ul className="card-text">
                            <li>Purchasing Inputs</li>
                            <li>Marketing</li>
                            <li>Planting dry Season Crop</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" height={50} src="https://th.bing.com/th/id/OIP.GOONna1dC98OIg1mpXWmJQHaEK?pid=ImgDet&rs=1" alt="tomato" />
                    <div className="card-body">
                        <h5 className="card-title">GroundNuts Crops</h5>

                        <ul className="card-text">
                            <li>Marketing</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" src="https://neweralive.na/storage/uploads/2020/11/Farmers1.jpg" alt="livestock" />
                    <div className="card-body">
                        <h5 className="card-title">Livestock Management</h5>

                        <ul className="card-text">
                            <li>Stakk Feeding </li>
                            <li>Disease Surveillance</li>
                            <li>Meat Inspection</li>
                        </ul>
                    </div>
                </div>
            </>

            )
        }
        else if (monthly ==="August" && averageRain > 0){
            return(
                <>
                <div className="card   border-radius-rounded m-3 p-1">
                
                    <img className="card-img-top" src=" https://th.bing.com/th/id/R.43acaac7b525cfdb69915da9bc12f14f?rik=UJAb2gqEKD8TfQ&pid=ImgRaw&r=0" />
                    <div className="card-body">
                        <h5 className="card-title">Maize Crops</h5>
                        <ul className="card-text">
                            <li>Purchasing Inputs</li>
                            <li>Garden Preparation</li>
                            <li>Manure Application</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" height={50} src="https://th.bing.com/th/id/OIP.SqXq9zBdkhCvt3W4qD3VPwHaFS?pid=ImgDet&rs=1" alt="groundnuts" />
                    <div className="card-body">
                        <h5 className="card-title">GroundNuts Crops</h5>

                        <ul className="card-text">
                            <li>Purchasing Inputs</li>
                            <li>Ridging</li>
                            <li>Manure Application</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.mrw2TS1g2J6EltyGKWu2aQHaFj?pid=ImgDet&rs=1" alt="livestock" />
                    <div className="card-body">
                        <h5 className="card-title">Livestock Management</h5>

                        <ul className="card-text">
                            <li>Removing Manure </li>
                            <li>Constructing Livestock Houses</li>
                            <li>Anti-rabies Vaccination</li>
                            <li>Back Quarter Disease Vaccination</li>
                        </ul>
                    </div>
                </div>
            </>

            )
        }
        else if (monthly === "September" && averageRain > 0){
            return(
                <>
                <div className="card   border-radius-rounded m-3 p-1">
                
                    <img className="card-img-top" src="https://gardening-abc.com/wp-content/uploads/2015/03/how-to-use-manure-1024x828.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Maize Crops</h5>
                        <ul className="card-text">
                            <li>Garden Preparation</li>
                            <li>Purchasing Inputs</li>                            
                            <li>Manure Application</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" height={50} src="https://th.bing.com/th/id/OIP.MS3OZkYdOAEbj-3Lqp1UqgHaD-?pid=ImgDet&rs=1" alt="groundnuts" />
                    <div className="card-body">
                        <h5 className="card-title">GroundNuts Crops</h5>

                        <ul className="card-text">
                            <li>Marketing</li>
                            <li>Ridging</li>
                            <li>Purchasing Seeds</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" src="https://th.bing.com/th/id/R.34b420fe7507030f28203670e60a1425?rik=SPeVH7ZyWEdeZQ&pid=ImgRaw&r=0" alt="livestock" />
                    <div className="card-body">
                        <h5 className="card-title">Livestock Management</h5>

                        <ul className="card-text">
                            <li>Selecting Breeding Stock</li>
                            <li>Meat Inspection</li>
                            <li>Skin Disease Vaccination</li>
                        </ul>
                    </div>
                </div>
            </>
            )
        }
        else if (monthly === "October"  && averageRain >0){
            return( 
                <>
                <div className="card   border-radius-rounded m-3 p-1">
                
                    <img className="card-img-top" src="https://www.determinedtodevelop.org/wp-content/uploads/2019/10/Malawi-charity.jpg" />
                   
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" height={50} src="https://th.bing.com/th/id/R.69f297156189efbf1af249ba077616d7?rik=9PEgUT08kL4VAQ&riu=http%3a%2f%2fwww.ethicalteapartnership.org%2fwp-content%2fuploads%2f2019%2f07%2f9O6A4346-Malawi-Climate-Change.jpg&ehk=plcyZ1yGc5KG6zZUaj%2f5xERNoCCIZfkwsKPj2ZNI8Sk%3d&risl=&pid=ImgRaw&r=0" alt="groundnuts" />
                    <div className="card-body">
                        <h5 className="card-title">Holiday Time </h5>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" src="https://th.bing.com/th/id/R.34b420fe7507030f28203670e60a1425?rik=SPeVH7ZyWEdeZQ&pid=ImgRaw&r=0" alt="livestock" />
                    <div className="card-body">
                        <h5 className="card-title">Livestock Management</h5>

                        <ul className="card-text">
                            <li>Selecting Breeding Stock</li>
                            <li>Meat Inspection</li>
                            <li>Skin Disease Vaccination</li>
                        </ul>
                    </div>
                </div>
            </>

            )
        }
        else if (monthly === "November" && averageRain < 1){
            return(
                <>
                <div className="card   border-radius-rounded m-3 p-1">
                
                    <img className="card-img-top" src="https://gardening-abc.com/wp-content/uploads/2015/03/how-to-use-manure-1024x828.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Maize Crops</h5>
                        <ul className="card-text">
                            <li>Planting</li>
                            <li>Basal Dressing</li>                            
                            <li>Weeding</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" height={50} src="https://th.bing.com/th/id/R.fd77afad048cda2907df10a96be0afa1?rik=YJTeF4%2fD7uFaaA&pid=ImgRaw&r=0" alt="groundnuts" />
                    <div className="card-body">
                        <h5 className="card-title">GroundNuts Crops</h5>

                        <ul className="card-text">
                            <li>Planting</li>
                            <li>Supplying</li>
                            <li>Weeding</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" src="https://th.bing.com/th/id/R.34b420fe7507030f28203670e60a1425?rik=SPeVH7ZyWEdeZQ&pid=ImgRaw&r=0" alt="livestock" />
                    <div className="card-body">
                        <h5 className="card-title">Livestock Management</h5>

                        <ul className="card-text">
                            <li>Selecting Breeding Stock</li>
                            <li>Meat Inspection</li>
                            <li>Skin Disease Vaccination</li>
                        </ul>
                    </div>
                </div>
            </>
            )
        }
        else if (monthly ==="December" && averageRain < 1){
            return(
                <>
                <div className="card   border-radius-rounded m-3 p-1">
                
                    <img className="card-img-top" src="https://gardening-abc.com/wp-content/uploads/2015/03/how-to-use-manure-1024x828.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Maize Crops</h5>
                        <ul className="card-text">
                            <li>Planting</li>
                            <li>Basal Dressing</li>                            
                            <li>Weeding</li>
                            <li>Supplying</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" height={50} src="https://th.bing.com/th/id/R.fd77afad048cda2907df10a96be0afa1?rik=YJTeF4%2fD7uFaaA&pid=ImgRaw&r=0" alt="groundnuts" />
                    <div className="card-body">
                        <h5 className="card-title">GroundNuts Crops</h5>

                        <ul className="card-text">
                            <li>Planting</li>
                            <li>Supplying</li>
                            <li>Weeding</li>
                        </ul>
                    </div>
                </div>

                <div className="card   border-radius-rounded m-3 p-1">
                    <img className="card-img-top" src="https://th.bing.com/th/id/R.34b420fe7507030f28203670e60a1425?rik=SPeVH7ZyWEdeZQ&pid=ImgRaw&r=0" alt="livestock" />
                    <div className="card-body">
                        <h5 className="card-title">Livestock Management</h5>

                        <ul className="card-text">
                            <li>Selecting Breeding Stock</li>
                            <li>Meat Inspection</li>
                            <li>Skin Disease Vaccination</li>
                        </ul>
                    </div>
                </div>
            </>
            )
        }

        else {
            return (
                <>
                    <div className="card">
                        <p>Climate change has made weather unpredictable</p>
                        <p>Follow Extension Farmers advice in this Season</p>
                    </div>
                </>
            )
        }
        
    }
   
    return (
        <div>
            <h4 className="card-header bg-primary text-white text-center">Recommend Farming Activities</h4>
            <div className="card-group">
                <div className="card m-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            width={500}
                            height={400}
                            data={graphArray}
                            margin={{
                                top: 20,
                                right: 80,
                                bottom: 20,
                                left: 20,
                            }}>
                            <Line dataKey="temperature" stroke="blue" dot={false} activeDot={false} legendType="none" />
                            <Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" />
                        </ComposedChart>
                        
                    </ResponsiveContainer>
                </div>
                {recommend(moment().format('MMMM'))}
            </div>
            
            <div className='card-group mt-3'>

                <div className='card  border-radius-rounded p-2'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart width={650} height={450} data={graphArray}>
                            <YAxis/>
                            <XAxis dataKey="time"/>
                            <Tooltip/>
                            <Legend/>
                            <CartesianGrid stroke="#f5f5f5" />
                            <Bar dataKey="temperature" barSize={20} fill="#FF5733 " />
                            <Bar dataKey="humidity" barSize={20} fill="#0040FA" />                            
                            <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
                        </ComposedChart>
                        
                    </ResponsiveContainer>
                </div>

                <div className='card  border-radius-rounded p-2'>
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
                                <td>{Math.round(averageTemp)} <sup>0</sup>C</td>
                                <td>{Math.round(averageHum)} g/m<sup>3</sup></td>
                                <td>{Math.round(averageLigh)} candela</td>
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