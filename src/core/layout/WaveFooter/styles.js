import styled from "styled-components";

import WaveFooter from '../../../assets/WaveFooter.svg'

export const Container = styled.div`
    background-image: url(${WaveFooter});
    background-color: ${(props) => props.bgColor};
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 23vh;
`;
