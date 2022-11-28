import React from 'react';
import { Element } from 'react-scroll';
// import background from "./images/header-background.jpg"
import { FaGithub, FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";


function Home() {


  return <>
  <Element id='home'>
    <div className='container-fluid' >
      <div className="back-img">
        <div className="text">
        <div className='pt-5'></div>
        <div className='pt-5'></div>
        <div className='pt-5'></div>
       
          <h2 className='text-center pt-5 mt'>
          Ｍｅｅｎａｋｓｈｉｓｕｎｄａｒａｍ．Ｎ</h2>
            {/* <marquee direction='left' scrollamount="8"></marquee> */}
          
          <div className='text-center' id='icon'>
            <a target="_blank" rel="noreferrer" href='https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjYwNzE2MjM4LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D' ><FaFacebook /></a>
            <a target="_blank" rel="noreferrer" href='!#' ><FaTwitter /></a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/meenakshi-sundaram-a357a11b1/' ><FaLinkedinIn /></a>
            <a target="_blank" rel="noreferrer" href='!#' ><FaInstagram /></a>
            <a target="_blank" rel="noreferrer" href='https://github.com/sundaram2097' ><FaGithub /></a>

          </div>
        </div>
      </div>


      {/* <img className='imageone' src="./images/header-background.jpg" alt="header-background" style={{width:"20%;"}}/> */}



    </div>
    </Element>
  </>


}

export default Home
