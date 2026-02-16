import React from 'react'
import './Project.css'
import { useState } from 'react';

const Project = ({img, title, desc, link}) => {
  
    const [show,setShow] = useState(false);

    return (
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show ? (
                    <div className='project__Content'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <img src={img}/>
                )
            }    
            </div>
        </a>
  )
}

export default Project
