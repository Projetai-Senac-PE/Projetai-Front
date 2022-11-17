import React from 'react';

import { Container } from './styles';

function Line(props) {
  return (
    <Container  color={props.color} />
  );
}

export default Line;