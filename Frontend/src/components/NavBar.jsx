import React from 'react'

import { FaEquals } from 'react-icons/fa'
import { FaCross } from 'react-icons/fa'

import '../styles/navbar.css'


import logo from '../assets/sajan.jpg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {


    const handleclick = () => {





    }




    return (


        <>



            {/* navbar */}

<div className="nav-sec">

            <div className='nav-container  '>


                <div className="nav-logo">

                    <img src={logo} alt="sajan logo" />
                    <h2>Sajan Rishidev</h2>

                </div>




                <ul>
                    <NavLink className={({ isActive }) => isActive ? " Activelink " : " link "} to="/home"> Home </NavLink>
                    <NavLink className={({ isActive }) => isActive ? " Activelink " : " link "} to="/projects"> Projects </NavLink>
                    <NavLink className={({ isActive }) => isActive ? " Activelink " : " link "} to="/resume"> Resume </NavLink>
                    <NavLink className={({ isActive }) => isActive ? " Activelink " : " link "} to="/blog"> Blog </NavLink>
                    <NavLink className={({ isActive }) => isActive ? " Activelink " : " link "} to="/contact"> Contact </NavLink>

                </ul>

                <div className="mobile-nav-icon">


                    <li className='equal' onClick={handleclick}><FaEquals></FaEquals></li>
                    <li className='cancel'><FaCross></FaCross></li>

                </div>



            </div>



</div>




        </>



    )
}

export default Navbar