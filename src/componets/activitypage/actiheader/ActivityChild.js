import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Moment } from 'moment';

function ActivityChild(){
    return(
       <div>
            <div className="row">
                <h4 className='m-1 row-header text-center text-primary'>Suggested Farming Activities</h4>
                <div className="">
                  <div className='card-group'>
                        <div className="card">
                            <img className= "card-img-top" src="https://live.staticflickr.com/4145/5057153772_af8d9b0093_b.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Weeding Your Crops</h5>

                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                            </div>
                            {/*  */}
                        </div>
                        <div className="card">
                            <img className= "card-img-top" src="https://th.bing.com/th/id/R.73f96fafef3318d3c35487f4eac86495?rik=%2bR3YWzlcB0S8Iw&riu=http%3a%2f%2fwww.heritageaflame.org%2fwp-content%2fuploads%2f2013%2f11%2fmaize.jpg&ehk=blDZ2MmAbi3V34sF%2bkfVNRFLTmK6Mf9Km5rcWDeyI4s%3d&risl=&pid=ImgRaw&r=0" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Planting</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                            </div>
                        </div>
                        <div className="card">
                            <img className='card-img-top' src='https://agricsite.com/wp-content/uploads/2020/06/Maize-Harvesting.jpg' alt='image'/>
                            <div className="card-body">
                                <h5 className="card-title">Haversting</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                            </div>
                        </div>

                  </div>
                
                </div>
            </div>
            <div className='row'>

            </div>
       </div>
    )
}
export default ActivityChild;