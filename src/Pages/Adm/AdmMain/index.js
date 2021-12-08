import React from 'react'
import './style.css'

// Import Widgets
import ItemProdutoAdm from '../../Widgets/ItemProdutoAdm'

export default function AdmMain(){
    return(
        <div className='adm-container'>
            <div className='carrosel-adm-container'>
                <h2>Itens Carrosel <button>Adicionar</button> </h2>
                <div className='carrosel-adm-content'>
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>                    
                    <ItemProdutoAdm/>                    
                    <ItemProdutoAdm/>                    
                    <ItemProdutoAdm/>                    
                </div>
            </div>
            <div className='mais-vendidos-adm-container'>
                <h2>Itens Mais Vendidos <button>Adicionar</button> </h2>
                <div className='mais-vendidos-adm-content'>
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/> 
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>
                </div>
            </div>
            <div className='produtos-adm-container'>
                <h2>Produtos <button>Adicionar</button> </h2>
                <div className='produtos-adm-content'>
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/> 
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>                    
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/> 
                    <ItemProdutoAdm/>
                    <ItemProdutoAdm/>                    
                </div>
            </div>
        </div>
    )
}