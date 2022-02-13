import React from 'react';
import Iframe from 'react-iframe';
import "bootstrap/dist/css/bootstrap.min.css";

function Charts() {
  return (
    <div>
       
          <div className='card-group'>
              <div className="card border-primary border-radius-rounded m-3">
                  <Iframe url="https://thingspeak.com/channels/1635256/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=spline&xaxis=time&yaxis=0C"
                      width="450"
                      height="260"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
              </div>
              <div className="card border-primary m-3">
                  <Iframe url="https://thingspeak.com/channels/1635256/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=spline&xaxis=time&yaxis=%25"
                      width="450"
                      height="260"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      sandbox='allow-pointer-lock allow-forms allow-popups allow-same-origin allow-scripts'/>
              </div>
              <div className="card border-primary m-3">
                  <Iframe url="https://thingspeak.com/channels/1635256/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=spline&xaxis=time&yaxis=val"
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