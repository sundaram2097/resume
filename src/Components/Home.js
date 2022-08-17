import React from 'react';

// import background from "./images/header-background.jpg"
import { FaGithub, FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";


function Home() {


  return <>
    <div className='container-fluid'>
      <div className="back-img">
        <div className="text">

          <h2 className='text-center'>
          Ｍｅｅｎａｋｓｈｉｓｕｎｄａｒａｍ．Ｎ</h2>
            {/* <marquee direction='left' scrollamount="8"></marquee> */}
          
          <div className='text-center' id='icon'>
            <a target="_blank" href='https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjYwNzE2MjM4LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D' ><FaFacebook /></a>
            <a target="_blank" href='!#' ><FaTwitter /></a>
            <a target="_blank" href='https://www.linkedin.com/in/meenakshi-sundaram-a357a11b1/' ><FaLinkedinIn /></a>
            <a target="_blank" href='!#' ><FaInstagram /></a>
            <a target="_blank" href='https://github.com/sundaram2097' ><FaGithub /></a>

          </div>
        </div>
      </div>


      {/* <img className='imageone' src="./images/header-background.jpg" alt="header-background" style={{width:"20%;"}}/> */}



    </div>
  </>


}

export default Home
