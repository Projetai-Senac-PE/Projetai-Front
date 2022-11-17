import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${( props) => props.color};
    .marginL{
        margin-left: auto;
    }
`
export const NavbarStyled = styled(Navbar)`
    
`
export const NavBrandStlyled = styled.a`
    color: ${({ theme }) => theme.colors.cOrange};
    font-size: ${({ theme }) => theme.fontSize.l};
    text-decoration: none;
    transition: 0.5s;
    &:hover {
        color: ${({ theme }) => theme.colors.cBlue}
    }

`