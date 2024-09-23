import styled from 'styled-components';
import Color from '../constant/Color'

export const MusicStyle = styled.section`
    .container{
        display:flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        background-color: ${Color.color3};
        height: 100dvh;
        .music{
            width: 25%;
            border-radius: 4px;
            padding: 20px 30px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: ${Color.color5};

            img{
                width: 100%;
                height: 40vh;
            }

            h1{
                font-size: 20px;
                color:${Color.color2};
            }

            p{
                font-size: 15px;
                color:${Color.color2};
            }
        }
    }
`