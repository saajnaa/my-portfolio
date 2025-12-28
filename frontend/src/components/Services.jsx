import React from 'react'

import serviceImg from '../assets/Service.jpg'
import '../styles/services.css'

function Services() {
    return (
        <>
            <div className="services">
                <h2>The Work I Can DO For You</h2>
                <div className="horizontal-align">
                    <ul className='ul-service'>
                        <li>Static website Development</li>
                        <li>Dynamic Website Development</li>
                        <li>E-Commerce Website</li>
                        <li>Employ/School Management System</li>
                        <li>Ai integration</li>
                        <li>Local Payment Integration</li>
                    </ul>

                    <div className="service-img">
                        <img src={serviceImg} alt="service img" />

                    </div>
                </div>
            </div>


        </>
    )
}

export default Services