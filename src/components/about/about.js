import Image from 'react-bootstrap/Image';
import aboutimg from '../../assets/logos/aboutimg.png';
import Card from 'react-bootstrap/Card';
import './about.css';
import React from 'react';

const backgroundStyle = {
    backgroundImage: `url(${aboutimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0)'
};

const titleStyle = {
    // Styles for Card.Title
    fontSize: '1.5em', // Example size
    // Add more styles as needed
};

const textStyle = {
    // Styles for Card.Text
    fontSize: '1.2em', // Example size
    // Add more styles as needed
};

function About() {
    return <div style={backgroundStyle}>
        <Card className='about-card'>
            <Card.Body>
                <Card.Title className="about-title">A Little Bit About Me</Card.Title>
                <Card.Text className="about-text">
                    As a 3rd year Computer Science student specializing Information Systems, Databases, and Human-Centric UI/UX, my priority is working to facilitate user interactions with platforms.
                </Card.Text>
            </Card.Body>
        </Card>
    </div >
}
export default About;