import React from "react";
import "./style.css";
import Cadastro from "../../pages/cadastro";

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>Conquer</h1>
                </div>
                <nav className="nav-links">
                    <button className="nav-button">Home</button>
                    <button className="nav-button">Saiba Mais</button>
                    <button className="nav-button login" to={Cadastro}>Login</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
