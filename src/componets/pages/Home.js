import React from 'react';
import Rawdata from '../station/Rawdata';
import Temperaturechart from './charts/Temperaturechart';
import './Home.css'
function Home(){
    return (
        <>
            <h1>Hello from home </h1>
            <Rawdata/>
            <br className='line'/>
            <Temperaturechart/>
        </>
    )
}
export default Home;