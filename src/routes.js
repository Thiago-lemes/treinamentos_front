import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Metas from './pages/home';
import Avalicao from './pages/avaliacao';
import Cadastro from './pages/cadastro';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Metas" element={<Metas />} />
                <Route path="/Avalicao" element={<Avalicao />}/>
                <Route path="/Cadastro" element={<Cadastro />}/>
            </Routes>
        </BrowserRouter>
    )
}
