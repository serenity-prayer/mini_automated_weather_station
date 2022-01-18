import React from 'react';
import './TopnavBar.css';
function TopnavBar() {
    return (
        <div className="topbar">
            <div className="barwapper">
                <div className="topbarLeft">
                    <h1>Min Automated Weather Station Dashboard</h1>
                </div>
                {/* <div className="topbarLeft">
                   <ul>
                        <li>Settings</li>
                        <li>About</li>
                   </ul>
                </div> */}
            </div>
        </div>
    )
}

export default TopnavBar;
