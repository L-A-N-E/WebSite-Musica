import React from 'react'
import { HomeStyle, HomeLeft, HomeRight, HomeTitle } from '../styles/HomeStyle'
import Celular from '../assets/celular.png'
const Home = () => {
  return (
    <HomeStyle>
        <HomeLeft>
          
        </HomeLeft>
        <HomeRight>
          <HomeTitle>Bem-Vindo</HomeTitle>
          <p>Escute nossas músicas!</p>
        </HomeRight>
    </HomeStyle>
  )
}

export default Home
