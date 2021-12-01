import React, {useEffect} from 'react'
import './style.css'

// Import React Router
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

// Import React Redux
import {connect} from 'react-redux'


function Home({user}){
    
    // Toggle Menu
    function toggleMenu(){
        const open = document.querySelector('.toggle-container .open')
        const close = document.querySelector('.toggle-container .close')
        const nav = document.querySelector('.toggle-container .nav-toggle')

        open.classList.toggle('none')
        close.classList.toggle('none')
        nav.classList.toggle('none')
    }

    // Change To ADM Page
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(user)
        if(user.user.id === 'efQom6vXoPOIomBCavcIussgonl2'){
            navigate('/adm')
        }
    },[user, navigate])

    return(
        <div className='home-container'>
            <header>
                <Link to='/' className='logo-container'>
                   <img src='../assets/logo.png' alt='Logo Icon'/>
                   <span>TecNine</span> 
                </Link>
                <nav className='nav-main'>
                    <ul>
                        <li><Link className='link' to='/carrinho'>Carrinho</Link></li>
                        <li><Link className='link' to='/'>Histórico</Link></li>
                        <li><Link className='link' to='/'>Categorias</Link></li>
                        <li><Link className='link' to='/entrar'>Entrar</Link></li>
                        <li><Link className='link' to='/'>Contato</Link></li>
                    </ul>
                </nav>
                <div className='toggle-container'>
                    <img onClick={toggleMenu} className='open' src='../assets/open-menu.png' alt='Open Menu icon'/>
                    <img onClick={toggleMenu} className='close none' src='../assets/close.png' alt='Close Menu icon'/>
                    <nav onClick={toggleMenu} className='nav-toggle none'>
                        <ul>
                            <li><Link className='link first-list' to='/'>Home</Link></li>
                            <li><Link className='link' to='/carrinho'>Carrinho</Link></li>
                            <li><Link className='link' to='/'>Histórico</Link></li>
                            <li><Link className='link' to='/'>Categorias</Link></li>
                            <li><Link className='link' to='/entrar'>Entrar</Link></li>
                            <li><Link className='link' to='/'>Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className='outlet-container'>
                <Outlet/>
            </div>
            <footer>
                <Link to='/' className='logo-container'>
                   <img src='../assets/logo.png' alt='Logo Icon'/>
                   <span>TecNine</span> 
                </Link>
                <nav className='nav-main'>
                    <ul>
                        <li><Link className='link first-list' to='/'>Home</Link></li>
                        <li><Link className='link' to='/carrinho'>Carrinho</Link></li>
                        <li><Link className='link' to='/'>Histórico</Link></li>
                        <li><Link className='link' to='/'>Categorias</Link></li>
                        <li><Link className='link' to='/entrar'>Entrar</Link></li>
                        <li><Link className='link' to='/'>Contato</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}
export default connect(state => ({user:state.user}))(Home)