import { SiTailwindcss } from "react-icons/si"; 
import { FaBootstrap } from "react-icons/fa"; 
import { SiMui } from "react-icons/si"; 
import { SiExpress } from "react-icons/si"; 
import React from 'react'

import "../styles/Techstack.css"


import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
 import { FaGithub } from 'react-icons/fa'



const TechnologyStack = [


    {

        id: 1,
        technolgy: "HTML",
        icon: <FaHtml5 />

    },

    {

        id: 2,
        technolgy: "CSS",
        icon: <FaCss3 />

    },

    {

        id: 3,
        technolgy: "JAVASCRIPT"
        ,
        icon: <FaJs />

    },
    {

        id: 4,
        technolgy: "TailwindCSS"
        ,
        icon: <SiTailwindcss />

    },
    {

        id: 5,
        technolgy: "React.js"
        ,
        icon: <FaReact />

    },

    {

        id: 6,
        technolgy: "MUI"
        ,
        icon: <SiMui />

    },
    {

        id: 7,
        technolgy: "BootStrap"
        ,
        icon: <FaBootstrap />

    },
    {

        id: 8,
        technolgy: "Gsap"
        ,
        icon: <FaHtml5 />

    },

    {

        id: 9,
        technolgy: "Framer Motion"
        ,
        icon: <FaHtml5 />

    },
    {

        id: 10,
        technolgy: "Node.js"
        ,
        icon: <FaNodeJs />

    },
    {

        id: 11,
        technolgy: "Express.js"
        ,
        icon: <SiExpress />

    },

    {

        id: 12,
        technolgy: "mongodb"
        ,
        icon: <FaHtml5 />

    },
    {

        id: 13,
        technolgy: "Git And Github"
        ,
        icon: <FaGithub />

    },




]





const Techstack = () => {
    return (

        <React.Fragment>


            <div className="technology-section">

                <h1>Technical skill's</h1>
                <div className='technology-container'>




                    {

                        TechnologyStack.map(
                            (item) => {
                                return (

                                    <li className='technology' key={item.id}>
                                        <div className='icon'>{item.icon}</div>
                                        <p> {item.technolgy}</p>

                                    </li>


                                )
                            }
                        )









                    }


                </div>


            </div>





        </React.Fragment>



    )
}

export default Techstack