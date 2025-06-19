import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/footer.css"

const Footer = () => {
  return (

    <>



      <footer>

        <div className="Social-links">

          <li> facebook. </li>
          <li> Linkdin.</li>
          <li> Tiktok. </li>
          <li> X. </li>



        </div>


        <div className="developer"> ©2025 All Right Reserved. Developed By
          <Link className='link'> Saaj Naa </Link>

        </div>

      </footer>





    </>


  )
}

export default Footer