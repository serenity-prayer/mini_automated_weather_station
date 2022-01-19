import React from 'react';
import Rawdata from '../station/Rawdata';
import Temperaturechart from './charts/Temperaturechart';
import {Card, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '10:20',
      temp: 40,
      hum: 69,
      amt: 34,
    },
    {
      name: '12:00',
      temp: -10,
      hum: 70,
      amt: 220,
    },
    {
      name: '13:30',
      temp: 29,
      hum: 98,
      amt: 20,
    },
    {
      name: '14:30',
      temp: 21,
      hum: 8,
      amt: 20,
    },
    {
      name: '15:00',
      temp: 18,
      hum: 48,
      amt: 181,
    },
    {
      name: '16:00',
      temp: 10,
      hum: 300,
      amt: 200,
    },
    {
      name: '17:00',
      temp: 29,
      hum: 10,
      amt: 21,
    },
  ];

function Home(){
    return (
        <div className="bgground">
            <Rawdata/>
            <div>
            <CardGroup className="bgground">

                <Card>
                    <Card.Body variant="top">
                    <Card.Title>Humidity</Card.Title>
                    <ResponsiveContainer style={{ width: '18rem', height: '15rem' }} >
                            <LineChart data = {data}>
                                <XAxis dataKey="name" stroke ="#ffff"/>
                                <Line type="monotone" dataKey="temp" stroke ="#ffff" />
                                <Tooltip/>
                                <CartesianGrid dataKey={data.temp} stroke ="#22577E"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Card.Body>
                    <Card.Footer>
                    <h4 className="text-muted">Last updated 3 mins ago</h4>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Body variant="top">
                        <Card.Title>Humidity</Card.Title>
                        <ResponsiveContainer style={{ objectFit: 'cover',borderRadius: 55,width: '50vw',height: '30vh'}  }>
                            <LineChart data = {data}>
                                <XAxis dataKey="hum" stroke ="#ffff"/>
                                <Line type="monotone" dataKey="temp" stroke ="#ffff" />
                                <Tooltip/>
                                <CartesianGrid dataKey={data.hum} stroke ="#22577E"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Card.Body>
                    <Card.Footer>
                        <h4 className="text-muted">Last updated 3 mins ago</h4>
                    </Card.Footer>
                </Card>

                <Card>
                    
                    <Card.Body>
                    <Card.Title>Humidity</Card.Title>
                    <ResponsiveContainer style={{ width: '18rem', height: '15rem'}}  >
                        <LineChart data = {data}>
                                <XAxis dataKey="hum" stroke ="#ffff"/>
                                <Line type="monotone" dataKey="temp" stroke ="#ffff" />
                                <Tooltip/>
                                <CartesianGrid dataKey={data.hum} stroke ="#22577E"/>
                        </LineChart>

                    </ResponsiveContainer>
                    </Card.Body>
                    <Card.Footer>
                    <h4 className="text-muted">Last updated 3 mins ago</h4>
                    </Card.Footer>
                </Card>
                </CardGroup>
            </div>

            
        </div>
            
        
    )
}
export default Home;