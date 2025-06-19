import React from 'react'

import '../styles/navbar.css'


import logo from '../assets/sajan.jpg'
import { Link , NavLink } from 'react-router-dom'

function Navbar() {
    return (


        <>



            {/* navbar */}



            <div className='nav-container  '>


                <div className="nav-logo">

                    <img src={logo} alt="sajan logo" />
                    <h2>Sajan Rishidev</h2>

                </div>



 
                <ul>
                     <NavLink className= { ({isActive})=> isActive ? " Activelink " :  " link "  }  to="/home"> Home </NavLink> 
                    <NavLink className= { ({isActive})=> isActive ? " Activelink " :  " link "  }  to="/projects"> Projects </NavLink> 
                    <NavLink className= { ({isActive})=> isActive ? " Activelink " :  " link "  }  to="/resume"> Resume </NavLink> 
                    <NavLink className= { ({isActive})=> isActive ? " Activelink " :  " link "  }  to="/blog"> Blog </NavLink> 
                    <NavLink className= { ({isActive})=> isActive ? " Activelink " :  " link "  }  to="/contact"> Contact </NavLink>

                </ul>


            </div>








        </>



    )
}

export default Navbar