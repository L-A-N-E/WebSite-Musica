import styled from 'styled-components';
import Color from '../constant/Color';

export const HomeStyle = styled.section `
    height: 100dvh;
    width: 100%;
    display: grid;
    grid-template-areas: 
    'HomeLeft HomeRight';

`
export const HomeLeft = styled.div ` 
    grid-area: HomeLeft;
    background-color:${Color.color3};
`

export const HomeRight = styled.div `
    grid-area: HomeRight;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HomeTitle = styled.h1 `
    font-size: 40px;

`