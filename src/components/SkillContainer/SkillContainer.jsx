import React from 'react'
import { Element } from 'react-scroll'
import Skills from '../../assets/Skills.jpg';
import LinearProgress from '@mui/material/LinearProgress'
import './SkillContainer.css' 

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
            <img src={Skills} alt=''/>
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            
            <div className='skillContainer__skillSet'>
                <h5>React</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                    <LinearProgress variant="determinate" value={90}/>
                </div>                
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Python</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                    <LinearProgress variant="determinate" value={75}/>
                </div>                
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Java</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                    <LinearProgress variant="determinate" value={80}/>
                </div>                
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Data Science</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                    <LinearProgress variant="determinate" value={50}/>
                </div>                
            </div>

            <div className='skillContainer__skillSet'>
                <h5>Artificial Intelligence</h5>
                <div className='skillContainer__slider skillContainer__slider5'>
                    <LinearProgress variant="determinate" value={30}/>
                </div>                
            </div>


        </div>
    </Element>
  )
}

export default SkillContainer