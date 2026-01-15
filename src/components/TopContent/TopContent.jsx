import React from 'react'
import {Link} from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Mr.Balaji S</h1>
            <p>A professional Web and App Developer</p>
            <a href='https://drive.google.com/file/d/1xqLr_yU4UZQjOnGwNP4xb-zeNKY9m770/view?usp=sharing' target='_blank'>
              <button className='topContent__downloadButton'>Download CV</button>
            </a>
            
            <Link to="projects" smooth={true} duration={500}>
                  <button className='topContent__workButton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent
