import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

// CSS Import 
import { Row, Col } from "react-bootstrap";
import CardLayout from "../../../layout/Card";
import { Container } from "./styles";
import { TeacherList } from "../GuestInfoList/TeacherList";

// Layouts Imports
import WaveFooter from "../../../layout/WaveFooter";
import LinkButton from "../../../components/LinkButton";
import Title from "../../../components/Title";

export default function TeacherListComponent() {
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
                  path="/guests/external"
                  borderColor={colors.cOrange}
                  bgColor={colors.cOrange}
                  bgHover="transparent"
                >
                  Convidados
                </LinkButton>

              </div>
              <Title>Professores</Title>

            </Col>
          </Row>

          {/* Guest List */}
          <Row className="p-5">
            {/* Return  */}
            {TeacherList.map((array, index) => {
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
