import React from 'react'
import { Container } from 'react-bootstrap'
import imageone from "../image/ue7y7i.jpg"

function About () {
  return (
      <Container className="py-5">
          <h2 className="py-5">Hello,My Name Mahmoud-Salama</h2>
          <img src={imageone}  style={{width:"600px",height:"600px"}}/>
    </Container>
  )
}

export default About