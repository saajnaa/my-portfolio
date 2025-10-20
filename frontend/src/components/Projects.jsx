import React, { useState } from 'react'
import { Link } from 'react-router-dom';


//=========== React Icons================================
import { DiJsBadge } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { CgLink } from "react-icons/cg";


import '../styles/projects.css'


//==================== photo============================
import gpcLogo from "../assets/project-img/gpc-college.png"
import bycLogo from "../assets/project-img/byc-club.png"
import NepoaiLogo from "../assets/project-img/Nepoai.png"
import EdenburghLogo from "../assets/project-img/Edenburgh.png"
import ContactLogo from "../assets/project-img/contact-fevicon.png"

const Projectsdata = [


    {
        "id": 1,
        "name": "Programming Quiz",
        "image": bycLogo,
        "livingLink": "https://programming-quiz-five.vercel.app",
        "technologies": [<FaReact />]
    },
    {
        "id": 2,
        "name": "Nepo Ai",
        "image": NepoaiLogo,
        "livingLink": "https://nepoai.vercel.app ",
        "technologies": [<FaReact />, < FaNodeJs />, <SiExpress />]

    },
    {
        "id": 3,
        "name": "Contact Application",
        "image": ContactLogo,
        "livingLink": "github.com/saajnaa/gpcl",
        "technologies": [<FaReact />, < FaNodeJs />, <SiExpress />, <SiMongodb />]
    },
    {

        "id": 4,
        "name": "Golden Park College",
        "image": gpcLogo,
        "livingLink": "https://golden-park-college.vercel.app",
        "technologies": [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />]

    },
    {
        "id": 5,
        "name": "Barju Yuwa club",
        "image": bycLogo,
        "livingLink": "https://barju-yuwa-club.vercel.app",
        "technologies": [<FaReact />, < FaNodeJs />, <SiExpress />, <SiMongodb />]
    },
    {
        "id": 6,
        "name": "Edenburg college",
        "image": EdenburghLogo,
        "livingLink": "https://edenburgh-college.vercel.app",
        "technologies": [<AiFillHtml5 />, <DiCss3 />, <DiJsBadge />]
    },

]


function Projects() {


    return (


        <>


            <div className="project-section">


                <h2>Projects</h2>
                <div className="project-container">

                    {



                        Projectsdata.map(({ id, name, image, livingLink, technologies }) => {


                            return (<div className='project' key={id}>

                                <div> <img src={image} alt="logo" /></div>
                                <p> {name}</p>
                                <p><Link to={livingLink} target='_blank'>preview Link </Link><CgLink /></p>
                                <p>  {technologies}</p>

                            </div>

                            )

                        })






                    }

                </div>






            </div>








        </>



    )
}

export default Projects