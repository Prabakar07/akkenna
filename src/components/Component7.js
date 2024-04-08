import React from 'react'
import { Row, Col, Card, Container,Button } from "react-bootstrap";

const Component7 = () => {
    return (
        <Container>
            <h1>Recent Blogs and Post From Akkenna</h1><br/>
            <Row>
                <Col xs={12} md={4} lg={4} xl={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.akkenna.com/static/media/WebDevBlog.d6159f6d6167416c8cbc245d76c5b8eb.svg" />
                        <Card.Body>
                            <Card.Text>
                            The Synergy of AI-Generative Services and Cloud Solutions
                            </Card.Text>
                            <Row>
                            <Col xs={12} md={6} lg={6} xl={6}><img src='https://www.akkenna.com/static/media/cardTime.ae4ede8badb8e03c9a5babf412785e59.svg'/>Dec 28,2023</Col>
                            <Col xs={12} md={6} lg={6} xl={6}><img src='https://www.akkenna.com/static/media/cardEye.d76d0b3a1d6bbd7eeeaec28c5cb60082.svg'/> 10000views</Col>
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={4} xl={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.akkenna.com/static/media/WebDevBlog.d6159f6d6167416c8cbc245d76c5b8eb.svg" />
                        <Card.Body>
                          
                            <Card.Text>
                            How Managed Teams Propel AI Generative Projects to Success
                            </Card.Text>
                            <Row>
                            <Col xs={12} md={6} lg={6} xl={6}><img src='https://www.akkenna.com/static/media/cardTime.ae4ede8badb8e03c9a5babf412785e59.svg'/>Dec 28,2023</Col>
                            <Col xs={12} md={6} lg={6} xl={6}><img src='https://www.akkenna.com/static/media/cardEye.d76d0b3a1d6bbd7eeeaec28c5cb60082.svg'/> 10000views</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={4} xl={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.akkenna.com/static/media/WebDevBlog.d6159f6d6167416c8cbc245d76c5b8eb.svg" />
                        <Card.Body>
                            <Card.Text>
                            Unveiling the Impact of AI Generative Services and Cloud 
                            </Card.Text>
                            <Row>
                            <Col xs={12} md={6} lg={6} xl={6}><img src='https://www.akkenna.com/static/media/cardTime.ae4ede8badb8e03c9a5babf412785e59.svg'/>Dec 28,2023</Col>
                            <Col xs={12} md={6} lg={6} xl={6}><img src='https://www.akkenna.com/static/media/cardEye.d76d0b3a1d6bbd7eeeaec28c5cb60082.svg'/> 10000views</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Component7
