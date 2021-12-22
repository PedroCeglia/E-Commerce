import React, {useState, useEffect} from 'react'
import './style.css'

// Import Racr Router
import {useNavigate} from 'react-router'

// Import Database API
import {getProdutoById} from '../../../Firebase/API/DatabaseApi'

export default function ItemProduto(props){

    // Get Produto By Id
    const [produto, setProduto] = useState()
    useEffect(()=>{
        if(props.id != null){
            getProdutoById(props.id, setProduto)
        }
    },[props.id])

    // Get Produto Date
    const [produtoName, setProdutoName] = useState('nome produto')
    const [precoOg, setPrecoOg] = useState('R$100,00')
    const [precoPromo, setPrecoPromo] = useState('R$70,00')
    const [fotoProduto, setFotoProduto] = useState('../assets/fone-de-ouvido-jbl.jpeg')

    useEffect(()=>{
        if(produto != null){
            setProdutoName(produto.nomeProduto)
            setFotoProduto(produto.fotos[0].url)
            if(produto.precoOg.indexOf('0') === 0){
                const precoOgEdit = produto.precoOg.substring(1,6)
                setPrecoOg('R$' + precoOgEdit)
            } else{
                setPrecoOg('R$' + produto.precoOg)
            }
            if(produto.precoPromo.indexOf('0') === 0){
                const precoPromoEdit = produto.precoPromo.substring(1,6)
                setPrecoPromo('R$' + precoPromoEdit)
            } else{
                setPrecoPromo('R$' + produto.precoPromo)
            }
            
        } else{
            setProdutoName("nome produto")
            setFotoProduto('../assets/fone-de-ouvido-jbl.jpeg')
            setPrecoOg('R$100,00')
            setPrecoPromo('R$70,00')
        }
    },[produto])

    // Get Navigate
    const navigate = useNavigate()
    
    function moveToProdutoPage(){
        if(produto != null){
            navigate('/produto', {state:{idProduto:produto.id}})
        }
    }

    return(
        <article className='container-item-produto'>
            <img src={fotoProduto} alt='Produto'/>
            <div>
                <span className='produto'>{produtoName}</span>
                <span className='preco'>{precoPromo}<span>{precoOg}</span></span>
            </div>
            <button onClick={moveToProdutoPage}>
                <span>Adicionar ao Carrinho</span>
                <img src='assets/carrinho.png' alt='Carrinho Icon'/>
            </button>
        </article>
    )
}