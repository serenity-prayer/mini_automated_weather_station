import React from 'react';
import './App.css';
import TopnavBar from './componets/topbar/TopnavBar';
import SideMenu from './componets/sidemenu/SideMenu';
import Home from './componets/pages/Home';
const App = () =>{
    return(
        <div className='app'>
            <TopnavBar/>
            
            <div className='containerh'>
                <SideMenu/>
                <div className="others_container">
                    <Home/>
                </div>
            </div>
           
        </div>
    )
}
export default App; 