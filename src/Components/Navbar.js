import React from 'react';
import {Link} from 'react-scroll';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import About from './About';
import Education from './Education';
// import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import Home from './Home';
import Footer from './Footer';
import Js from './Js';
function Navbarfun() {

    return <>
        <Navbar  expand="lg" className='sticky-top navigate  container-fluid shadow-lg  bg-body rounded' >
            <Container> 
          
              

                <Link to='home'  smooth={true}><button className='btn text-light'>𝘏𝘰𝘮𝘦</button></Link>
                <Link to='about'  smooth={true}><button className='btn text-light'>𝘈𝘣𝘰𝘶𝘵</button></Link>
                <Link to='education'  smooth={true}><button className='btn text-light'>𝘌𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯</button></Link>
                <Link to='skills'  smooth={true}><button className='btn text-light'> 𝘚𝘬𝘪𝘭𝘭𝘴</button></Link>

                <Link to='project'  smooth={true}><button className='btn text-light'> 𝘗𝘳𝘰𝘫𝘦𝘤𝘵</button></Link>
                <Link to='contact'  smooth={true}> <button className='btn text-light'>𝘊𝘰𝘯𝘵𝘢𝘤𝘵</button></Link>
                {/* <Link to='/footer'> <button className='btn text-light'>footer</button></Link>  */}
            </Container>
        </Navbar>
        <Home/>
        <About/>
         <Education/> 
         <Skills/> 
         {/* <Project/>  */}
         <Js/>
        <Contact/>
        <Footer/>

    </>

};

export default Navbarfun;





