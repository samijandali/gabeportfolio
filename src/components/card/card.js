import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import deltademo from '../../assets/logos/deltademo.png';
import { Container, Row, Col } from 'react-bootstrap';
import './card.css';

function ProjectCard() {
    return (
        <Row className='row'>
            <Card className='customCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={deltademo} />
                <Card.Body>
                    <Card.Title>Flight Delay Predictor </Card.Title>
                    <Card.Text>
                        Some
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className='customCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={deltademo} />
                <Card.Body>
                    <Card.Title>Android Dungeon Crawler Game</Card.Title>
                    <Card.Text>
                        quick
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className='customCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={deltademo} />
                <Card.Body>
                    <Card.Title>User Demographic Interface</Card.Title>
                    <Card.Text>
                        example
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className='customCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={deltademo} />
                <Card.Body>
                    <Card.Title>Base 2</Card.Title>
                    <Card.Text>
                        text
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Row >

    );
}

export default ProjectCard;