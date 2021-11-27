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
                    <button>
                        <span>Adicionar ao Carrinho</span>
                        <img src='assets/carrinho.png' alt='Carrinho Icon'/>
                    </button>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                    <button>
                        <span>Adicionar ao Carrinho</span>
                        <img src='assets/carrinho.png' alt='Carrinho Icon'/>
                    </button>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                    <button>
                        <span>Adicionar ao Carrinho</span>
                        <img src='assets/carrinho.png' alt='Carrinho Icon'/>
                    </button>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                    <button>
                        <span>Adicionar ao Carrinho</span>
                        <img src='assets/carrinho.png' alt='Carrinho Icon'/>
                    </button>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                    <button>
                        <span>Adicionar ao Carrinho</span>
                        <img src='assets/carrinho.png' alt='Carrinho Icon'/>
                    </button>
                </article>
                <article>
                    <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                    <div>
                        <span className='produto'>Nome do Produto</span>
                        <span className='preco'>R$100<span>R$200</span></span>
                    </div>
                    <button>
                        <span>Adicionar ao Carrinho</span>
                        <img src='assets/carrinho.png' alt='Carrinho Icon'/>
                    </button>
                </article>
            </section>
            <section className='categorias'></section>
        </div>
    )
}