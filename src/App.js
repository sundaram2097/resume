import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
//import Project from './Components/Project';
import Contact from './Components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Js from './Components/Js';
//import Footer from './Components/Footer';

function App(props) {

  return <>
  
  <BrowserRouter>
  <Navbar/>
  
  <Routes>
  <Route path='home' element={<Home/>} />
  <Route path='about' element={<About/>} />
  <Route path='education' element={<Education/>} /> 
  <Route path='skills' element={<Skills />} /> 
  <Route path='project' element={<Js data={props.data} />}/>  
  <Route path='contact' element={<Contact/>} />
  <Route path="*" element={<Home/>}/>
  {/* <Route path='footer' element={<Footer/>}/> */}

  </Routes>
  
  </BrowserRouter>
   {/* <Navbar/>
   <Home/>
   <About/>
   <Education/>
   <Skills/>
   <Project/>
   <Contact/> */}
   {/* <Navbar/>
  <Home/>
  <About/>
  <Education/>
  <Skills/>
  <Project/>
  <Contact/> */}
   
   </>
 
}

export default App;

