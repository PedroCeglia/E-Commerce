import React from 'react'

// Import React Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import Home Pages
import Home from '../Pages/Home'
import Main from '../Pages/Home/Main'
import Entrar from '../Pages/Home/Entrar'
import Produto from '../Pages/Home/Produto'
import Carrinho from '../Pages/Home/Carrinho'

// Import Erro Page
import Erro from '../Pages/Erro'

// Import ADM Pages
import Adm from '../Pages/Adm'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/entrar' element={<Entrar/>}/>
                    <Route path='/produto' element={<Produto/>}/>
                    <Route path='/carrinho' element={<Carrinho/>}/>
                </Route>
                <Route path='/adm' element={<Adm/>}></Route>
                <Route path='*' element={<Erro/>} />
                
            </Routes>
        </BrowserRouter>
    )
}