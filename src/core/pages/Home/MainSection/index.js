import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Wave from "react-wavify";

// Styles
import { Image, Row, Col } from "react-bootstrap";
import Title from "../../../components/Title";
import Line from "../../../components/Line";
import { Container } from "./styles";

// Image
import LogoSenac from "../../../../assets/logo/empresas/logoSenac.svg";

function MainSection() {
  const { colors } = useContext(ThemeContext);
  return (
    <Container bgColor={colors.cWhite} className="p-0">
      <section className="container">
        <Row>
          <Col lg={6} xs={12} className="m-auto p-5">
            <p className="my-0 ">Senac Pernambuco</p>
            <Title font="48">O que é o ProjetAí?</Title>
            <Line color={colors.cOrange} />
            <p className="py-2">
              O ProjetAí é uma iniciativa da Faculdade SENAC, Pernambuco para
              apresentar os projetos integradores/unidade de extensão dos cursos
              de Análise e Desenvolvimento de Sistemas (ADS).
            </p>
          </Col>
          <Col xs={6}>
            <Image
              src={LogoSenac}
              className="p-5 m-5 rounded-circle img-fluid"
            />
          </Col>
        </Row>
      </section>
      <Wave
        fill="#2D3FC3"
        paused={false}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />
    </Container>
  );
}

export default MainSection;
