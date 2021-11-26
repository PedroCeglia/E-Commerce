import React from 'react'

// Import React Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import Widgets
import Home from '../Pages/Home'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route/>
                    <Route/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}