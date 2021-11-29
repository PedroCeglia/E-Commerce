import React from 'react'
import './style.css'

export default function ItemProduto(){
    return(
        <article className='container-item-produto'>
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
    )
}