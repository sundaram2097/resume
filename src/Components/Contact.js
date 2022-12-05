import React from 'react'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Element} from 'react-scroll';

function Contact() {

  
  return <>
  <Element id='contact'>
    <section className='aboutpage bg-dark'>
<div className='container text-light'>
<div className='row '>
  
  <h2 className='text-muted mt-4'>𝙂𝙚𝙩 𝙞𝙣 𝙩𝙤𝙪𝙘𝙝 𝙬𝙞𝙩𝙝 𝙢𝙚 </h2>
  <div className='col'>
  <Form className='pt-3' action="https://formsubmit.co/meenakshisundaram2097@gmail.com" method="POST">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" name='name' placeholder='Full Name' required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder='Email' required />
        </Form.Group>

        <Form.Label>Message</Form.Label>
        <textarea name='message' placeholder='Message' className="form-control" style={{ height: '100px' }} required/>
        <div >
          <button className='btn btn-primary mt-2 fs-6 ' type="submit">
            <span className='mx-3 me-3'> Send</span>
          </button>
        </div>

      </Form>
    </div>

<div className='col text-light'>
        <h5 className='text-center'> Email</h5>
        <p className='text-center text-muted'>meenakshisundaram2097@gmail.com</p>
        <h5 className='text-center'> Mobile</h5>
        <p className='text-center text-muted'>+91 7200619050</p>
        <h5 className='text-center'> Address</h5>
        <p className='text-center text-muted'> 1/60,P.Paloothupatti,uchapatti(po)<br/>
        usilampatti(tk),Madurai-625 529<br/>Tamilnadu,india</p>
</div>
</div>

</div>   
</section>
</Element>
  </>
}

export default Contact