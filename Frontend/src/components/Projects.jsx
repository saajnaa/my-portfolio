import React, { useState } from 'react'

import '../styles/projects.css'

import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'


import gpcLogo from "../assets/project-img/gpc_logo.png"


    const Projectsdata = [

        {

            "id": 1,
            "name": "Golden Park College",
            "image": gpcLogo,
            "livingLink": "github.com/saajnaa/gpc",
            "technologies": <FaReact/> 
        },
        {
            "id": 2,
            "name": "Alpha Beta Boarding School",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpcl",
            "technologies":  <FaReact/> 
        },
        {
            "id": 3,
            "name": "Shree Nepal Rastriya Secondary School",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies":<FaReact/> 
        },
        {
            "id": 4,
            "name": "Edenburg college",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies": <FaReact/> 
        },
        {
            "id": 5,
            "name": "Barju Yuwa Club",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies":<FaReact/> 
        },
        {
            "id": 6,
            "name": "Project Zeta",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies":<FaReact/> 
        },
        {
            "id": 7,
            "name": "Project Omega",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies": <FaReact/> 
        },
        {
            "id": 8,
            "name": "Project Theta",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies": <FaReact/> 
        },
        {
            "id": 9,
            "name": "Project Phi",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies":<FaReact/> 
        },
        {
            "id": 10,
            "name": "Project Chi",
            "image": "gpc.jpg",
            "livingLink": "github.com/saajnaa/gpc",
            "technologies": <FaReact/> 
        }






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

                                <div> </div>
                                <p> {name}</p>
                                <p>{livingLink}</p>
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