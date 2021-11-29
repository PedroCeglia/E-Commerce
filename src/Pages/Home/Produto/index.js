import React from 'react'
import './style.css'

// Import Widgets
import Carrosel from './Carrosel'

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

        </div>
    )
}