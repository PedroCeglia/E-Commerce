import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Erro(){
    return(
        <div class='erro-container'>
            <div className='erro-content'>
                <h2>Erro 404</h2>
                <span>Page Not Found</span>
                <Link to='/'>Back to Home Page</Link>                
            </div>

        </div>
    )
}