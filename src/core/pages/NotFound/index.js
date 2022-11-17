import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

// Import css
import { Container } from "react-bootstrap";
import Title from "../../components/Title";
import WaveFooter from "../../layout/WaveFooter";
import LinkButton from '../../components/LinkButton';

function NotFoundPage() {
    const { colors } = useContext(ThemeContext);

    return (
        <div>
            <Container className="mt-5 text-center">
                <Title color={colors.cDarkBlue}>Essa pagina não existe.</Title>
                <Title color={colors.cDarkBlue}>Estamos trabalhando.</Title>
                <LinkButton 
                    path="/"
                    borderColor={colors.cBlue}
                    bgColor={colors.cBlue}
                    bgHover={"transparent"}
                    b>Voltar</LinkButton>
            </Container>
            <WaveFooter />
        </div>
    )
}

export default NotFoundPage;