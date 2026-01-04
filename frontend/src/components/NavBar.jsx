import { AiOutlineHome } from "react-icons/ai"; 
import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi"


import '../styles/navbar.css'


import logo from '../assets/sajan.jpg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {


    const [showlink, Setshowlink] = useState(false);


    const handleclick = () => {


        Setshowlink(!showlink);



    }


    const navigate = useNavigate();


    return (


        <>



            {/* navbar */}

            <div className="nav-sec">

                <div className='nav-container  '>

                    <button onClick={() => navigate("/")} className='navbutton'>
                        <div className="nav-logo">

                            <img src={logo} alt="sajan logo" />
                            <h2>Sajan Rishidev</h2>

                        </div>

                    </button>


                    <ul className={showlink ? "mobile-menu" : "web-menu"}>
                        <NavLink onClick={() => Setshowlink(false)} className={({ isActive }) => isActive ? " Activelink " : " link "} to="/"> <AiOutlineHome /> </NavLink>
                        <NavLink onClick={() => Setshowlink(false)} className={({ isActive }) => isActive ? " Activelink " : " link "} to="/projects"> Projects </NavLink>
                        <NavLink onClick={() => Setshowlink(false)} className={({ isActive }) => isActive ? " Activelink " : " link "} to="/resume"> Resume </NavLink>
                        <NavLink onClick={() => Setshowlink(false)} className={({ isActive }) => isActive ? " Activelink " : " link "} to="/blog"> Blog </NavLink>
                        <NavLink onClick={() => Setshowlink(false)} className={({ isActive }) => isActive ? " Activelink " : " link "} to="/contact"> Contact </NavLink>

                    </ul>

                    <button onClick={handleclick} className="mobile-nav-icon">

                        <GiHamburgerMenu />

                    </button>



                </div>



            </div>




        </>



    )
}

export default Navbar