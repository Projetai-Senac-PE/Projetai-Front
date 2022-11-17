import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';

function LinkButton(props) {
    return (
        <Container
            bgColor={props.bgColor}
            borderColor={props.borderColor}
            bgHover={props.bgHover}>
            <Link to={props.path}
                style={{
                    textDecoration: "none",
                    color: 'black'
                }}>{props.children}</Link>
        </Container>
    );
}

export default LinkButton;