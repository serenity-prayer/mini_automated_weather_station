import React from 'react';
import {Nav} from 'react-bootstrap';
import './TopnavBar.css';

function TopnavBar() {
    return (
        <Nav className="topbar">
            <div className="barwapper">
                <div className="topbarLeft">
                    <h1>Min Automated Weather Station Dashboard</h1>
                </div>
                
            </div>
        </Nav>
    )
}

export default TopnavBar;
