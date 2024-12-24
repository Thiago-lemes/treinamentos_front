import React, {useState} from "react";
import "../auth.css";
import {useNavigate} from "react-router-dom";

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        password: "",
        role: "USER",
    });

    const [usuarioCriado, setUsuarioCriado] = useState(null);
    const [erro, setErro] = useState(""); // Estado para erro
    const navigate = useNavigate();

    // Função para atualizar o estado com base na mudança dos campos
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro(""); // Reseta o erro antes de tentar novamente

        try {
            const response = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const usuario = await response.json();
                console.log("Usuário criado com sucesso:", usuario);

                // Armazenando o token no localStorage (ou sessionStorage)
                localStorage.setItem('token', usuario.token);
                // Adicionando o usuarioId no localStorage
                localStorage.setItem('usuarioId', usuario.id);
                // Salva o usuário criado no estado
                setUsuarioCriado(usuario);

                // Redireciona para outra tela ou exibe os dados na mesma tela
                navigate("/Avalicao", {state: {usuario}}); // Passa o usuário para a próxima tela
            } else {
                // Exibe erro caso o cadastro falhe
                const errorData = await response.json();
                setErro(errorData.message || "Erro ao cadastrar o usuário.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setErro("Erro na requisição. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="form-container">
            <h1>Cadastro</h1>
            <p>Preencha as informações abaixo para realizar seu cadastro:</p>
            {erro && <div className="error-message">{erro}</div>}
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
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
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
            {usuarioCriado && (
                <div className="user-info">
                    <h2>Usuário Criado:</h2>
                    <p>Nome: {usuarioCriado.nome}</p>
                    <p>Email: {usuarioCriado.email}</p>
                    <p>Role: {usuarioCriado.role}</p>
                </div>
            )}
        </div>
    );
};

export default Cadastro;
