import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function Skills() {
  
   

    return <>
    <section className='aboutpage bg-dark'>
        <div className='container col-lg-6 col-12 pt-lg-0 pt-3 justify-content-center'>
            <br/>
            <h4 className='text-light text-center  mb-2'> 𝗠𝘆𝘀𝗸𝗶𝗹𝗹𝘀</h4>
            <label className='text-light'>HTML</label>
            <ProgressBar  animated variant="info" now={80} label={`${80}%`} /><br/>
            <label className='text-light'>CSS</label>
            <ProgressBar animated variant="info" now={60} label={`${60}%`}/><br/>
            <label className='text-light'>BOOTSTRAP</label>
            <ProgressBar animated variant="info" now={70} label={`${70}%`}/><br/>
            <label className='text-light'>JAVASCRIPT</label>
            <ProgressBar animated variant="info" now={55} label={`${55}%`}/><br/>
            <label className='text-light'>REACT JS</label>
            <ProgressBar animated variant="info" now={45} label={`${45}%`}/><br/>
            <label className='text-light'>NODE JS</label>
            <ProgressBar animated variant="info" now={50} label={`${50}%`}/><br/>
            <label className='text-light'>MY SQL</label>
            <ProgressBar animated variant="info" now={30} label={`${30}%`}/><br/>
            <label className='text-light'>MONGO DB</label>
            <ProgressBar animated variant="info" now={40} label={`${40}%`} />
           
          
        </div>
        </section>    
    </>
}

export default Skills