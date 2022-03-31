import React, { useState, useEffect } from 'react';
import {firebase} from './Firebase.js';
import { getDatabase, ref, push, set } from "firebase/database";
import {onValue } from "firebase/database";

function Firetable() {

    const [data, setData] = useState();

    useEffect(()=>{
        onValue(ref(firebase), snapshot => {
            const item = snapshot.val();
            setData(item.weatherdata);
          })
    });
    return(
        <div>
            {/* {data.map((humidity)=>(
                <li key={humidity}>{humidity.humidity}  </li>
            ))} */}
        </div>





















    )
}

export default Firetable;