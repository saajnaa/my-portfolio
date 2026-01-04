import React from 'react'
import { Link } from 'react-router-dom'

//============whatsapp logo============
import Whatsapplogo from '../assets/whatsapp.png'


// ==============css file============
import '../styles/whatsapp.css'


function Whatsapp() {
    return (
        <>
            <div className='whatsapp'>
                <Link
                    to="#"
                    onClick={(e) => {
                        e.preventDefault()
                        const url = 'https://wa.me/9779703922303'
                        window.open(url, '_blank', 'noopener,noreferrer')
                    }}
                    aria-label="Chat on WhatsApp"
                >
                    <img src={Whatsapplogo} alt="whatsapp logo" />
                </Link>
            </div>

        </>
    )
}

export default Whatsapp