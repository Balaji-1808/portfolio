import React from 'react'
import './ProjectContainer.css'
import Project from '../Project/Project'
import { Element } from 'react-scroll'
import Ecom from '../../assets/Ecom.jpg';

const ProjectContainer = () => {

    const projects = [
        {
            img: Ecom,
            title: "Ecom",
            desc:"An e-commerce app",
            link:"https://balaji-1808-github-io.vercel.app/",
        },

        // {
        //     img: Ecom,
        //     title: "Ecom",
        //     desc:"An e-commerce app",
        //     link:"https://balaji-1808-github-io.vercel.app/",
        // },

        // {
        //     img: Ecom,
        //     title: "Ecom",
        //     desc:"An e-commerce app",
        //     link:"https://balaji-1808-github-io.vercel.app/",
        // },

        // {
        //     img: Ecom,
        //     title: "Ecom",
        //     desc:"An e-commerce app",
        //     link:"https://balaji-1808-github-io.vercel.app/",
        // },

        // {
        //     img: Ecom,
        //     title: "Ecom",
        //     desc:"An e-commerce app",
        //     link:"https://balaji-1808-github-io.vercel.app/",
        // },

        // {
        //     img: Ecom,
        //     title: "Ecom",
        //     desc:"An e-commerce app",
        //     link:"https://balaji-1808-github-io.vercel.app/",
        // },
    ]

  return (
    <Element className='projectContainer' id='projects'>
        <h1>Projects</h1>
        <p>
           Here are some projects done by me
        </p>

        <div className='projectContainer__projects'>
            {projects.map((project, index) => {
                return(
                    <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
                )
            })}
        </div>

    </Element>
  )
}

export default ProjectContainer