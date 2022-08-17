import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Project(props) {
    
   
  return <>  
 
<Card className='card mt-5 mx-2' style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={props.data.img } /> */}
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          {props.data.cardtext}
        </Card.Text>
        <a href={props.data.pathlink}><Button variant="primary">My Work</Button></a>
        
      </Card.Body>
    </Card>  
  </>
}

export default Project