import React from 'react'
import './style.css'

export default function ItemCarrinho(){
    return(
        <tr>
            <td className='td-item'>
                <img src='../assets/fone-de-ouvido-jbl.jpeg' alt='Produto'/>
                <span>Nome do Produto</span>
            </td>
            <td className='td-preco'>
                <span>R$100</span>
            </td>
            <td className='td-quantidade'>
                <span>2</span>
            </td>
            <td className='td-subtotal'>
                <span>R$200</span>
            </td>
            <td className='td-remove-edit'>
                <img src='../assets/pencil.png' alt='Edit Icon'/>
                <img src='../assets/close.png' alt='Remove Icon'/>
            </td>
        </tr>
    )
}