import styled from 'styled-components';
import Color from '../constant/Color'

export const NavStyle = styled.header `
    height: 60px;
    width: 100%;
    background-color: ${Color.color1};
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const NavLogo = styled.div ``

export const NavItems = styled.nav ``

export const NavUl = styled.ul `
    display: flex;
    list-style: none;
    gap: 1rem;
`

export const NavLi = styled.li `
    color:${Color.color5};
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;

`

export const NavConta = styled.div ``