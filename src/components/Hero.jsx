import React from 'react'

import '../styles/hero.css'

import heroimg from '../assets/hero-img.jpg'

function Hero() {
    return (


        <>


            <div className="hero-section">


                <div className="left">


                    <h2>Hello,Im Sajan Rishidev . A <span>Website Developer</span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio tenetur similique unde ex nam facilis maiores, sint voluptas, laudantium asperiores recusandae exercitationem. Deserunt magnam accusantium nostrum quisquam alias sit magni.</p>

                    <div className="button">

                        <button>Projects</button>
                        <button>Resume</button>


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