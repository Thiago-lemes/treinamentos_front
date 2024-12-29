import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const PlanoDeAcao = () => {
    const location = useLocation();
    const { token, usuarioId } = location.state || {};

    const [formData, setFormData] = useState({
        metasPrioridades: "",
        metasAbordagem: "",
        forcasAvanco: "",
        fraquezasMelhorias: "",
        habilidadesComunicacao: "",
        habilidadesRelacionamento: "",
        praticasRotina: "",
        mindfulnessAumentoFoco: "",
        espiritualMinisterial: "",
        espiritualConecxaoProfunda: "",
        fisicoCondicionamento: "",
        fisicoMudancaAlimentacao: "",
        aprendizadoParaAdiquirir: "",
        leituraAprendizadoContinuo: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const perguntas = {
        metasPrioridades: "QUAIS SÃO MINHAS PRINCIPAIS PRIORIDADES NA VIDA E COMO POSSO TRANSFORMÁ-LAS EM METAS ESPECÍFICAS?",
        metasAbordagem: "O QUE EU PRECISO MUDAR NA MINHA ABORDAGEM ATUAL PARA GARANTIR QUE MINHAS METAS SEJAM ALCANÇÁVEIS E MENSURÁVEIS?",
        forcasAvanco: "QUAIS SÃO MINHAS MAIORES FORÇAS E COMO POSSO UTILIZÁ-LAS PARA AVANÇAR EM MINHA VIDA PESSOAL E PROFISSIONAL?",
        fraquezasMelhorias: "QUAIS SÃO AS MINHAS FRAQUEZAS OU ÁREAS DE MELHORIA E COMO POSSO TRABALHAR PARA SUPERÁ-LAS OU GERENCIÁ-LAS?",
        habilidadesComunicacao: "COMO EU ME COMUNICO COM OS OUTROS E O QUE POSSO FAZER PARA MELHORAR MINHAS HABILIDADES DE COMUNICAÇÃO?",
        habilidadesRelacionamento: "QUAIS RELACIONAMENTOS SÃO MAIS SIGNIFICATIVOS PARA MIM E COMO POSSO FORTALECÊ-LOS?",
        praticasRotina: "QUAIS PRÁTICAS DE AUTOCUIDADO EU JÁ ADOTO E QUAIS EU PODERIA ADICIONAR À MINHA ROTINA?",
        mindfulnessAumentoFoco: "COMO POSSO INCORPORAR MOMENTOS DE MINDFULNESS NO MEU DIA A DIA PARA REDUZIR O ESTRESSE E AUMENTAR O FOCO?",
        espiritualMinisterial: "QUAL É O MEU DOM MINISTÉRIAL E COMO ELES INFLUENCIA A MINHA VIDA?",
        espiritualConecxaoProfunda: "COMO POSSO ME CONECTAR MAIS PROFUNDAMENTE COM MEU CHAMADO E ME ALINHAR AS PRÁTICAS ESPIRITUAIS NECESSÁRIAS?",
        fisicoCondicionamento: "QUAIS SÃO MINHAS METAS DE SAÚDE E CONDICIONAMENTO FÍSICO PARA O PRÓXIMO MÊS E COMO PLANEJO ALCANÇÁ-LAS?",
        fisicoMudancaAlimentacao: "QUE MUDANÇAS NA ALIMENTAÇÃO E NA ATIVIDADE FÍSICA EU PODERIA INCORPORAR PARA MELHORAR MINHA SAÚDE GERAL?",
        aprendizadoParaAdiquirir: "QUAIS NOVAS HABILIDADES OU CONHECIMENTOS EU GOSTARIA DE ADQUIRIR E POR QUE SÃO IMPORTANTES PARA MIM?",
        leituraAprendizadoContinuo: "COMO POSSO INTEGRAR A LEITURA E O APRENDIZADO CONTÍNUO NA MINHA ROTINA DIÁRIA?",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = "Este campo não pode estar vazio";
            }
        });
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:8080/plano-acao/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ usuarioId, ...formData }),
            });

            if (response.ok) {
                alert("Plano de ação enviado com sucesso!");
                // Redirecionar ou limpar o formulário, se necessário
                setFormData({
                    metasPrioridades: "",
                    metasAbordagem: "",
                    forcasAvanco: "",
                    fraquezasMelhorias: "",
                    habilidadesComunicacao: "",
                    habilidadesRelacionamento: "",
                    praticasRotina: "",
                    mindfulnessAumentoFoco: "",
                    espiritualMinisterial: "",
                    espiritualConecxaoProfunda: "",
                    fisicoCondicionamento: "",
                    fisicoMudancaAlimentacao: "",
                    aprendizadoParaAdiquirir: "",
                    leituraAprendizadoContinuo: "",
                });
            } else {
                const errorText = await response.text();
                alert(`Erro ao enviar o plano de ação: ${errorText}`);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="body">
            <div className="form-container">
                <h1>COMO VOCÊ PODE MELHORAR NO PRÓXIMO ANO</h1>
                <p>Por favor, responda às seguintes perguntas.</p>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div className="form-field" key={key}>
                            <label htmlFor={key}>{perguntas[key]}</label>
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                placeholder="Responda à pergunta"
                                disabled={isSubmitting}
                            />
                            {errors[key] && <p className="error">{errors[key]}</p>}
                        </div>
                    ))}
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Respostas"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PlanoDeAcao;
