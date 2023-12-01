import React from 'react'

const ProjectItem = ({img, title, tech, link}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[Black]'>
        <img src={img} alt={title} className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold tracking-wider text-center text-white'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
            <a href={link} target='_blank'>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text--lg'>visit site</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem