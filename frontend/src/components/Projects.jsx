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
import codingTest from '../assets/project-img/codingTest.png'
import byc from '../assets/project-img/byc.png'
import gpc from '../assets/project-img/gpc.png'



const Projectsdata = [


    {
        "id": 1,
        "name": "Coding Test App",
        "image": codingTest,
        "demo": "https://programming-quiz-five.vercel.app",
        "paragraph": "Programming quiz is a programming related web based quiz app",
        "sourceCode": "123"
    },
    {

        "id": 2,
        "name": "Golden Park College",
        "image": gpc,
        "demo": "https://golden-park-college.vercel.app",
        "paragraph": "Programming quiz is a programming related web based quiz app",
        "sourceCode": "123"
    },
    {
        "id": 3,
        "name": "Contact Application",
        "image": byc,
        "demo": "github.com/saajnaa/gpcl",
        "paragraph": "Programming quiz is a programming related web based quiz app",
        "sourceCode": "123"

    },
    {
        "id": 4,
        "name": "Barju Yuwa club",
        "image": byc,
        "demo": "https://barju-yuwa-club.vercel.app",
        "paragraph": "Programming quiz is a programming related web based quiz app",
        "sourceCode": "123"

    },


]


function Projects() {

    console.log(Projectsdata[0])

    return (


        <>


            <div className="project-section">


                <h2> Take A Closer Look!</h2>
                <div className="project-container">

                    {  

                        Projectsdata.map(({ id, name, image, demo, paragraph, sourceCode }) => {


                            return (<div className='project' key={id}>


                                <img src={image} alt="logo" />

                                <p> {name}</p>
                                <p>{paragraph}</p>

                                <div className='button-project'>
                                    <p> <Link to={sourceCode} target='_blank'> Source Code</Link></p>
                                    <p><Link to={demo} target='_blank'>view Demo</Link></p>
                                </div>

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