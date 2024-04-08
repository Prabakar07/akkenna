import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Component1 from './Component1'
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        < div fluid >
            <Helmet>
                <title>Akkenna: Pioneering Generative AI Services & Software Development</title>
                <meta name="description" content="Empower your vision with Akkenna's advanced software development and generative AI solutions, forging innovative pathways towards a transformative future." />
                <meta name="keywords" content="generative ai services, software development company, app development" />
            </Helmet>
            <Header />
            <Component1 />
        </div>
    )
}

export default Home
