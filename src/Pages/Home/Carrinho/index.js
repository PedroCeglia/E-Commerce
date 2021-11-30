import React from 'react'
import './style.css'

// Import Widgets
import ItemCarrinho from './ItemCarrinho'

export default function Carrinho(){
    return(
        <div className='carrinho-container'>
            <h2>Carrinho de Compras</h2>
            <div className='carrinho-content'>
                <table className='itens-carrinho-content'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemCarrinho/>
                        <ItemCarrinho/>                        
                    </tbody>
                </table>
                <div className='valor-carrinho-content'>
                    <div><span>Subtotal</span><span className='valor'>R$100</span></div>
                    <div><span>Total do Pedido</span><span className='valor'>R$100</span></div>
                    <button>Fechar Pedido</button>
                </div>
            </div>
            <div className='carrinho-buttons-area'></div>
        </div>
    )
}