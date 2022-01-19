import React from 'react';
import Navbar from 'react-bootstrap';
import './TopnavBar.css';

function TopnavBar() {
    return (
        <Navbar className="topbar">
            <div className="barwapper">
                <div className="topbarLeft">
                    <h1>Min Automated Weather Station Dashboard</h1>
                </div>
                
            </div>
        </Navbar>
    )
}

export default TopnavBar;
