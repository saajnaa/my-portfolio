import React from 'react'
import { Link } from 'react-router-dom'



import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


import "../styles/footer.css"

const Footer = () => {






  return (

    <>
     


      <footer>
 

        <div className="Social-links">

          <li> <Link to={`https://web.facebook.com/hecodes.js.py` } target='_blank'> <FaFacebook /> </Link></li>
          <li> <FaLinkedin /> </li>
          <li> <Link to={`https://github.com/saajnaa` } target='_blank'> <BsGithub /> </Link></li>
          <li>  <Link to={`https://tiktok.com/hecodes.js` } target='_blank'>  <FaTiktok /> </Link></li>
          <li> <Link to={`https://twitter.com/milkywayk218b` } target='_blank'>  <BsTwitterX/></Link> </li>



        </div>


        <div className="developer"> ©2025 All Right Reserved. 
         

        </div>

      </footer>





    </>


  )
}

export default Footer