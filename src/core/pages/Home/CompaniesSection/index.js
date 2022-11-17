import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

// Import Styles
import { FaRegBuilding } from "react-icons/fa";
import { CompanieSectionStyles } from "./styles";
import { Container } from "react-bootstrap";
import Line from "../../../components/Line";

// Import OwlCarrosel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import { ListCompanies } from "./listCompanies";

function CompanieSection() {
  const { colors } = useContext(ThemeContext);
  return (
    <CompanieSectionStyles bgColor={colors.cWhite}>
      <Container>
        <section>
          <h3 className="h3 pt-5">
            Empresas Conosco <FaRegBuilding />
          </h3>
        </section>

        <Line color={colors.cOrange} />
        <OwlCarousel autoplay="true" loop="true" autoplayTimeout="2500">
          {ListCompanies.map((item, index) => {
            return (
              <section key={index} className="item px-md-0 px-lg-5 my-3">
                <img
                  src={item.Image}
                  className="p-md-1 p-lg-5"
                  alt={item.Title}
                />
              </section>
            );
          })}
        </OwlCarousel>
        {/* <Line color={colors.cOrange} /> */}
      </Container>
    </CompanieSectionStyles>
  );
}

export default CompanieSection;
