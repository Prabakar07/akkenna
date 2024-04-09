import React, { useState } from 'react';
import { Row, Col, Card } from "react-bootstrap";

const Component4 = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (cardNumber) => {
        setHoveredCard(cardNumber);
    };

    const cardData = [
        { id: 1, title: 'AI Service Deployment', name: 'AI Development & Service:' ,
        desc:"We help clients in many different industries turn their data into business value by using our AI skills in areas like natural language processing, computer vision, and text processing. A lot of our customers have gotten a lot out of their supply chain management (SCM), pricing, product bundling and development, personalization and recommendations, and other features."},
        { id: 2, title: 'Generative AI Service', name: 'Generative AI Service:' ,
        desc:"Our Generative AI Service at Akkenna is a shining example of smart new ideas. Using the power of generative artificial intelligence, we are experts at creating game-changing solutions that break down standard barriers. From coming up with ideas to putting them into action, we push the limits of what is possible by making smart systems that can adapt, change, and lead to unimaginable progress." },
        { id: 3, title: 'Mobile App Development',name: 'Mobile App Development:' ,
        desc:"Our cutting-edge Mobile App Development service, which is seamlessly combined with advanced AI solutions, will make your mobile app experience better. This is what we do best: we use artificial intelligence to make new, smart, and user-centered apps. Akkenna takes your idea for a mobile app and turns it into a sophisticated reality, from user interfaces that are easy to understand to predictive data." },
        { id: 4, title: 'Web App Development', name: 'Web App Development:' ,
        desc:"With Akkenna's seamless AI interface, you can make building web apps even better. Use the power of AI to improve usefulness, make user experiences better, and open the door to new ideas that have never been thought of before. At Akkenna, our expert writers add cutting-edge AI features to your web apps, giving you a dynamic and smart online presence." },
        { id: 5, title: 'UI/UX Design Service',name: 'UI/UX Design Service:' ,
        desc:"Akkenna's UI/UX Design service shows how dedicated we are to creating smooth and visually appealing user experiences. Our design process mixes form and function to make sure that every interface we make not only looks great but also makes users more interested in it. Using user-centered design principles as a guide, we create easy-to-use interfaces that connect with your audience, encouraging good interactions and improving your online profile." },
        { id: 6, title: 'Cloud Service Deployment',name: 'Cloud Management Service:' ,
        desc:"Your unique path to the cloud. We know how important it is to set up a cloud strateg and make sure your digital assets are ready to move to the cloud because our business was built on it. We properly evaluate the risks for your current IT system so that you can get an honest picture of your migration path and take steps to fix the problem." },
        { id: 7, title: 'Managed Teams',name: 'Hire remote Developer:' ,
        desc:"With our Managed Development Team service, Akkenna changes the way software is made. We know that the key to the success of any project is to build a strong and effective development team. As Akkenna's strategic partner, you'll have access to a team of skilled professionals who will work perfectly with your project to make sure it runs smoothly, comes up with new ideas, and is delivered on time." },
        { id: 8, title: 'More Service',name: '' ,desc:"" },
    ];

    return (
        <div>
            <br />
            <Row>
                <Col xs={12} md={2} lg={2} xl={2}></Col>
                <Col xs={12} md={8} lg={8} xl={8}>
                    <Row >
                        {cardData.map(card => (
                            <Col key={card.id} xs={12} md={3} lg={3} xl={3} style={{padding:"20px"}}>
                                <Card
                                    className={`card_hover_msg${card.id}`}
                                    style={{ width: '100%', height: '25vh', padding: '2vh' }}
                                    onMouseEnter={() => handleCardHover(card.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <Card.Body>
                                        <Card.Title style={{ marginTop: '10vh', marginLeft: '2vh', fontSize: '16px' }}>
                                            {card.title}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={12} md={2} lg={2} xl={2}></Col>
            </Row>
            <br />
            <Row>
                <Col xs={12} md={2} lg={2} xl={2}></Col>
                <Col xs={12} md={8} lg={8} xl={8}>
                    <Row>
                        <Col xs={12} md={6} lg={6} xl={6}>
                        {hoveredCard && (
                        <div className="hover-message">
                            {cardData.find(card => card.id === hoveredCard).name}
                        </div>
                    )}
                        </Col>
                        <Col xs={12} md={6} lg={6} xl={6}>
                        {hoveredCard && (
                        <div className="hover-message">
                            {cardData.find(card => card.id === hoveredCard).desc}
                        </div>
                    )}
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={2} lg={2} xl={2}></Col>
            </Row>
        </div>
    );
}

export default Component4;
