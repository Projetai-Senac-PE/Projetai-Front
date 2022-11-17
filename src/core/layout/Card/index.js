import React from 'react';

// Import CSS
import { Card } from "react-bootstrap";
import { Container } from './styles';

function CardLayout(props) {
    return (
        <Container>
            <Card color="F57C00" className="align-items-center card overflow-auto" style={{ height: '400px', width: '250px' }}>
                <Card.Img className="pt-4 rounded-circle imgCard" variant="top" src={props.icon} />
                <Card.Body>
                    <Card.Title className="text-center" >{props.title}</Card.Title>
                    <Card.Text className="mb-3 text-muted">{props.summary}</Card.Text>
                    <Card.Link className="mb-3 text-primary" href={props.linkedin} target="_blank">LinkedIn</Card.Link>

                </Card.Body>
            </Card>
        </Container>
    );
}

export default CardLayout;