
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Navbar} from "react-bootstrap";
import './navmenu.css';

function Navmenu() {
  return (
    <center className="heading">
      <Navbar className="barwapper" >
          <div clssName="topbar">
             <h3 >Weather Station Dashboard</h3>
          </div>
      </Navbar>

    </center>
  );
}
export default Navmenu;