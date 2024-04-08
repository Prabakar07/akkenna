import React from 'react'
import { Row, Col, Card, Container } from "react-bootstrap";

const Component5 = () => {
  return (
    <Container>
            <Row>
                
                <Col xs={12} md={6} lg={6} xl={6}>
                <h2>Products</h2>
            <h1>Discover Akkenna’s Diverse Offerings</h1>
            <p>Explore Akkenna's array of services, including AI Implementation, where seamless integration meets optimal performance, and Customized AI Solutions, crafting bespoke innovations tailored to your unique needs.</p>
            <p><strong>Akkenna Studio:</strong><br/>
            <strong>Web Development:</strong> </p>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
<img src='https://www.akkenna.com/static/media/webProduct.6ddfa179b8f89f18e90b.webp' style={{height:"50vh",width:"100%"}}/>
                </Col>
            </Row>
        </Container>
  )
}

export default Component5
