import styled from "styled-components";

export const Container = styled.div`
    transform:  scale(5);
    padding-top: 6%;
    .cLoader {
        border: 1px solid #e5e5e5;
        border-top-color: #FFC75F;
        width: 10px;
        height: 10px;
        animation: is-rotating 1s infinite;
        border-radius: 50%;
    }
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;