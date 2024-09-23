import styled from 'styled-components';
import Color from '../constant/Color';

export const ErrorStyle = styled.section`
    .container{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: ${Color.color5};
        height: 100dvh;
        h1{
            font-size: 24px;
            text-transform: uppercase;
            color: ${Color.color3};
        }
    }
`