import React from 'react'
import './style.css'

export default function AddProduto(){
    return(
        <div className='add-produto-container'>
            <div className='add-images'>
                <div className='add-area'>
                    <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                </div>
                <div className='images-area'>
                    <div>
                        <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                        <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                        <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                        <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                        <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                        <img src='../../assets/add.png' alt='Add Icon' title='Add Image'/>
                    </div>
                </div>
            </div>
            <div className='add-info'></div>
            <div className='add-descricao'></div>
            <div className='add-caracteristicas'></div>
        </div>
    )
}