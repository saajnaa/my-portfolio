import React from 'react'

import serviceImg from '../assets/Service.gif'
import '../styles/services.css'

function Services() {
    return (
        <>
            <div className="services">
                <h2>Here's what i can Do?</h2>
                <div className="horizontal-align">
                    <ul className='ul-service'>
                        <li>Frontend development</li>
                        <li> Backend development</li>
                         <li>Ai App development</li>
                        <li>Payment Integration</li>
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