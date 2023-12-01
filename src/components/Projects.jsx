import React from 'react'
import dashboard from '../assets/dashboard.png'
import SmartMIS from '../assets/SmartMIS.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Projects</h1>
        <p className='text-center py=8 mb-7'>The following projects were a combination of personal and academic projects, these are a combination of dynamic and static.
          Please put the cursor on each projects and visit the site click to visit the site
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem img={dashboard} title='Dashboard App' tech='ReactJs' link=""/>
          <ProjectItem img={SmartMIS} title='Capstone Project' tech='ASP.NET' link='http://marlonproject-001-site1.htempurl.com/'/>
        </div>

          
      

    </div>
  )
}

export default Projects