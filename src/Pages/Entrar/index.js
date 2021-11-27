import React from 'react'
import './style.css'

export default function Entrar(){
    return(
        <div className='entrar-container'>
            <div className='entrar-content'>
                <div className='log-container divisor'>
                    <div className='login-content'>
                        <h2>Log-In</h2>
                        <input type='email' placeholder='Email:'/>
                        <input type='password' placeholder='Password:'/>
                        <button>Login</button>
                    </div>
                </div>
                <div className='log-container'>
                    <div className='singin-content'>
                        <h2>Sing-In</h2>
                        <input type='text' placeholder='Nome:'/>
                        <input type='email' placeholder='Email:'/>
                        <input type='password' placeholder='Password:'/>
                        <button>SingIn</button>
                    </div>
                </div>
            </div>

        </div>
    )
}