import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const [usuarioCriado, setUsuarioCriado] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Faz a requisição POST ao backend
            const response = await fetch("http://localhost:8080/cadastro_user/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const usuario = await response.json(); // Obtem os dados do usuário criado
                console.log("Usuário criado com sucesso:", usuario);

                // Salva o usuário criado no estado
                setUsuarioCriado(usuario);

                // Redireciona para outra tela ou exibe os dados na mesma tela
                navigate("/Avalicao", { state: { usuario } }); // Passa o usuário para a próxima tela
            } else {
                console.error("Erro ao enviar os dados:", response.statusText);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className="form-container">
            <h1>Cadastro</h1>
            <p>Preencha as informações abaixo para realizar seu cadastro:</p>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="nome">Nome</label>
                    <input
                        placeholder="Thiago Lemes"
                        type="text"
                        name="nome"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        placeholder="41998555555"
                        type="tel"
                        name="telefone"
                        id="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="email@test.com"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </form>

            {/* Exibe o usuário criado se ele existir */}
            {usuarioCriado && (
                <div className="user-info">
                    <h2>Usuário Criado:</h2>
                    <p>Nome: {usuarioCriado.nome}</p>
                    <p>Email: {usuarioCriado.email}</p>
                    <p>Telefone: {usuarioCriado.telefone}</p>
                </div>
            )}
        </div>
    );
};

export default Cadastro;
