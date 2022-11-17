import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { shade } from 'polished';

// Import styles
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { StyledHeader, NavbarStyled, NavBrandStlyled } from "./styles";
import Link from "../../components/Link";

// Import list
import { NavList } from "./navList";

// Import img
import LogoProjetai from "../../../assets/logo/projetai/NewLogo.png"

function NavbarLayout() {
    const { colors } = useContext(ThemeContext);
    return (
        <StyledHeader color={'#ffffff'} className="border">
            <NavbarStyled collapseOnSelect expand="lg">
                <Container>
                    <NavBrandStlyled href="/"><Image fluid src={LogoProjetai} width="200px" alt="Logo projetai" /></NavBrandStlyled>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="marginL">
                            {NavList.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        className="nav-links"
                                        href={item.url}
                                        path={item.url}
                                        color={colors.cDarkBlue}
                                        cHover={shade(0.10, colors.cDarkBlue)}
                                        px="30"
                                        font="20"
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavbarStyled>
        </StyledHeader>
    )
}

export default NavbarLayout;