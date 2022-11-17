import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

// Import Styles
import { Container } from "./styles";
import { Col, Row } from "react-bootstrap";
import Title from "../../components/Title";
import LinkStyled from "../../components/Link";
import Line from "../../components/Line";

function FooterLayout() {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Container className="bg-dark text-white">
        <section className="container">
          <Row className="py-4 text-center">
            <Col>
              <Title font="30">ProjetAí</Title>
            </Col>
            <Col>
              <Title font="30">Menu</Title>
              <nav className="mb-4">
                <LinkStyled color="#fff">Projetos</LinkStyled>
                <LinkStyled color="#fff">Programação</LinkStyled>
                <LinkStyled color="#fff">Participantes</LinkStyled>
              </nav>
            </Col>
            <Col>
              <Title font="30">Contato</Title>
              <p>projetai@fac.pe.senac.br</p>
            </Col>
          </Row>
          <Line color={colors.cOrange} />
          <section className="p-3 text-center">
            <Title font="16">Copyright &copy; 2021 ProjetAí.</Title>
          </section>
        </section>
      </Container>
    </>
  );
}

export default FooterLayout;
