import React, {useEffect} from 'react'
import './style.css'

// Import React Router
import { Outlet, useNavigate } from 'react-router'

// Import React Router Dom
import { Link } from 'react-router-dom'

// Import ApiAuth
import {logOutUser} from '../../Firebase/API/AuthApi'

// Import React Redux
import { connect } from 'react-redux'

function Adm({user}){

    // Toggle Menu
    function toggleMenu(){
        const open = document.querySelector('.toggle-container.adm .open')
        const close = document.querySelector('.toggle-container.adm .close')
        const nav = document.querySelector('.toggle-container.adm .nav-toggle')

        open.classList.toggle('none')
        close.classList.toggle('none')
        nav.classList.toggle('none')
    }

    const navigate = useNavigate()

    // Change to Home Page
    useEffect(()=>{
        if(user.user == null){
            navigate('/')
        }
        else if(user.user.id !== 'efQom6vXoPOIomBCavcIussgonl2'){
            navigate('/')
        }
    },[user, navigate])

    // LogOut User
    function userLogOut(){
        logOutUser()
    }

    return(
        <div className='home-container'>
            <header>
                <Link to='/' className='logo-container'>
                   <img src='../assets/logo.png' alt='Logo Icon'/>
                   <span>TecNine</span> 
                </Link>
                <nav className='nav-main'>
                    <ul>
                        <li><Link className='link' to='/carrinho'>Pedidos</Link></li>
                        <li onClick={userLogOut} ><a href='adm' className='link'>Sair</a></li>
                    </ul>
                </nav>
                <div className='toggle-container adm'>
                    <img onClick={toggleMenu} className='open' src='../assets/open-menu.png' alt='Open Menu icon'/>
                    <img onClick={toggleMenu} className='close none' src='../assets/close.png' alt='Close Menu icon'/>
                    <nav onClick={toggleMenu} className='nav-toggle none'>
                        <ul>
                            <li><Link className='link first-list' to='/carrinho'>Pedidos</Link></li>
                            <li><a href='adm' className='link'>Sair</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className='outlet-container'>
                <Outlet/>
            </div>
        </div>
    )
}

export default connect(state => ({user:state.user}))(Adm)