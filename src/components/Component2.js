import React from 'react'
import { Row, Col, Card, Container } from "react-bootstrap";
const Component2 = () => {
    return (
        <Container className='component_card'>
            <Row>
                <Col xs={12} md={1} lg={1} xl={1}></Col>
                <Col xs={12} md={2} lg={2} xl={2}>
                    <Card style={{ width: '100%',height:"40vh",backgroundColor:"blueviolet" }}>
                        <Card.Body>
                            <Card.Title>Meet our AI Consultant</Card.Title>
                            <Card.Text>
                                <img src='https://www.akkenna.com/static/media/Bphone.e8215af5364236a0cadb7f289fca9ff8.svg'/>&nbsp;&nbsp;
                                <img src='https://www.akkenna.com/static/media/Bemail.9ad2ce1aa5a425a268d16cc1e7549f57.svg'/>&nbsp;&nbsp;
                                <img src='https://www.akkenna.com/static/media/BOption.427f1fac6a7c0c0ac9dc90ee4c518771.svg'/>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={2} lg={2} xl={2}>
                    <Card style={{ width: '100%',height:"30vh",marginTop:"15%",backgroundColor:"yellow" }}>
                    <Card.Body>
                            <Card.Title>Industry we serve</Card.Title>
                            <Card.Text>
                                

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={2} lg={2} xl={2}>
                    <Card style={{ width: '100%',height:"25vh",marginTop:"25%",backgroundColor:"grey" }}>
                        <Card.Body>
                            <Card.Title>Contact Result</Card.Title>
                            <Card.Text>
                               Who we are ?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={2} lg={2} xl={2}>
                    <Card style={{ width: '100%',height:"30vh",marginTop:"15%",backgroundColor:"yellow" }}>
                    <Card.Body>
                            <Card.Title>Latest Technology Using</Card.Title>
                            <Card.Text>
                                

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={2} lg={2} xl={2}>
                    <Card style={{ width: '100%',height:"40vh",backgroundColor:"blueviolet"  }}>
                    <Card.Body>
                            <Card.Title>Customised AI Chat Box</Card.Title>
                            <Card.Text>
                                

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={1} lg={1} xl={1}></Col>
            </Row>
        </Container>
    )
}

export default Component2
