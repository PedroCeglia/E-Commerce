import React from 'react'
import './style.css'

// Import React Redux
import { connect } from 'react-redux'

// Import Widget
import Carrosel from './Carrosel'
import ItemProduto from '../../Widgets/ItemProduto'

function Main({produtos, carrosel, maisVendidos}){
    return(
        <div className='main-container'>
            <Carrosel
                list={carrosel}
            />
            <h2>Mais Vendidos</h2>
            <section className='mais-vendidos'>         
                {
                    maisVendidos.map((produto, key) => {
                        return(
                            <ItemProduto
                                id={produto.id}
                                key={key}
                            />
                        )
                    })
                }
            </section>
            <h2>Outros Produtos</h2>
            <section className='categorias'>
            {
                    produtos.map((produto, key) => {
                        return(
                            <ItemProduto
                                id={produto.id}
                                key={key}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}
export default connect(state => ({
    produtos:state.produtos.produtos,
    carrosel:state.produtos.carrosel,
    maisVendidos:state.produtos.maisVendidos
}))(Main)