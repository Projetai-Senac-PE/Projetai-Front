import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// Import css
import Loading from '../../components/Loading';
import { Card } from "react-bootstrap";
import Button from '../../components/Button';
import { Container } from './styles';

function CardLoading() {
    const { colors } = useContext(ThemeContext);

    return (
        <Container className="py-4 mx-auto" sm={4} >
            <Card
                color="F57C00"
                style={{ width: "16rem", height: "20rem" }}
                className="align-items-center">
                <Loading />
                <Card.Body className="pt-5 mt-5 blur ">
                    <Card.Title className="text-center ">Title
                    </Card.Title>
                    <Card.Text className="mb-3 text-left ">Uma descrição de placeHolder porfavor não retirar o bluer</Card.Text>
                    <Button bgColor={colors.cOrange} borderColor={colors.cOrange} bgHover={colors.cLight} >Conheça Mais</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CardLoading;