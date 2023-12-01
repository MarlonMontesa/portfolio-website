import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import axios from 'axios';


const Email = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const serviceId = 'service_mn213we'
        const templateId = 'template_hoe7adi'
        const publicKey = '79c0QGFEVl3fUHpPO'

        const templateParams = {
            
            
                from_name: name,
                from_email: email,
                to_name: 'Marlon',
                message: message
            
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log(response.data);
              setName('')
              setEmail('')
              setMessage('')
        })         
            
        .catch((error)=> {
            console.log(error.response.data)
        })
    }
  return (
    <div id='mail' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <hr className=' shadow-sm shadow-black mb-10'/>
        <h1 className='text-[#001b5e] text-4xl font-bold text-center mb-20'>Contact Me</h1>

        <div className=' rounded-xl border-solid border-2 border-black px-6 py-10'>
            <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col gap-y-3'>
                <label htmlFor="">Name: </label>
                <input type="text" value={name} className=' border-solid border-2 border-black mr-5' onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor="">Email: </label>
                <input type="text" value={email} className='border-solid border-2 border-black mr-5' onChange={(e) => setEmail(e.target.value)} required/>
                <label htmlFor="">message:</label>
                <textarea value={message} name="" id="" cols="30" rows="10" className='border-solid border-2 border-black mr-5' onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type='submit' className='border-solid border-2 border-black mr-5 rounded-md p-5 h-8 flex justify-center items-center bg-slate-400'>send</button>
            </form>
        </div>
    </div>
  )
}

export default Email