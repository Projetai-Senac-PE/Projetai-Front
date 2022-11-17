import React from 'react';

import { TitleStyled } from './styles';

function Title(props) {
    return (
        <div className={props.cName}>
            <TitleStyled
                font={props.font}
                color={props.color}>
                {props.children}
            </TitleStyled>
        </div>
    );
}

export default Title;