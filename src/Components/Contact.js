import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Contact() {

  
  return <>
    <section className='aboutpage bg-dark'>
<div className='container text-light'>
<div className='row '>
  
  <h2 className='text-muted mt-4'>𝙂𝙚𝙩 𝙞𝙣 𝙩𝙤𝙪𝙘𝙝 𝙬𝙞𝙩𝙝 𝙢𝙚 </h2>
  <div className='col'>
<Form>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        
        <Form.Control type="text" placeholder="Enter your name" />
        <br/>
        
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter your subject" /> */}
        <br/>
        
        {/* 
        <Form.Control type="text" placeholder="Enter your message" /> */}
        <Form.Label>Message</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" >
              <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
        <br/>
        <br/>
        <Button  variant="secondary" type="submit">
          Submit
        </Button>
      </Form.Group>
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
  </>
}

export default Contact