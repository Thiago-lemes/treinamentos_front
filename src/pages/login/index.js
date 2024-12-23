import React, {useState} from "react";
import "../auth.css";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [usuarioCriado, setUsuarioCriado] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const usuario = await response.json(); // Obtém os dados do usuário criado
                console.log("Usuário criado com sucesso:", usuario);

                // Salva o usuário criado no estado
                setUsuarioCriado(usuario);

                // Redireciona para outra tela ou exibe os dados na mesma tela
                navigate("/Avalicao", {state: {usuario}}); // Passa o usuário para a próxima tela
            }
        } catch (error) {
            alert("Deu Ruim")
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Entrar</button>
                <p> Criar conta</p>
                <p>Recuperar a senha</p>
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

export default Login;
