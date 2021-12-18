import React from 'react'
import './style.css'

// Import React Router Dom
import { Link } from 'react-router-dom'

// Import React Router
import { useNavigate } from 'react-router'

// Import React Redux
import { connect } from 'react-redux'

// Import Widgets
import ItemProdutoSemBotao from '../../Widgets/ItemProdutoSemBotao'


function AdmMain({produtos, carrosel, maisVendidos}){

    const navigate = useNavigate()

    return(
        <div className='adm-container'>
            <div className='carrosel-adm-container'>
                <h2>Itens Carrosel <button onClick={
                    ()=>{
                        navigate('edit/list',{state:{type:'carrosel'}})
                    }
                    }>Editar</button></h2>
                <div className='carrosel-adm-content'>
                    {
                        carrosel.map((produto, key) => {
                            return(
                                <ItemProdutoSemBotao
                                    id={produto.id}
                                    key={key}
                                    type='Carrosel'
                                />
                            )
                        })
                    }                    
                </div>
            </div>
            <div className='mais-vendidos-adm-container'>
                <h2>Itens Mais Vendidos <button onClick={
                    ()=>{
                        navigate('edit/list',{state:{type:'mais vendidos'}})
                    }
                    }>Editar</button></h2>
                <div className='mais-vendidos-adm-content'>
                    {
                        maisVendidos.map((produto, key) => {
                            return(
                                <ItemProdutoSemBotao
                                    id={produto.id}
                                    key={key}
                                    type='Mais Vendido'
                                />
                            )
                        })
                    } 
                </div>
            </div>
            <div className='produtos-adm-container'>
                <h2>Produtos <Link to='/adm/add/produto'>Adicionar</Link>
                <button onClick={
                    ()=>{
                        navigate('edit/list',{state:{type:'produtos'}})
                    }
                    }>Editar</button>
                </h2>
                <div className='produtos-adm-content'>
                    {
                        produtos.map((produto, key) => {
                            return(
                                <ItemProdutoSemBotao
                                    id={produto.id}
                                    key={key}
                                    type='produto'
                                />
                            )
                        })
                    }                
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({
        produtos:state.produtos.produtos,
        carrosel:state.produtos.carrosel,
        maisVendidos:state.produtos.maisVendidos
    }))(AdmMain)