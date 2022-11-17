import React from 'react';
import { Col, Card } from "react-bootstrap";
import Loading from "../Loading"

// import { Container } from './styles';

function CardLoading() {
    return (
        <Col className="py-4 mx-auto" sm={4} >
            <Card
                color="F57C00"
                style={{ width: "16rem", height: "20rem" }}
                className="align-items-center "
            >
                <Loading />
                <Card.Body>
                    <Card.Title className="text-center">
                    </Card.Title>
                    <Card.Text className="mb-3"></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardLoading;