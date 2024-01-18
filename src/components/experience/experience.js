import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './experience.css'; // Make sure to import your custom CSS

function Experience({ title, company, description }) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={12}>
                    <Card className="mb-3 work-experience-card">
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                    {/* Repeat for other work experiences */}
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;
