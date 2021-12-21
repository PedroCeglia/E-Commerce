import React, {useEffect, useState} from 'react'
import './style.css'

export default function Carrosel(props){

    const [fotos, setFotos] = useState([])
    const [fotoMain, setFotoMain] = useState('../assets/fone-de-ouvido-jbl.jpeg')
    useEffect(()=>{
      if(props.fotos[0] != null ){
        setFotos(props.fotos)
        setFotoMain(props.fotos[0].url)
      }else{
        setFotos([])
        setFotoMain('../assets/fone-de-ouvido-jbl.jpeg')
      }
    },[props.fotos])

    return (
      <div className='carrosel-produto-container'>
        <div className='choice-image'>
          {fotos.map((item, key) => {
            return(
              <img src={item.url} key={key} onClick={()=>{setFotoMain(item.url)}} alt='Produto'/>
            )
          })}
        </div>
        <div className='image-content'>
          <img src={fotoMain} alt='Produto'/>
        </div>
      </div>
    )
  }