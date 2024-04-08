import React from 'react'
import { Button } from "react-bootstrap";
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Footer from './Footer';
import Component6 from './Component6';
import Component7 from './Component7';
import { Row, Col, Card, Container } from "react-bootstrap";

const Component1 = () => {
    return (
        <>

            <div className='content_div'>
<Container className='content_writing'>
                <h2>Akkenna</h2>
                <h1>Making Waves With Generative AI Services</h1>
                <ul>
                    In artificial intelligence, there are limitless opportunities for innovation, efficiency, and greatness to be redefined.<br />
                    Your path to a new direction starts here.
                </ul>
                <Button>Let's Connect</Button>
                </Container>
                            </div>
            <div>
                <Component2 />
            </div>
            <br />
            <Component3 />
            <br />
            <Component4 />
            <hr />
            <br />
            <Component5 />
            <hr />
            <br />
            <Component6 />
            <hr />
            <br />
            <Component7 />
            <hr />
            <Footer />
        </>
    )
}

export default Component1
