import React, { useContext } from "react";
import { ThemeContext } from "styled-components"
import { Link } from "react-router-dom";
import { darken } from 'polished';
// CSS Import
import { Image } from "react-bootstrap";
import Line from "../../../components/Line";
import { Container } from "./styles";
import ButtonStyled from "../../../components/Button/styles";

// Assets Import
import HeaderImg from "../../../../assets/background/header.png";

function InvitationSection() {
  const { colors } = useContext(ThemeContext);

  return (
    <Container style={{ backgroundColor: "#2D3FC3" }}>
      <div className="container py-5 mb-5">
        <div className="row text-white">
          <div className="col-md-7 col-sm-12 text-dark bg-white shadow-lg py-5 px-5 rounded my-auto">
            <p>Projetos integradores ou Unidade de extensão</p>
            <h1>
              Projet<span style={{ color: "#F39900" }}>Aí</span>
            </h1>
            <p>
              ProjetAí é uma jornada de inovação e criatividade, com
              apresentação de soluções de TI para problemas reais da sociedade.
              É uma ação institucional do curso de ADS da Faculdade SENAC
              Pernambuco.
            </p>
            <ButtonStyled
              Name="mx-5"
              borderColor={colors.cDarkBlue}
              bgColor={colors.cDarkBlue}
              bgHover={darken(0.1,colors.cDarkBlue)}
            >
              <Link
                style={{
                  color: "#f4f4f4",
                  textDecoration: "none",
                }}
                to={{ pathname: "https://i9i.app/projetai_remoto" }}
                target="_blank"
              >
                Link Para as Apresentações Remotas
              </Link>
            </ButtonStyled>
          </div>
          <div className="col-md-5 col-sm-12 h-25">
            <Image className="mx-3" fluid src={HeaderImg} />
          </div>
        </div>
      </div>
      <Line color="#F39900" />
    </Container>
  );
}

export default InvitationSection;
