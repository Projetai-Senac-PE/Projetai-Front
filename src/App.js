import React from "react";

// Import  Styled Components 
import { ThemeProvider } from 'styled-components';

// Palette highlighted and pure
import theme from "./styled/ThemesStyled";
import Routes from "./Routes/index";

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
  );
}


