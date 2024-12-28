import React, { useState } from "react";
import './style.css';

const PlanoDeAcao = () => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Enviar os dados para a API ou realizar outra ação desejada
    };

    return (
        <div className="body">
            <div className="form-container">
                <h1>COMO VOCÊ PODE MELHORAR NO PROXIMO ANO</h1>
                <p>Por favor, responda às seguintes perguntas.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="metasPrioridades">
                            QUAIS SÃO MINHAS PRINCIPAIS PRIORIDADES NA VIDA E
                            COMO POSSO TRANSFORMÁ-LAS EM METAS ESPECÍFICAS?
                        </label>
                        <input
                            type="text"
                            id="metasPrioridades"
                            name="metasPrioridades"
                            value={formData.metasPrioridades}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="metasAbordagem">
                            O QUE EU PRECISO MUDAR NA MINHA ABORDAGEM ATUAL
                            PARA GARANTIR QUE MINHAS METAS SEJAM ALCANÇÁVEIS E
                            MENSURÁVEIS?
                        </label>
                        <input
                            type="text"
                            id="metasAbordagem"
                            name="metasAbordagem"
                            value={formData.metasAbordagem}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="forcasAvanco">QUAIS SÃO MINHAS MAIORES FORÇAS E COMO POSSO UTILIZÁ- LAS PARA AVANÇAR EM MINHA VIDA PESSOAL E PROFISSIONAL?</label>
                        <input
                            type="text"
                            id="forcasAvanco"
                            name="forcasAvanco"
                            value={formData.forcasAvanco}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="fraquezasMelhorias">
                            QUAIS SÃO AS MINHAS FRAQUEZAS OU ÁREAS DE MELHORIA E COMO POSSO TRABALHAR PARA SUPERÁ-LAS
                            OU GERENCIÁ- LAS?
                        </label>
                        <input
                            type="text"
                            id="fraquezasMelhorias"
                            name="fraquezasMelhorias"
                            value={formData.fraquezasMelhorias}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="habilidadesComunicacao">
                            COMO EU ME COMUNICO COM OS OUTROS E O QUE POSSO
                            FAZER PARA MELHORAR MINHAS HABILIDADES DE
                            COMUNICAÇÃO?
                        </label>
                        <input
                            type="text"
                            id="habilidadesComunicacao"
                            name="habilidadesComunicacao"
                            value={formData.habilidadesComunicacao}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="habilidadesRelacionamento">
                            QUAIS RELACIONAMENTOS SÃO MAIS SIGNIFICATIVOS PARA
                            MIM E COMO POSSO FORTALECÊ-LOS?
                        </label>
                        <input
                            type="text"
                            id="habilidadesRelacionamento"
                            name="habilidadesRelacionamento"
                            value={formData.habilidadesRelacionamento}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="praticasRotina">
                            QUAIS PRÁTICAS DE AUTOCUIDADO EU JÁ ADOTO E QUAIS EU
                            PODERIA ADICIONAR À MINHA ROTINA?
                        </label>
                        <input
                            type="text"
                            id="praticasRotina"
                            name="praticasRotina"
                            value={formData.praticasRotina}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="mindfulnessAumentoFoco">
                            COMO POSSO INCORPORAR MOMENTOS DE MINDFULNESS NO
                            MEU DIA A DIA PARA REDUZIR O ESTRESSE E AUMENTAR O
                            FOCO?
                        </label>
                        <input
                            type="text"
                            id="mindfulnessAumentoFoco"
                            name="mindfulnessAumentoFoco"
                            value={formData.mindfulnessAumentoFoco}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="espiritualMinisterial">
                            QUAL É O MEU DOM MINISTÉRIAL E COMO ELES INFLUENCIA A
                            MINHA VIDA?
                        </label>
                        <input
                            type="text"
                            id="espiritualMinisterial"
                            name="espiritualMinisterial"
                            value={formData.espiritualMinisterial}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="espiritualConecxaoProfunda">
                            COMO POSSO ME CONECTAR MAIS PROFUNDAMENTE COM MEU
                            CHAMADO E ME ALINHAR AS PRÁTICAS ESPIRITUAIS NECESSÁRIAS?
                        </label>
                        <input
                            type="text"
                            id="espiritualConecxaoProfunda"
                            name="espiritualConecxaoProfunda"
                            value={formData.espiritualConecxaoProfunda}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="fisicoCondicionamento">
                            QUAIS SÃO MINHAS METAS DE SAÚDE E CONDICIONAMENTO
                            FÍSICO PARA O PRÓXIMO MÊS E COMO PLANEJO ALCANÇÁ-LAS?
                        </label>
                        <input
                            type="text"
                            id="fisicoCondicionamento"
                            name="fisicoCondicionamento"
                            value={formData.fisicoCondicionamento}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="fisicoMudancaAlimentacao">
                            QUE MUDANÇAS NA ALIMENTAÇÃO E NA ATIVIDADE FÍSICA EU
                            PODERIA INCORPORAR PARA MELHORAR MINHA SAÚDE GERAL?
                        </label>
                        <input
                            type="text"
                            id="fisicoMudancaAlimentacao"
                            name="fisicoMudancaAlimentacao"
                            value={formData.fisicoMudancaAlimentacao}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="aprendizadoParaAdiquirir">
                            QUAIS NOVAS HABILIDADES OU CONHECIMENTOS EU GOSTARIA
                            DE ADQUIRIR E POR QUE SÃO IMPORTANTES PARA MIM?
                        </label>
                        <input
                            type="text"
                            id="aprendizadoParaAdiquirir"
                            name="aprendizadoParaAdiquirir"
                            value={formData.aprendizadoParaAdiquirir}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="leituraAprendizadoContinuo">
                            COMO POSSO INTEGRAR A LEITURA E O APRENDIZADO
                            CONTÍNUO NA MINHA ROTINA DIARIA?
                        </label>
                        <input
                            type="text"
                            id="leituraAprendizadoContinuo"
                            name="leituraAprendizadoContinuo"
                            value={formData.leituraAprendizadoContinuo}
                            onChange={handleChange}
                            placeholder="Responda à pergunta"
                        />
                    </div>
                    <button type="submit">Enviar Respostas</button>
                </form>
            </div>
        </div>
    );
};

export default PlanoDeAcao;
