import React from 'react'
// importando imagens
import tocaDiscos from '../assets/toca_discos.png'
import caixaDeSom from '../assets/caixa_de_som.png'
import fonesDeOuvido from '../assets/fone_de_ouvido.png'
import discoDeVinil from '../assets/disco_de_vinil.png'
// Importando estilo
import { MusicStyle } from '../styles/MusicStyle'
 
const Music = () => {
  return (
    <MusicStyle>
      <div className="container">
        <div className="music">
          <img src={tocaDiscos} alt="tocaDiscos" />
          <h1>Toca discos</h1>
          <p>R$ 120</p>
        </div>
        <div className="music">
          <img src={caixaDeSom} alt="CaixaDeSom" />
          <h1>Caixa de Som</h1>
          <p>R$ 1.000</p>
        </div>
        <div className="music">
          <img src={fonesDeOuvido} alt="FonesDeOuvido" />
          <h1>Fone de ouvidos</h1>
          <p>R$ 500</p>
        </div>
        <div className="music">
          <img src={discoDeVinil} alt="DicoDeVinil" />
          <h1>Disco de Vinil</h1>
          <p>R$ 320</p>
        </div>
      </div>
    </MusicStyle>
  )
}

export default Music
