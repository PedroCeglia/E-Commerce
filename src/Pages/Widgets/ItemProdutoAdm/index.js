import React from 'react'
import './style.css'

export default function ItemProdutoAdm(){
    return(
        <article className='container-item-produto-adm'>
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