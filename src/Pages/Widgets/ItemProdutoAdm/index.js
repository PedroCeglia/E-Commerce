import React, {useState, useEffect} from 'react'
import './style.css'

// Import Database API
import {getProdutoById } from '../../../Firebase/API/DatabaseApi'

export default function ItemProdutoAdm(props){

    // Get Produto By Id
    const [produto, setProduto] = useState()
    useEffect(()=>{
        if(props.id != null){
            getProdutoById(props.id, setProduto)
        }
    },[])

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

    // Deletando
    function deleteProduto(){
        if(props.id != null && props.delete != null){
            props.delete(props.id)
        }
    }

    return(
        <article className='container-item-produto-adm'>
            <img src={fotoProduto} alt='Produto'/>
            <div>
                <span className='produto'>{produtoName}</span>
                <span className='preco'>{precoPromo}<span>{precoOg}</span></span>
            </div>
            <div className='container-item-produto-adm-buttons'>
                <button>
                    <span>Editar</span>
                    <img src='assets/pencil.png' alt='Edit Icon'/>
                </button>
                <button onClick={deleteProduto} className='remove'>
                    <span>Remove</span>
                    <img src='assets/close.png' alt='Edit Icon'/>
                </button>                
            </div>
        </article>
    )
}