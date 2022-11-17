import styled from 'styled-components';

export const TitleStyled = styled.h1`
    color: ${(props) => props.color};
    font-size: ${(props) => `${props.font}px`};
`;
