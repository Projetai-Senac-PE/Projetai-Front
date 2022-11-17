import styled from "styled-components";

const ButtonStyled = styled.button`
    padding: 10px 15px;
    background-color: ${(props) => props.bgColor};
    border: 2px solid ${(props) => props.borderColor};
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.7s, border-color 0.6s;
    &:hover {
        background-color: ${(props) => props.bgHover};
    }
`;

export default ButtonStyled;