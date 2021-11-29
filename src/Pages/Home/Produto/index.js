import React from 'react'
import './style.css'

// Import Widgets
import Carrosel from './Carrosel'
import ItemProduto from '../../Widgets/ItemProduto'

export default function Produto(){
    return(
        <div className='produto-container'>
            <div className='produto-container-main'>
                <Carrosel/>
                <div className='produto-info'>
                    <h2>Nome do Produto</h2>
                    <div className='desconto-container'>
                        <div>
                            <span className='desconto-preco'>R$100</span>
                            <span className='original'>R$200</span>
                            <span className='juros-span'>Em até 8x sem juros</span>
                        </div>
                        <span className='desconto'>-50%</span>
                    </div>
                    
                    <div className='comprar-container'>
                        <span>Quantidade</span>
                        <div>
                            <input type='number' placeholder='Quantidade' max='5' min='1'/>
                            <button>Comprar</button>                            
                        </div>
                    </div>
                    <img className='formas-de-pagamento' src='../assets/formas-de-pagamento.png' alt='Formas de Pagamento'/>
                </div>  
            </div>
            <div className='produto-container-info'>
                <div className='container-descricao'>
                    <h2>Nome Produto </h2>
                    <p> descricao: Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                        descricao: Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                        MAx 500 caracter
                    </p>                    
                </div>
                <div className='container-caracteristicas'>
                    <h2>Características do Produto</h2>
                    <ul>
                        <li><span>Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM</span></li>
                        <li><span>100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM</span></li>
                        <li><span>100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM</span></li>
                        <li><span>100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM</span></li>
                        <li><span>100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM</span></li>
                        <li><span>100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM</span></li>
                        <li><span>100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM</span></li>
                    </ul>
                </div>
            </div>
            <div className='container-produtos-relacionados'>
                <ItemProduto/>
                <ItemProduto/>
                <ItemProduto/>
            </div>

        </div>
    )
}