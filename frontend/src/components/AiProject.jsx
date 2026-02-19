import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AiProject.css'


// importing images
import aiImage from '../assets/project-img/ai-image.png'


function AiProject() {

    const AiProjects = [


        {
            "id": 1,
            "name": "Nepo Ai",
            "image": aiImage,
            "paragraph": "AI Without Limits — Redefining What’s Possible with AI. Experience the future of artificial intelligence with Nepo AI, where innovation meets limitless possibilities. Join us on this exciting journey as we redefine what's possible with AI.",
            "demo": "https://nepoai.vercel.app ",
            "sourceCode": "123"

        },

    ]

    return (
        <>
            <div className='main'>
                <h2>Artificial Intelligence</h2>

                {

                    AiProjects.map(({ id, name, image, paragraph, demo, sourceCode }) => {

                        return <div className='container' key={id}>
                            <img src={image} alt="" />

                            <div className='ai-details'>
                                <h3>{name}</h3>
                                <p>{paragraph}</p>

                                <div className='button-Aiproject'>
                                    <p> <Link to={sourceCode} target='_blank'> Source Code</Link></p>
                                    <p><Link to={demo} target='_blank'>view Demo</Link></p>
                                </div>

                            </div>

                        </div>

                    })


                }

            </div>


        </>

    )
}

export default AiProject