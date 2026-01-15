import React from 'react'
import './ProjectContainer.css'
import Project from '../Project/Project'
import { Element } from 'react-scroll'
import flipcart2 from '../../assets/flipcart2.svg';
import ecom from '../../assets/ecom.svg';
import blog from '../../assets/blog.svg';
import festx from '../../assets/festx.svg';

const ProjectContainer = () => {

    const projects = [
        {
            img: ecom,
            title: "Ecom",
            desc:"An e-commerce app",
            link:"https://balaji-1808-github-io.vercel.app/",
        },

        {
            img: flipcart2,
            title: "Flipkart-Clone",
            desc:"Clone of a leading e-commerce app",
            link:"https://flipcart-clonne.netlify.app/",
        },

        {
            img: festx,
            title: "FestX'25",
            desc:"A national level symposiyum site",
            link:"https://festx.in/",
        },

        {
            img: blog,
            title: "BlogSite",
            desc:"A community-blog application",
            link:"https://github.com/Balaji-1808/blogsite-backend",
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