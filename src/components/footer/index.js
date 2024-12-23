import React from "react";
import "./style.css";

const Index = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© 2024 Minha Aplicação. Todos os direitos reservados.</p>
                <nav className="footer-links">
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                    <a href="/privacidade">Política de Privacidade</a>
                </nav>
            </div>
        </footer>
    );
};

export default Index;
