import React from 'react'
import {Element} from 'react-scroll';


function About() {

  return <>
  <Element id='about' >
  <div className='aboutpage bg-dark abouts' >
  <div className='circle'>
          <img src="./images/profilepic.png" alt='' />
          <div className="content">
            <h4 className='aboutme '>ABOUT ME</h4>

            <p className=''>I'm  entry level full stack developer with six months of experience in designing,
              developing and implementing the application with solution using wide range of technology and programming languages.
              Seeking for best development experience and hands-on technical projects in a challenging
              role as a full stack developer.</p>
            <div className='row pb-3'>
              <div className='col text-center itext'> <i className="fa-brands fa-html5 fs-3 f1"></i><br />HTML</div>
              <div className='col text-center itext'><i className="fa-brands fa-square-js fs-3 f2"></i><br />Javascript </div>
              <div className='col text-center  itext'><i className="fa-brands fa-react fs-3 f3"></i><br />React </div>
              <div className='col text-center itext'><i className="fa-solid fa-database fs-3 f2"></i><br />SQL </div>
              <div className='col text-center itext'><i className="fa-brands fa-bootstrap fs-3  f5"></i><br />Bootstrap</div>
              <div className='col text-center itext'> <i className="fa-brands fa-node-js  fs-3 f6"></i><br />Nodejs </div>
            </div>
            <div className='text-center '>
              <a href='https://drive.google.com/file/d/1i0MgeC_131BcdHgnbY48BEMAgi6ecJaV/view?usp=share_link'>
              <button className='btn btn-warning'>DOWNLOAD CV <i className="fa-solid fa-download"></i></button>
              </a>
             
            </div>
          </div>

        </div>
  
    {/* <div className='container d-flex justify-content-center text-light '>
      
      <div className='row mt-3'>
      <div className='col-4'>
        <img className='image ' src='./images/profilepic.jpg'  style={{height:'250px',width:"220px"}} alt='pictur'/>
      </div>
      
        <div className='col'>
        
        <h2 className='text-center mt-3'>𝙨𝙤, 𝙒𝙝𝙤 𝙖𝙢 𝙄?</h2>
        <p className='abouttext  text-muted'>I am Meenakshi sundaram, I live in Madurai , I am always punctual person, ambitious and hardworking individual, Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. A key strength is communication building strong relationships with friends and colleague in order to deliver the best results..
        
        I am Meenakshi sundaram, I live in Madurai with my family, I am always punctual person, ambitious and hardworking individual, Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. A key strength is communication building strong relationships with friends and colleague in order to deliver the best results..I am Meenakshi sundaram, I live in Madurai with my family, I am always punctual person, ambitious and hardworking individual, Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. A key strength is communication building strong relationships with friends and colleague in order to deliver the best results..</p>
      </div>
        <div className='row pb-5'>
            <div className='col text-center itext'> <i className="fa-brands fa-html5 fs-3 f1"></i><br/>HTML</div>
            <div className='col text-center itext'><i className="fa-brands fa-square-js fs-3 f2"></i><br/>Javascript </div>
            <div className='col text-center  itext'><i className="fa-brands fa-react fs-3 f3"></i><br/>React </div>
            <div className='col text-center itext'><i className="fa-solid fa-database fs-3 f2"></i><br/>SQL </div>
            <div className='col text-center itext'><i className="fa-brands fa-bootstrap fs-3  f5"></i><br/>Bootstrap</div>
            <div className='col text-center itext'> <i className="fa-brands fa-node-js  fs-3 f6"></i><br/>Nodejs </div>
         </div>
         <div className='text-center '>
      <button className='button'>DOWNLOAD CV <i className="fa-solid fa-download"></i></button> 
      </div>
      </div>
</div> */}

</div>
 {/* <section className="about">
        <div className="circle">
            <img src="./imgs/mypic.png" alt=''/>
            <div className="content">
            <h4 className='aboutme '>ABOUT ME</h4>
        
        <p className=''>I'm  entry level full stack developer with six months of experience in designing, 
          developing and implementing the application with solution using wide range of technology and programming languages. 
          Seeking for best development experience and hands-on technical projects in a challenging 
          role as a full stack developer.</p>
         <div className='row pb-5'>
            <div className='col text-center itext'> <i className="fa-brands fa-html5 fs-3 f1"></i><br/>HTML</div>
            <div className='col text-center itext'><i className="fa-brands fa-square-js fs-3 f2"></i><br/>Javascript </div>
            <div className='col text-center  itext'><i className="fa-brands fa-react fs-3 f3"></i><br/>React </div>
            <div className='col text-center itext'><i className="fa-solid fa-database fs-3 f2"></i><br/>SQL </div>
            <div className='col text-center itext'><i className="fa-brands fa-bootstrap fs-3  f5"></i><br/>Bootstrap</div>
            <div className='col text-center itext'> <i className="fa-brands fa-node-js  fs-3 f6"></i><br/>Nodejs </div>
         </div>
         <div className='text-center '>
      <button className='button'>DOWNLOAD CV <i className="fa-solid fa-download"></i></button> 
      </div> 
</div>
            
        </div>
    </section> */}
    </Element>
    </>
    
}

    export default About