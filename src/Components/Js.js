import React from 'react'
import Project from './Project'

function js() {
    let data=[
        {
      img:"empty 1",
      title:"React first task",
      cardtext:"This is not project, it's my first react task,usually assigned piece of work often to be finished within a certain time. ",
        pathlink :"https://stunning-queijadas-800a13.netlify.app/"
      },
      {
        img:"emty 2",
        title:"Rental portal",
        cardtext:"Boost Revenue, Increase bookings and enjoy all the benefits of an All-in-One system. Cloud Based Property Management Software,",
        pathlink:'https://sparkly-hummingbird-fcea02.netlify.app/'
      },{
        img:"emty 3",
        title:"Rental portal",
        cardtext:"Boost Revenue, Increase bookings and enjoy all the benefits of an All-in-One system. Cloud Based Property Management Software",
        pathlink:'https://sparkly-hummingbird-fcea02.netlify.app/'
      },
      
    ]
  return <>
  <section className='aboutpage bg-dark'>  
   <div className="container">
    <br/>
    <br/>
    <h3 className='text-light text-muted text-center'>𝘾𝙃𝙀𝘾𝙆 𝙊𝙐𝙏 𝙎𝙊𝙈𝙀 𝙊𝙁 𝙈𝙔 𝙒𝙊𝙍𝙆𝙎..</h3>
    <div className="row d-flex justify-content-center">
      {
         data.map((e,i)=>{
          return <Project key={i} data={e}/>
        })
      }               
    </div>
    
    </div>
    </section>

  </>
}

export default js