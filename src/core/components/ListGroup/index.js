import React from 'react';

// Import css
import { Container } from './styles';

function ListGroup(props) {
    return (
        <Container>
            <ul>
                {props.children}
            </ul>
        </Container>
    );
}

export default ListGroup;