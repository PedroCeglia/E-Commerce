import React, {useState, useEffect} from 'react'
import './style.css'

// Import DatabaseAPI
import {
        getProdutoById,
        addProdutoInMaisVendidos,
        addProdutoInCarrosel,
        removeProdutoInCarrosel,
        removeProdutoInMaisVendidos
    } from '../../../Firebase/API/DatabaseApi'

export default function ItemChoice(props){
    // Import Produto
    const [produto, setProduto] = useState()
    useEffect(()=>{
        if(props.id != null){
            getProdutoById(props.id, setProduto)
        }
    },[props.id])

    // Get Produto Dates
    const [produtoName, setProdutoName] = useState('produto name')
    const [produtoFoto, setProdutoFoto] = useState('../assets/fone-de-ouvido-jbl.jpeg')

    useEffect(()=>{
        if(produto != null){
            setProdutoName(produto.nomeProduto)
            setProdutoFoto(produto.fotos[0].url)
        }
        else{
            setProdutoName('Produto Name')
            setProdutoFoto('../assets/fone-de-ouvido-jbl.jpeg')
        }
    },[produto])

    // Handle Item Choice
    function handleItemChoice(){
        if(props.choiceName != null && props.choice != null && produto.id != null && props.toggle != null){
            if(props.type === 'add'){
                handleAddItemChoice()
                props.toggle()
            }else if(props.type === 'remove'){
                handleRemoveItemChoice()
                props.toggle()
            }
        }
    }

    function handleRemoveItemChoice(){
        switch(props.choiceName){
            case 'carrosel':
                removeProdutoInCarrosel(produto.id)    
                break
            case 'mais vendidos':
                removeProdutoInMaisVendidos(produto.id)          
                break
            case 'produtos':
                deleteProduto()
                break
            default :
                break
        }
    }
    function handleAddItemChoice(){ 
        switch(props.choiceName){
            case 'carrosel':
                addCarroselProduto(produto.id)    
                break
            case 'mais vendidos':
                addMaisVendidosProduto(produto.id)          
                break
            default :
                break
        }
        
    }

    // Add Produto In Carrosel
    function addCarroselProduto(id){
        if(props.choice.length < 6){
            addProdutoInCarrosel(id)
        }else{
            alert('O Carrosel deve ter no maximo 6 itens')
        }
    }
    // Add Produto In Mais Vendidos
    function addMaisVendidosProduto(id){
        if(props.choice.length < 6){
            addProdutoInMaisVendidos(id)
        }else{
            alert('O Mais Vendidos deve ter no maximo 6 itens')
        }
    }

    // Deletando
    function deleteProduto(){
        if(props.id != null && props.delete != null){
            props.delete(props.id)
        }
    }

    const [fotoType, setFotoType] = useState('../../assets/add.png')
    useEffect(()=>{
        if(props.type === 'add'){
            setFotoType('../../assets/add.png')
        } else if(props.type === 'remove'){
            setFotoType('../../assets/close.png')
        }
    },[props.type])

    return(
        <article className='container-item-produto-adm choice' onClick={handleItemChoice}>
            <img src={produtoFoto} alt='Produto'/>
            <div>
                <span className='produto'>{produtoName}</span>
            </div>
            <div className='open-add-adm-choice'>
                <img src={fotoType} alt='Add Icon'/>
            </div>
        </article>
    )
}