import React, {useState} from 'react'
import './style.css'

export default function Carrosel(){

    return (
      <div className='carrosel-produto-container'>
        <div className='choice-image'>
          <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
          <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
          <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
          <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
        </div>
        <div className='image-content'>
          <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
        </div>
      </div>
    )
  }