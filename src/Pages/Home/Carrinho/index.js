import React, { useEffect, useState } from 'react'
import './style.css'

// Import React Router
import { useNavigate } from 'react-router'

// Import React Redux
import {connect} from 'react-redux'

// Import Widgets
import ItemCarrinho from './ItemCarrinho'

function Carrinho(props){

    // Get Navigate
    const navigate = useNavigate()
    // Verify User Log
    useEffect(()=>{
        if(props.user.exist !== true){
            navigate('/entrar')
        }
    },[props.user.exist, navigate])

    // Get Car
    const [carrinho, setCarrinho] = useState([])
    useEffect(()=>{
        setCarrinho(props.carrinho.reverse())
    },[props.carrinho])
    
    // Get Total Car
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        if(carrinho != null){
            setTotal(0)
            carrinho.forEach(item => {
                setTotal( x =>(x + item.total))
            })
        }
    },[carrinho])
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
                        {carrinho.map((item, key) => {
                            return(
                               <ItemCarrinho
                                    item={item}
                                    key={key}
                               /> 
                            )
                        })}                       
                    </tbody>
                </table>
                <div className='valor-carrinho-content'>
                    <div><span>Subtotal</span><span className='valor'>R${total}</span></div>
                    <div><span>Total do Pedido</span><span className='valor'>R${total.toString()}</span></div>
                    <button>Fechar Pedido</button>
                </div>
            </div>
            <div className='carrinho-buttons-area'></div>
        </div>
    )
}
export default connect(state => ({user:state.user}))(Carrinho)