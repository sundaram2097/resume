import React from 'react';
//import { useNavigatem } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

function Navbarfun() {

    return <>
        <Navbar  expand="lg" className='sticky-top navigate  container-fluid shadow-lg  bg-body rounded' >
            <Container> 
            {/* <button className='btn '>Home</button>
            <button className='btn'>About</button>
            <button className='btn'>Education</button>
            <button className='btn'>Skills</button>
            <button className='btn'>Project</button>
            <button className='btn'>Contact</button> */}
              

                <Link to='/home'><button className='btn text-light'>𝘏𝘰𝘮𝘦</button></Link>
                <Link to='/about'><button className='btn text-light'>𝘈𝘣𝘰𝘶𝘵</button></Link>
                <Link to='/education'><button className='btn text-light'>𝘌𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯</button></Link>
                <Link to='/skills'><button className='btn text-light'> 𝘚𝘬𝘪𝘭𝘭𝘴</button></Link>

                <Link to='/project'><button className='btn text-light'> 𝘗𝘳𝘰𝘫𝘦𝘤𝘵</button></Link>
                <Link to='/contact'> <button className='btn text-light'>𝘊𝘰𝘯𝘵𝘢𝘤𝘵</button></Link>
                {/* <Link to='/footer'> <button className='btn text-light'>footer</button></Link>  */}
            </Container>
        </Navbar>


    </>

};

export default Navbarfun;





