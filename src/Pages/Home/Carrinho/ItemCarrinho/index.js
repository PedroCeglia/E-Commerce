import React, {useState, useEffect} from 'react'
import './style.css'

// Import Datbase API
import {getProdutoById} from '../../../../Firebase/API/DatabaseApi'

export default function ItemCarrinho(props){
    // Get Produto And Qnt
    const [produto, setProduto] = useState()
    const qnt = props.item.qnt
    const total = props.item.total
    useEffect(()=>{
        if(props.item != null){
            getProdutoById(props.item.id, setProduto)
        }
    },[props.item])

    // Set UI Widget
    const [produtoName, setProdutoName] = useState('Produto Name')
    const [precoOg, setPrecoOg] = useState('100.00')
    const [precoTotal, setPrecoTotal] = useState('200.00')
    const [fotoProduto, setFotoProduto] = useState('../assets/fone-de-ouvido-jbl.jpeg')
    useEffect(()=>{
        if(produto != null && qnt !== 0 ){
            const precoProduto = parseInt(produto.precoPromo)
            setProdutoName(produto.nomeProduto)
            setPrecoOg(precoProduto.toString())
            setPrecoTotal(total.toString())
            setFotoProduto(produto.fotos[0].url)
        } else{
            setProdutoName('Produto Name')
            setPrecoTotal('200.00')
            setPrecoOg('100.00')
            setFotoProduto('../assets/fone-de-ouvido-jbl.jpeg')
        }
    },[produto, qnt, total])
    return(
        <tr>
            <td className='td-item'>
                <img src={fotoProduto} alt='Produto'/>
                <span>{produtoName}</span>
            </td>
            <td className='td-preco'>
                <span>R${precoOg}</span>
            </td>
            <td className='td-quantidade'>
                <span>{qnt.toString()}</span>
            </td>
            <td className='td-subtotal'>
                <span>R${precoTotal}</span>
            </td>
            <td className='td-remove-edit'>
                <img src='../assets/pencil.png' alt='Edit Icon'/>
                <img src='../assets/close.png' alt='Remove Icon'/>
            </td>
        </tr>
    )
}