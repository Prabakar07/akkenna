import React from 'react'
import { Row, Col, Card, Container,Button } from "react-bootstrap";

const Component3 = () => {
    return (
        <Container className='cont' >
            <Row>
            <Col xs={12} md={1} lg={1} xl={1}>
</Col>
                <Col xs={12} md={5} lg={5} xl={5}>
<img src='https://www.akkenna.com/static/media/AboutImage.d8c3c510ab0490f8bfbe206128e83e15.svg' style={{height:"60vh",width:"100%"}}/>
                </Col>
                <Col xs={12} md={5} lg={5} xl={5}>
                    <h1>Akkenna - Generative AI Development Company Steering Business Trends</h1>
                    <p>At Akkenna Animation and Technologies Private Limited,<br />
                        we stand as industry pioneers in generative AI services,<br />
                        offering an extensive array of cutting-edge software development,<br />
                        consultancy, and animation solutions. With our unparalleled expertise in generative AI,<br />
                        we partner with businesses to craft secure and forward-thinking digital solutions that<br />
                        streamline and elevate their operations.</p>
                    <ul>
                        <li>Big Data Processing</li>
                        <li>User-Friendly Navigation</li>
                        <li>Operations Efficiency</li>
                        <li>Instant Accuracy</li>
                        <li>Data Security</li>
                    </ul>
                    <Button>About Us</Button>

                </Col>
                <Col xs={12} md={1} lg={1} xl={1}>
</Col>
            </Row>
        </Container>
    )
}

export default Component3
