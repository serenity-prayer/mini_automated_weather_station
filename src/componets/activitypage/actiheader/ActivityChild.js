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
                        <div className="card m-3">
                            <img className= "card-img-top" src="https://www.greenpeace.org/static/planet4-africa-stateless/2020/03/b4ee3071-samuel-wathome-at-his-farm-scaled.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Weeding Your Crops</h5>

                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                            </div>
                            {/*  */}
                        </div>
                        <div className="card m-3">
                            <img className= "card-img-top" src="https://th.bing.com/th/id/R.c29d8ae4fbf8d19022a96ee526ab1871?rik=zy%2bCcQTNCLtEmg&pid=ImgRaw&r=0" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Planting</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                            </div>
                        </div>
                        <div className="card m-3">
                            <img className='card-img-top' src='https://www.aljazeera.com/mritems/Images/2009/7/3/2009737125114954_8.jpg' alt='image'/>
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