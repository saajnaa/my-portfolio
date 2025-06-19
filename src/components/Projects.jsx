import React, { useState } from 'react'

import '../styles/projects.css'

import gpcLogo from "../assets/project-img/gpc_logo.png"



function Projects() {

    const Projects = [

        {

            "id": 1,
            "name": "Golden Park College",
            "image": "gpc.jpg",
            "livingLink": "/project-alpha/1.html",
            "technologies": ["React", "TypeScript"]
        },
        {
            "id": 2,
            "name": "Alpha Beta Boarding School",
            "image": "gpc.jpg",
            "livingLink": "/project-beta/2.html",
            "technologies": ["Next.js", "Firebase"]
        },
        {
            "id": 3,
            "name": "Shree Nepal Rastriya Secondary School",
            "image": "gpc.jpg",
            "livingLink": "/project-gamma/3.html",
            "technologies": ["Express.js", "Tailwind CSS"]
        },
        {
            "id": 4,
            "name": "Edenburg college",
            "image": "gpc.jpg",
            "livingLink": "/project-delta/4.html",
            "technologies": ["Node.js", "Redux"]
        },
        {
            "id": 5,
            "name": "Barju Yuwa Club",
            "image": "gpc.jpg",
            "livingLink": "/project-epsilon/5.html",
            "technologies": ["AWS", "Kubernetes"]
        },
        {
            "id": 6,
            "name": "Project Zeta",
            "image": "gpc.jpg",
            "livingLink": "/project-zeta/6.html",
            "technologies": ["SvelteKit", "TypeScript"]
        },
        {
            "id": 7,
            "name": "Project Omega",
            "image": "gpc.jpg",
            "livingLink": "/project-omega/7.html",
            "technologies": ["Python", "Jupyter Notebook"]
        },
        {
            "id": 8,
            "name": "Project Theta",
            "image": "gpc.jpg",
            "livingLink": "/project-theta/8.html",
            "technologies": ["Node.js", "Express.js"]
        },
        {
            "id": 9,
            "name": "Project Phi",
            "image": "gpc.jpg",
            "livingLink": "/project-phi/9.html",
            "technologies": ["Go", "J2CL"]
        },
        {
            "id": 10,
            "name": "Project Chi",
            "image": "gpc.jpg",
            "livingLink": "/project-chi/10.html",
            "technologies": ["React Native", "Redux"]
        }






    ]


    return (


        <>


            <div className="project-section">


                <h2>Projects...!!</h2>
                <div className="project-container">

                    {



                        Projects.map(({ id, name, livingLink, technologies }) => {


                            return (<div className='project' key={id}>

                                <img src={gpcLogo} alt="logo" />
                                <p><span>Project Name:</span>{name}</p>
                                <p><span> Live Link:</span>{livingLink}</p>
                                <p> <span>Tech Stack: </span>{technologies.join(" ")}</p>

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