import React, { use } from 'react'

import '../styles/hero.css'

import ReactTypingEffect from 'react-typing-effect';

import heroimg from '../assets/hero-img.jpg'
import { useNavigate } from 'react-router-dom';



function Hero() {

const Navigate = useNavigate();

    return (


        <>


            <div className="hero-section">


                <div className="left">


                    <h2>Transforming Concepts Into Functional Platforms <br /> <span> <ReactTypingEffect text={ [ "React Developer " , "MERN Developer", "AI Integration", "FUll Stack Developer" ]} speed={170} eraseSpeed={60} eraseDelay={90} typingDelay={30} /> </span></h2>
                    <p>With a strong foundation in JavaScript, I design and develop websites and applications using MongoDB, Express, React, and Node.js, with a focus on performance and simplicity</p>

                    <div className="button">

                        <button onClick={()=>{ Navigate("/projects")}}>Projects</button>
                        <button onClick={()=>{Navigate("/resume")}}>Resume</button>


                    </div>



                </div>


                <div className="right">
                    
                    <img src={heroimg} alt="sajan image for hero section" />
                    
                    
                    
                    
                    </div>


            </div>






        </>




    )
}

export default Hero