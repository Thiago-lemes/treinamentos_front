import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Metas from './pages/home';
import Avalicao from './pages/avaliacao';
import Cadastro from './pages/cadastro';
import Header from "./components/cabecalho";
import Login from "./pages/login";
import PlanoDeAcao from "./pages/planoDeAcao";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Metas/>}/>
                <Route path="/Avalicao" element={<Avalicao/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Header" element={<Header/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/PlanoDeAcao" element={<PlanoDeAcao/>}/>
            </Routes>
        </BrowserRouter>
    )
}
