import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import '../Components/navigation.css'
import orangeLogofinal from "../img/carousel-img/orangeLogofinal.jpg";

const Navbar = () => {
       // const handleClick = e => {
    //   e.preventDefault();
    //   document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
    //   document.getElementById('mainListDiv').classList.toggle('show_list');
    //   $('#mainListDiv').fadeIn();
    // }

   
    return (
        <header>
          <nav className="nav">
            <div className="container">

                <div id="mainListDiv" className="main_list">

                    <ul className="navlinks">
                         <li><NavLink to="/NotHome"><img className="cincylogo" id="logo" height="55px" width="70px" alt='' src= { orangeLogofinal } /></NavLink></li>
                         <li><NavLink to="/Attractions">Attractions</NavLink></li>
                         <li><NavLink to="/Covid">Covid 19</NavLink></li>
                         <li><NavLink to="/About">About</NavLink></li>
                         <li><NavLink to="/contact">Contact</NavLink></li>
                   </ul>

                </div>
             </div>
           </nav>
        </header>
    )
};

<Navbar fixed="top" />

export default withRouter(Navbar)



