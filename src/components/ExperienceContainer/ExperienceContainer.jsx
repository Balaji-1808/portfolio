import React from 'react'
import Experience from '../ExperienceBox/Experience'
import { Element } from 'react-scroll'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='experience'> {/* Updated id to match Link tag */}
        <h1>Experience</h1>
        <div className='experienceContainer__Info'> 
            <Experience className="experience-card" number='5+' title={'Hands On Courses'} />
            <Experience className="experience-card" number='10+' title={'Projects'} style={{backgroundColor:'#f64c08'}}/>
            <Experience className="experience-card" number='50+' title={'Event Participations'}/>
        </div>
    </Element>
  )
}

export default ExperienceContainer