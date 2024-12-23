import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const Avalicao = () => {
    const location = useLocation();
    const usuarioId = location.state?.usuarioId;
    console.log("ID do usuário recebido:", usuarioId);

    const [formData, setFormData] = useState({
        metas: "",
        autoconhecimento: "",
        leitura: "",
        gerenciamento: "",
        habilidades: "",
        mindfulness: "",
        vidaEspiritual: "",
        condicionamento: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/avaliacao/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuarioId,
                    ...formData,
                }),
            });

            if (response.ok) {
                console.log("Avaliação enviada com sucesso!");
            } else {
                console.error("Erro ao enviar a avaliação:", response.statusText);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className="form-container">
            <h1>Avaliação</h1>
            <p>DÊ UMA NOTA DE 0-10 PARA CADA UM DOS ITENS PROPOSTOS A SEGUIR:</p>
            <form onSubmit={handleSubmit}>
                <div className="grid-container">
                    <div className="form-field">
                        <label>1) ESTABELECIMENTO DE METAS</label>
                        <input
                            type="number"
                            name="metas"
                            min="0"
                            max="10"
                            value={formData.metas}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>2) CONDICIONAMENTO FÍSICO</label>
                        <input
                            type="number"
                            name="autoconhecimento"
                            min="0"
                            max="10"
                            value={formData.autoconhecimento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>3) LEITURA E APRENDIZADO</label>
                        <input
                            type="number"
                            name="leitura"
                            min="0"
                            max="10"
                            value={formData.leitura}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>4) GERENCIAMENTO DE PRIORIDADES</label>
                        <input
                            type="number"
                            name="gerenciamento"
                            min="0"
                            max="10"
                            value={formData.gerenciamento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>5) HABILIDADES INTERPESSOAIS</label>
                        <input
                            type="number"
                            name="habilidades"
                            min="0"
                            max="10"
                            value={formData.habilidades}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>6) MINDFULNESS E AUTOCUIDADO</label>
                        <input
                            type="number"
                            name="mindfulness"
                            min="0"
                            max="10"
                            value={formData.mindfulness}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>7) VIDA ESPIRITUAL</label>
                        <input
                            type="number"
                            name="vidaEspiritual"
                            min="0"
                            max="10"
                            value={formData.vidaEspiritual}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>8) AUTOCONHECIMENTO</label>
                        <input
                            type="number"
                            name="condicionamento"
                            min="0"
                            max="10"
                            value={formData.condicionamento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit">Enviar Avaliação</button>
            </form>
        </div>
    );
};

export default Avalicao;
