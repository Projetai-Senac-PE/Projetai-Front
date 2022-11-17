import styled from "styled-components";

const Container = styled.div`
    color: ${(props) => !!props.color ? props.color :"#004488"  };
    font-size: ${(props) => `${props.font}px`};
    transition: text-decoration 0.8s;
    text-decoration: none;
    &:hover{
        color: ${(props) => props.cHover};
        text-decoration: underline;
    }
`;

export default Container;