import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'


const Main = () => {
  return (
    <div className='scroll-smooth' id='main'>
    <div>
        <img className='w-full h-screen object-cover object-left' src="https://cdn.wallpapersafari.com/32/47/DNtsoB.jpg" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'> 
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Marlon Montesa.</h1>
          <h2 className='flex sm:text-3xl text-2xl text-yellow-800'>I am 
          <TypeAnimation
      sequence={[
        'Aspiring Developer', // Types 'One'
        3000, // Waits 1s
        'Hardworking And Outstanding Student', // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        'Committed to be the best', // Types 'Three' without deleting 'Two'
        3000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />  
    </h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
        <a href="https://www.facebook.com/marlon.vmontesa?mibextid=ZbWKwL" target='_blank'><BsFacebook className='cursor-pointer' size={20} /></a>
        <a href="https://www.instagram.com/maaaarl_lon/" target='_blank'><BsInstagram className='cursor-pointer' size={20}/></a>
        <BsTwitter className='cursor-pointer' size={20}/>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target='_blank'><BsLinkedin className='cursor-pointer' size={20}/></a>
    </div>
        </div>
        
        </div>
        
    </div>
    



   
    </div>
    
  )
}

export default Main