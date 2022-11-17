import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Row, Col } from "react-bootstrap";
import CardLayout from "../../../layout/Card";
import { Container } from "./styles";
import Title from "../../../components/Title"
// Laoyout Imports
import WaveFooter from "../../../layout/WaveFooter";
import { ExternalGuestList } from "../GuestInfoList/ExternalGuestList";
import LinkButton from "../../../components/LinkButton";

export default function ExternalGuestListComponent() {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <div className="container">

          <Row>
            <Col className="text-center">

              <div className="container d-flex justify-content-center py-4">
                <LinkButton
                  className="mx-5"
                  path="/guests/teacher"
                  borderColor={colors.cOrange}
                  bgColor={colors.cOrange}
                  bgHover="transparent"
                >
                  Professores
                </LinkButton>
              </div>
              <Title>Convidados</Title>

            </Col>

          </Row>

          <Row className="p-5">
            {ExternalGuestList.map((array, index) => {
              return (
                <Col className="py-4 mx-auto" sm={4} key={index}>
                  <CardLayout

                    icon={array.icon}
                    title={array.name}
                    summary={array.description}
                    github={array.github}
                    linkedin={array.linkedin}

                  />
                </Col>
              );
            })
            }
          </Row>
        </div>
        <WaveFooter />
      </Container>
    </>
  );
}
