import React from 'react';
import Header from './components/Header/Header';
import './components/Header/Header.css'; 
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import './App.css'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/> 
      <SkillContainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact/>
    </div>
  )
}

export default App  