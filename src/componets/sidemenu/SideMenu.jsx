import React from 'react'
import './SideMenu.css'

function SideMenu() {
    return (
        <div className='sidebarMenu'>
            <div className="menu">
                <div className="titles">
                    <h3 className="title">Weather Data</h3>
                    <ul className="title_list">
                        <li className="list_item active">Home</li>
                        <li className="list_item">Analytics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default SideMenu;