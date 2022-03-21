import React from 'react';
import Iframe from 'react-iframe';
import "bootstrap/dist/css/bootstrap.min.css";

function Charts() {
  const thingspeak ="K1BT6Y77BEFGSQSB";
  const channel  ="1635256";
  return (

    <div>     
          <div className='card-group'>
              <div className="card border-primary border-radius-rounded m-3">
                  <Iframe  url="https://thingspeak.com/channels/1635256/charts/1?api_key=K1BT6Y77BEFGSQSB?start=2022-01-18&bgcolor=%708090&color=4169E1&dynamic=true&results=100&title=Temperature&type=spline&xaxis=time&yaxis=0C"
                      width="450"
                      height="260"
                      id="myId"
                      className=""
                      display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
              </div>
              <div className="card border-primary  border-radius-rounded m-3">
                  <Iframe url="https://thingspeak.com/channels/1635256/charts/2?api_key=K1BT6Y77BEFGSQSB?start=2022-01-18&bgcolor=%708090&color=4169E1&dynamic=true&results=100&title=Humidity&type=spline&xaxis=time&yaxis=%25"
                      width="450"
                      height="260"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
              </div>
              <div className="card border-primary  border-radius-rounded m-3">
                  <Iframe url="https://thingspeak.com/channels/1635256/charts/4?api_key=K1BT6Y77BEFGSQSB?start=2022-01-18&bgcolor=%708090&color=4169E1&dynamic=true&results=100&title=Light Sensor&type=spline&xaxis=time&yaxis=val"
                      width="450"
                      height="260"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
              </div>
          </div>
       
    </div>
      
  )
}

export default Charts