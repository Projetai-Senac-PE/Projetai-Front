import React from 'react';

import { Container } from './styles';

function DropDown(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default DropDown;