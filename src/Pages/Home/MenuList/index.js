import React, {useEffect} from 'react'

// Import React Router Dom
import { Link } from 'react-router-dom'

// Import React Redux
import { connect } from 'react-redux'

// Import Auth Api
import {logOutUser} from '../../../Firebase/API/AuthApi'

function MenuList({user}){

    if(user.exist !== false){
        return(
            <ul>
                <li><Link className='link first-list' to='/'>Home</Link></li>
                <li><Link className='link' to='/carrinho'>Carrinho</Link></li>
                <li><Link className='link' to='/'>Histórico</Link></li>
                <li><Link className='link' to='/'>Categorias</Link></li>
                <li onClick={logOutUser}><button className='link noclick'>Sair</button></li>
                <li><Link className='link' to='/'>Contato</Link></li>
            </ul>
        )
    }else{
        return(
            <ul>
                <li><Link className='link first-list' to='/'>Home</Link></li>
                <li><Link className='link' to='/carrinho'>Carrinho</Link></li>
                <li><Link className='link' to='/'>Histórico</Link></li>
                <li><Link className='link' to='/'>Categorias</Link></li>
                <li><Link className='link' to='/entrar'>Entrar</Link></li>
                <li><Link className='link' to='/'>Contato</Link></li>
            </ul>
        )
    }
}

export default connect(state => ({user:state.user}))(MenuList)