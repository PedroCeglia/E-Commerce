import React from 'react'
import './style.css'

// Import Widget
import Carrosel from './Carrosel'

export default function Main(){
    return(
        <div className='main-container'>
            <Carrosel/>
            <h2>Mais Vendidos</h2>
            <section className='mais-vendidos'>         
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                </article>    
            </section>
            <section className='categorias'></section>
        </div>
    )
}