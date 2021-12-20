import React, {useEffect} from 'react'
import './style.css'

// Import React Router
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

// Import React Redux
import {connect} from 'react-redux'

// Import Widgets
import MenuList from './MenuList'


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
                    <MenuList/>
                </nav>
                <div className='toggle-container'>
                    <img onClick={toggleMenu} className='open' src='../assets/open-menu.png' alt='Open Menu icon'/>
                    <img onClick={toggleMenu} className='close none' src='../assets/close.png' alt='Close Menu icon'/>
                    <nav onClick={toggleMenu} className='nav-toggle none'>
                        <MenuList/>
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
                    <MenuList/>
                </nav>
            </footer>
        </div>
    )
}
export default connect(state => ({user:state.user}))(Home)