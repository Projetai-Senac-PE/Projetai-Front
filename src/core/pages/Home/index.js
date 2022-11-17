import React from "react";

// imagens
import MainSection from "./MainSection";
import StudentsSection from "./StudentSection";
import CompanieSection from "./CompaniesSection";

// Css import
import { Container } from "./styles";
import InvitationSection from "./InvitationSection";
import Wave from "react-wavify";

function HomePage() {
  return (
    <Container>
      <MainSection />
      <InvitationSection />
      <StudentsSection />
      <CompanieSection />
      <Wave
        fill="#212529"
        paused={true}
        options={{
          height: 30,
          amplitude: 190,
          points: 3,
          }} />
    </Container>
  );
}

export default HomePage;
