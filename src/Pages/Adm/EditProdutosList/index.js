import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router
import { useLocation, useNavigate } from 'react-router' 

// Import Database Api
import {removeProdutoInCarrosel, removeProdutoInDatabase, removeProdutoInMaisVendidos} from '../../../Firebase/API/DatabaseApi'

// Import React Redux
import { connect } from 'react-redux'

// Import Widgets
import ItemChoice from '../../Widgets/ItemChoice'

function EditProdutoList({produtos, carrosel, maisVendidos}){

    const navigate = useNavigate()
    // Open Choice Area
    function toggleChoice(){
        navigate('/adm')
    }

    // Get List Type
    const location = useLocation()
    const listType = location.state.type

    // Deletando
    function deleteProduto(id){
        const filtroCarrosel = carrosel.filter(produto => (produto.id === id))
        const filtroMaisVendidos = maisVendidos.filter(produto => (produto.id === id))
        if(filtroCarrosel[0] != null){
            removeProdutoInCarrosel(id)
        }
        if(filtroMaisVendidos[0] != null){
            removeProdutoInMaisVendidos(id)
        }
        removeProdutoInDatabase(id)
    }

    const [list, setList] = useState([])
    useEffect(()=>{
        if(listType === 'carrosel'){
            setList(carrosel)
        }else if(listType === 'mais vendidos'){
            setList(maisVendidos)
        } else if(listType === 'produtos'){
            setList(produtos)
            seForProduto()

        }
    },[listType])

    function seForProduto(){
        const container = document.querySelector('.add-adm-container-edit-list')
        container.classList.add('none')
    }

    return(
        <div className='adm-container'>
            <div className='choice-adm-container active'>
                <img onClick={toggleChoice} className='close-choice' src='../../assets/close.png' alt='Close Icon'/>
                <div className='add-adm-container-edit-list'>
                    <h2>Produtos</h2>
                    <div className='choice-content-adm'>
                        {
                            produtos.map((produto, key) => {
                                return(
                                    <ItemChoice 
                                        id={produto.id}
                                        choice={list}
                                        choiceName={listType}
                                        type='add'
                                        toggle={toggleChoice}
                                        key={key}
                                    />
                                )
                            })
                        }  
                    </div>                    
                </div>
                <div>
                    <h2 className='border'>{listType}</h2>
                    <div className='choice-content-adm'>
                        {
                            list.map((produto, key) => {
                                return(
                                    <ItemChoice 
                                        id={produto.id}
                                        choice={list}
                                        choiceName={listType}
                                        toggle={toggleChoice}
                                        type='remove'
                                        delete={deleteProduto}
                                        key={key}
                                    />
                                )
                            })
                        }  
                    </div>                    
                </div>
            </div>
            <div onClick={toggleChoice} className='block-choice-adm active'></div>
        </div>
    )
}
export default connect(state => ({
    produtos:state.produtos.produtos,
    carrosel:state.produtos.carrosel,
    maisVendidos:state.produtos.maisVendidos
}))(EditProdutoList)