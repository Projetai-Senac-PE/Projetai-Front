import React from 'react';
import ButtonStyled from './styles';

function Button(props) {
  return (
    <ButtonStyled 
      bgColor={props.bgColor} 
      borderColor={props.borderColor}
      bgHover={props.bgHover}>
      {props.children}
    </ButtonStyled>
  )
}

export default Button;