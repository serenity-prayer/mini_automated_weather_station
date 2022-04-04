import React, {useState, useEffect} from 'react';

function Recommend(){

    const [recotemp, setRecoData] = useState([]); 
    const [rainData, setRainData] = useState([]);
    const [humiditydata, setHumidity] = useState([]);

    useEffect(() => {
        function tempData(){
            fetch('https://api.thingspeak.com/channels/1635256/fields/1.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(items => items.json())
                .then(results =>{
                    setRecoData(results.feeds)
                })
                .catch(err=>{})
        }

        function rainData(){
            fetch('https://api.thingspeak.com/channels/1635256/fields/3.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
                .then(rain => rain.json())
                .then(rains =>{
                    setRainData(rains.feeds)
                })
                .catch(err=>{})
        }
        function humidityData(){
          fetch('https://api.thingspeak.com/channels/1635256/fields/2.json?api_key=K1BT6Y77BEFGSQSB&&average=monthly')
              .then(rain => rain.json())
              .then(rains =>{
                  setHumidity(rains.feeds)
              })
              .catch(err=>{})
      }

        tempData();
        rainData();
        humidityData();
        
      });

      //removing null values for rains
      let rainArray = []
      for (let item of rainData) {
        if (item.field3 !== null) {
            //returning the to new array rainArray
            rainArray.push(parseInt(item.field3));
        } 
      }

      //removing null values for temperature
      let tempArray = []
      for (let item of recotemp) {
        if (item.field3 !== null) {
            //returning the to new array tempArray
            tempArray.push(parseInt(item.field3));
        } 
      }  
      
      //removing null values for humidity
      let humArray = []
      for (let item of humiditydata) {
        if (item.field3 !== null) {
            //returning the to new array humArray
            humArray.push(parseInt(item.field3));
        } 
      }
      
      //average rain count
      function averageRainCount(arr) {
        var sum = 0;
        // Iterate the elements of the array
        arr.forEach(function (item, idx) {
          sum += item;
        });
        // Returning the average of the numbers
        return sum / arr.length;
      }
      
     // console.log(averageRainCount (rainArray));
      
     // console.log(rainArray);
    return(
        <div>
          {console.log(averageRainCount(rainArray))}
        </div>
    )
}

export default Recommend;