import React from 'react'
import Experience from '../ExperienceBox/Experience'
import { Element } from 'react-scroll'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__Info'> 
            <Experience number='10+' title={'Hands On Courses'}/>
            <Experience number='5+' title={'Projects'} style={{backgroundColor:'#f64c08'}}/>
            <Experience number='50+' title={'Event Participations'}/>
        </div>
    </Element>
  )
}

export default ExperienceContainer