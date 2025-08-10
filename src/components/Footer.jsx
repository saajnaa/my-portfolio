import React from 'react'
import { Link } from 'react-router-dom'



import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';


import "../styles/footer.css"

const Footer = () => {






  return (

    <>



      <footer>
 

        <div className="Social-links">

          <li> <FaFacebook /> </li>
          <li> <FaLinkedin /> </li>
          <li> <FaTiktok /> </li>
          <li> <BsTwitterX></BsTwitterX> </li>



        </div>


        <div className="developer"> ©2025 All Right Reserved. 
         

        </div>

      </footer>





    </>


  )
}

export default Footer