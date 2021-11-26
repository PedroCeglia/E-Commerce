import React from 'react'
import './style.css'

// Import Widget
import Carrosel from './Carrosel'

export default function Main(){
    return(
        <div className='main-container'>
            <Carrosel/>
            <section className='mais-vendidos'>
            </section>
            <section className='categorias'></section>
        </div>
    )
}