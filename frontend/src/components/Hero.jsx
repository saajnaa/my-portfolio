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


                    <h2>Hello, Im Sajan Rishidev. A <br /> <span> <ReactTypingEffect text={ [ "React Developer " , "MERN Developer", "AI Integration", "LangChain Developer" ]} speed={170} eraseSpeed={60} eraseDelay={90} typingDelay={30} /> </span></h2>
                    <p>With a strong foundation in JavaScript, I build scalable and intuitive digital experiences using MongoDB, Express, React, and Node.js.. Using MERN stack with a focus on AI integration, LangChain workflows, and fast, scalable interfaces.</p>

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