import React from 'react'
import TimelineItem from './TimelineItem'


const data = [
    {
        Year: '2019-2020',
        Title: 'Freshmen Year',
        Duration: 'July - June',	
        Details: 'Has an average of GWA of 1.43 and a Deans Lister for both 1st and 2nd Semester'
    },
    {
        Year: '2020-2021',
        Title: 'Sophomore Year',
        Duration: 'September - June',	
        Details: 'Has an average of GWA of 1.51 a Deans Lister for the 1st Semester'
    },
    {
        Year: '2021-2022',
        Title: 'Junior Year',
        Duration: 'September - July',	
        Details: 'Was successfully defended a mini thesis with a project and started to create a web app for the capstone project'
    },
    {
        Year: '2022-2023',
        Title: 'Senior Year',
        Duration: 'September - October',	
        Details: 'Graduated as Cum Laude and was a consistent Deans Lister and Presidents Lister'
    },
]
const Timeline = () => {
  return (
    <div id='Timeline' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>College Educational Timeline</h1>
            {data.map((item, idx) => (
                <TimelineItem 
                key={idx} 
                Year={item.Year}
                Title={item.Title}
                Duration={item.Duration}
                Details={item.Details}/>
            ))}
    </div>
  )
}

export default Timeline