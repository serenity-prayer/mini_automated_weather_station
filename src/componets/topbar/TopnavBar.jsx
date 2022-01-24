import React from 'react';
import {Nav} from 'react-bootstrap';
import './TopnavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

function TopnavBar() {
    return (
        <div className="card bartop position-sticky">
            <div className="barwapper">
                <div className="topbarLeft">
                    <h1 className='text-center justify'>Min Automated Weather Station Dashboard</h1>
                </div>
                
            </div>
        </div>
    )
}

export default TopnavBar;
