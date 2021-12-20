import React, { useEffect, useState } from 'react'
import './style.css'

// Import React Redux
import { connect } from 'react-redux'

// Import React Router
import { useNavigate } from 'react-router'

// Import Auth API
import {userCreate, userSingIn} from '../../../Firebase/API/AuthApi'

function Entrar({user}){

    // Create Account
    const [nameInputCreate, setNameInputCreate] = useState('')
    const [emailInputCreate, setEmailInputCreate] = useState('')
    const [passwordInputCreate, setPasswordInputCreate] = useState('')     
    function createAccount(){
        if(nameInputCreate.length > 3){
            if(emailInputCreate.indexOf('@') > -1){
                if(passwordInputCreate.length > 6){
                    userCreate(nameInputCreate, emailInputCreate, passwordInputCreate)
                } else{
                    alert("A Senha Precisa Ter Mais De 6 Digitos")
                }
            }else{
                alert("Digite Um Email Valido")
            }
        }else{
            alert("O Nome Deve Ter Mais De 3 Letras")
        }
    }

    // LogIn Account
    const [emailInputLogIn, setEmailInputLogIn] = useState('')
    const [passwordInputLogIn, setPasswordInputLogIn] = useState('')
    function logInAccount(){
        if(emailInputLogIn.indexOf('@') > -1){
            if(passwordInputLogIn.length > 6){
                userSingIn(emailInputLogIn, passwordInputLogIn)
            } else{
                alert("A Senha Precisa Ter Mais De 6 Digitos")
            }
        }else{
            alert("Digite Um Email Valido")
        }
    }

    // Verify if User Is Log And Change to Home Page
    const navigate = useNavigate()
    useEffect(()=>{
        if(user.exist !== false){
            navigate('/')
        }
    },[user, navigate])
 

    return(
        <div className='entrar-container'>
            <div className='entrar-content'>
                <div className='log-container divisor'>
                    <div className='login-content'>
                        <h2>Log-In</h2>
                        <input type='email' className='email'
                            value={emailInputLogIn} onChange={text => {setEmailInputLogIn(text.target.value)}}
                         placeholder='Email:'/>
                        <input type='password' 
                            value={passwordInputLogIn} onChange={text => {setPasswordInputLogIn(text.target.value)}} 
                        placeholder='Password:'/>
                        <button onClick={logInAccount}>Login</button>
                    </div>
                </div>
                <div className='log-container'>
                    <div className='singin-content'>
                        <h2>Sing-In</h2>
                        <input type='text' className='name'
                            value={nameInputCreate} onChange={text => {setNameInputCreate(text.target.value)}}                        
                        placeholder='Nome:'/>
                        <input type='email' className='email'
                            value={emailInputCreate} onChange={text => {setEmailInputCreate(text.target.value)}}
                         placeholder='Email:'/>
                        <input type='password' 
                            value={passwordInputCreate} onChange={text => {setPasswordInputCreate(text.target.value)}} 
                        placeholder='Password:'/>
                        <button onClick={createAccount} >SingIn</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default connect(state => ({user:state.user}))(Entrar)