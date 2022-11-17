import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

// Import Stlyes
import { Col, Container, Image, Row } from "react-bootstrap";
import { StudentSectionStyled } from "./styles";
import Line from "../../../components/Line";
import Title from "../../../components/Title";
import { FaLightbulb } from "react-icons/fa";

// List
import { ListAlunos } from "./listAlunos.js";

function StudentSection() {
  const { colors } = useContext(ThemeContext);
  return (
    <StudentSectionStyled bgColor={colors.cLight}>
      <Container className="pt-5">
        <section className="pt-5">
          <Title>No que afeta os alunos?</Title>
          <Line color={colors.cOrange} />
        </section>
        <Row>
          {ListAlunos.map((array, index) => {
            return (
              <Col
                key={index}
                className="p-0 p-lg-5 shadow my-5 mx-5 bg-white rounded"
              >
                <Line color={colors.cOrange} />
                <Image
                  className="rounded-circle pt-4"
                  src={array.img}
                  height="200px"
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
                <h5 className="h5 text-center pt-4">
                  {array.title} <FaLightbulb />
                </h5>
                <p>{array.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </StudentSectionStyled>
  );
}

export default StudentSection;
