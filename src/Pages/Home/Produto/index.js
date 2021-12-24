import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router
import {useLocation, useNavigate} from 'react-router'

// Import React Redux
import {connect} from 'react-redux'
// Import Database API
import {getProdutoById, addProdutoInCarrinho} from '../../../Firebase/API/DatabaseApi'

// Import Widgets
import Carrosel from './Carrosel'
import ItemProduto from '../../Widgets/ItemProduto'

function Produto({user}){

    // Masck Number Input
    const [qntProduto, setQntProduto] = useState(1)
    useEffect(()=>{
        if(qntProduto > 5){
            setQntProduto(5)
        } else if (qntProduto <= 0){
            setQntProduto(1)
        }
    },[qntProduto])

    // Get Location
    const location = useLocation()
    const state = location.state

    // Get Navigate
    const navigate = useNavigate()

    // Get Produto Date
    const [produto, setProduto] = useState()
    useEffect(()=>{
        if(state != null){
            if(state.idProduto != null)
                getProdutoById(state.idProduto, setProduto)
        }
    },[state])

    // Set UI
    const [caracteristicaList, setCaracteristicaList] = useState([])
    const [produtoName, setProdutoName] = useState('Produto Name')
    const [fotoList, setFotoList] = useState([])
    const [precoOg, setPrecoOg] = useState('100')
    const [precoPromo, setPrecoPromo] = useState('100')
    const [promoPorc, setPromoPorc] = useState('50%')
    const [descricao, setDescricao] = useState([])
    useEffect(()=>{
        if(produto != null){
            setFotoList(produto.fotos)
            setProdutoName(produto.nomeProduto)
            setPromoPorc(produto.promoPorc)
            setDescricao(produto.descricaoProduto.split("\n"))
            setCaracteristicaList(produto.caracteristicas)
            if(produto.precoOg.indexOf('0') === 0){
                const precoOgEdit = produto.precoOg.substring(1,6)
                setPrecoOg(precoOgEdit)
            } else{
                setPrecoOg(produto.precoOg)
            }
            if(produto.precoPromo.indexOf('0') === 0){
                const precoPromoEdit = produto.precoPromo.substring(1,6)
                setPrecoPromo(precoPromoEdit)
            } else{
                setPrecoPromo(produto.precoPromo)
            }
        }else{
            setFotoList([])
            setProdutoName('Produto Name')
            setPrecoOg('200')
            setPrecoPromo('100')
            setPromoPorc('50%')
            setDescricao([])
            setCaracteristicaList([
                'Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM',
                'Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM',
                'Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM',
                'Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM',
                'Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM',
                'Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM',
                'Max 131 PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM 100% BORRACHA PREMIUM'
            ])
        }
    },[produto])
 

    // Add In Car 
    function addInCar(){
        if(user.exist && produto != null){
            const total = parseInt(precoPromo) * qntProduto
            addProdutoInCarrinho(user.user.id, produto.id, qntProduto, total)
            navigate('/carrinho')
        } else if (user.exist !== true){
            navigate('/entrar')
        }
    }

    return(
        <div className='produto-container'>
            <div className='produto-container-main'>
                <Carrosel
                    fotos={fotoList}
                />
                <div className='produto-info'>
                    <h2>{produtoName}</h2>
                    <div className='desconto-container'>
                        <div>
                            <span className='desconto-preco'>R${precoPromo}</span>
                            <span className='original'>R${precoOg}</span>
                            <span className='juros-span'>Em até 8x sem juros</span>
                        </div>
                        <span className='desconto'>-{promoPorc}</span>
                    </div>
                    
                    <div className='comprar-container'>
                        <span>Quantidade</span>
                        <div>
                            <input type='number' placeholder='Quantidade' onChange={number => {setQntProduto(number.target.valueAsNumber)}} value={qntProduto}/>
                            <button onClick={addInCar}>Comprar</button>                            
                        </div>
                    </div>
                    <img className='formas-de-pagamento' src='../assets/formas-de-pagamento.png' alt='Formas de Pagamento'/>
                </div>  
            </div>
            <div className='produto-container-info'>
                <div className='container-descricao'>
                    <h2>{produtoName}</h2>
                    <p>
                        {descricao.map((item, key) => {
                            return(
                                <span className='block-item' key={key}>{item}</span>
                            )
                        })}
                    </p>                    
                </div>
                <div className='container-caracteristicas'>
                    <h2>Características do Produto</h2>
                    <ul>
                        {
                            caracteristicaList.map((item, key) => {
                                return(
                                    <li key={key}><span>{item}</span></li>
                                )
                            })
                        }
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

export default connect(state => ({user:state.user}))(Produto)