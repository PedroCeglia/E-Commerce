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
            <div className='container-item-produto-adm-buttons'>
                <button>
                    <span>Editar</span>
                    <img src='assets/pencil.png' alt='Edit Icon'/>
                </button>
                <button className='remove'>
                    <span>Remove</span>
                    <img src='assets/close.png' alt='Edit Icon'/>
                </button>                
            </div>
        </article>
    )
}