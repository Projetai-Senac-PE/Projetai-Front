import React from 'react';
import { Card, Button } from "react-bootstrap"
import { Container } from './styles';

function CardComponent(props) {
    return (
        <Container>
            <Card color="F57C00" className="align-items-center card">
                <Card.Img className="pt-4 rounded-circle imgCard" variant="top" src={props.icon} />
                <Card.Body>
                    <Card.Title className="text-center">{props.title}</Card.Title>
                    <Card.Text className="mb-3">{props.summary}
                    </Card.Text>
                    <Button href={"/projeto/" + props._id} variant="primary">Conheça</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CardComponent;