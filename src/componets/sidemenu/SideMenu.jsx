import React from 'react'
import './SideMenu.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

function SideMenu() {
    return (
        <Card className="position-sticky sidebarMenu">
            <div className="menu">
                <div className="titles">
                    <h3 className="title">Weather Data</h3>
                    <ul className="title_list">
                        <li className="list_item active">Home</li>
                        <li className="list_item">Analytics</li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}


export default SideMenu;