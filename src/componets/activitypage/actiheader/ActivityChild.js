import React, {useState,useEffect} from 'react';
import './Activity.css';
import {firebase} from './Firebase.js';
import { getDatabase, ref, push, set } from "firebase/database";
import {onValue } from "firebase/database";
import Iframe from 'react-iframe';
import "bootstrap/dist/css/bootstrap.min.css";
import ActivityTopper from './ActivityTopper';

function ActivityChild(){

  return(

    <div>
      
      <div className=''>
        <ActivityTopper/>
      </div>
      <div>
      </div>
    </div>
  )
}
export default ActivityChild;