import React from 'react'
import {Link} from 'react-scroll'
import './TopContent.css'
import Photo from '../../assets/Photo_1.jpg' // Import the image

const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent__left'>
        <div className='topContent__profilePicture'>
          <img src={Photo} alt='Profile' />
        </div>
      </div>
      <div className='topContent__right'>
        <div className='topContent__container'>
          <h1>Mr. Balaji S</h1>
          <p>A professional Web and App Developer</p>
          <div className='topContent__buttonContainer'>
            <a href='https://drive.google.com/file/d/1xqLr_yU4UZQjOnGwNP4xb-zeNKY9m770/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
              <button className='topContent__downloadButton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
              <button className='topContent__workButton'>My Work</button>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
              <button className='topContent__contactButton'>Get in Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopContent
