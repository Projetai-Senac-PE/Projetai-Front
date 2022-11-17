import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

// Import Css
import ListGroup from '../../components/ListGroup';
import LinkStyled from '../../components/Link';
import Title from '../../components/Title';
// import { Container } from './styles';

// Import list
import { NavListPeriodos } from './ListFilter';

function NavegationProjects() {
    const { colors } = useContext(ThemeContext);

    return (
        <div className="py-5">
            <ListGroup>
                <Title font="20">Periodos:</Title>
                {NavListPeriodos.map((item, index) => {
                    return (
                        <li key={index} >
                            <LinkStyled
                                path={item.path}
                                color={colors.cDarkBlue}
                                cHover={shade(0.50, colors.cDarkBlue)}>
                                {item.filter}
                            </LinkStyled>
                        </li>
                    );
                })}
            </ListGroup>
        </div>
    );
}

export default NavegationProjects;