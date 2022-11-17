import React from 'react';
import { Link } from "react-router-dom";

// Import css
import Container from './styles';

function LinkStyled(props) {
    return (
        <Link to={props.path} style={{
            textDecoration: "none",
            fontSize: `${props.font}px`,
            paddingLeft: `${props.px}px`,
            paddingight: `${props.px}px`
        }} >
            <Container color={props.color} cHover={props.cHover}>
                {props.children}
            </Container>
        </Link>
    )
}

export default LinkStyled;