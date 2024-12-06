import React, {useState} from "react";
import "./style.css";
import {Link} from "react-router-dom";

const Metas = () => {
    // Estados para controlar a visibilidade de cada grupo
    const [visibleGroup, setVisibleGroup] = useState(null);

    // Função para alternar visibilidade
    const toggleGroup = (group) => {
        setVisibleGroup(visibleGroup === group ? null : group); // Alterna o estado
    };

    return (
        <div className="card-container">
            <div className="card yellow" onClick={() => toggleGroup("group1")}>
                <h2>Estabelecimento de Metas</h2>
            </div>
            {visibleGroup === "group1" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p>A importância de definir metas claras e específicas para guiar seu desenvolvimento
                            pessoal.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"O CORAÇÃO DO HOMEM PLANEJA O SEU CAMINHO, MAS O
                            SENHOR DETERMINA OS SEUS PASSOS." - PROVÉRBIOS 16:9</p>
                    </div>
                </>
            )}

            <div className="card yellow" onClick={() => toggleGroup("group2")}>
                <h2>Autoconhecimento</h2>
            </div>
            {visibleGroup === "group2" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p> COMPREENDER SUAS FORÇAS E FRAQUEZAS É ESSENCIAL PARA O
                            CRESCIMENTO EFETIVO.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"POIS ASSIM COMO UM HOMEM PENSA EM SEU CORAÇÃO,
                            ASSIM ELE É." - PROVÉRBIOS 23:7</p>
                    </div>
                </>
            )}

            <div className="card yellow" onClick={() => toggleGroup("group3")}>
                <h2>Leitura e Aprendizado</h2>
            </div>
            {visibleGroup === "group3" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p>A LEITURA E O APRENDIZADO CONTÍNUO COMO PILARES PARA O
                            DESENVOLVIMENTO PESSOAL.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"EM TODO O TEU CONHECIMENTO, ADQUIRE O ENTENDIMENTO." -
                            PROVÉRBIOS 4:7</p>
                    </div>
                </>
            )}

            <div className="card yellow" onClick={() => toggleGroup("group4")}>
                <h2>Gerenciamento de prioridades</h2>
            </div>
            {visibleGroup === "group4" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p>TÉCNICAS PARA OTIMIZAR O USO DO TEMPO E AUMENTAR A
                            PRODUTIVIDADE.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"APROVEITE BEM O TEMPO, PORQUE OS DIAS SÃO MAUS." - EFÉSIOS 5:16</p>
                    </div>
                </>
            )}

            <div className="card yellow" onClick={() => toggleGroup("group5")}>
                <h2>Habilidades Interpessoais</h2>
            </div>
            {visibleGroup === "group5" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p>A HABILIDADE DE SE COMUNICAR E CONSTRUIR RELACIONAMENTOS SAUDÁVEIS.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"NO MUITO FALAR NÃO FALTA TRANSGRESSÃO, MAS O QUE
                            MODERA OS LÁBIOS É SÁBIO." - PROVÉRBIOS 10:19</p>
                    </div>
                </>
            )}

            <div className="card yellow" onClick={() => toggleGroup("group6")}>
                <h2>Mindfulness e Autocuidado</h2>
            </div>
            {visibleGroup === "group6" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p>A PRÁTICA DE MINDFULNESS E A IMPORTÂNCIA DO AUTOCUIDADO PARA O BEM-ESTAR.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"MAIS VALE UM PUNHADO DE DESCANSO DO QUE
                            DUAS MÃO-CHEIAS DE TRABALHO E CORRERIA." - ECLESIASTES 4:6</p>
                    </div>
                </>
            )}

            <div className="card yellow" onClick={() => toggleGroup("group7")}>
                <h2>Vida espiritual</h2>
            </div>
            {visibleGroup === "group7" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p>A EXPLORAÇÃO DAS CRENÇAS E A PRÁTICA ESPIRITUAL COMO FONTE DE
                            PROPÓSITO.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"BUSCAI AO SENHOR ENQUANTO SE PODE ACHAR, INVOCAI-O
                            ENQUANTO ESTÁ PERTO." - ISAÍAS 55:6</p>
                    </div>
                </>
            )}

            <div className="card yellow" onClick={() => toggleGroup("group8")}>
                <h2>Condicionamento Físico</h2>
            </div>
            {visibleGroup === "group8" && (
                <>
                    <div className="card black">
                        <h3>CONTEÚDO:</h3>
                        <p>A PRÁTICA DE EXERCÍCIOS E A ALIMENTAÇÃO SAUDÁVEL
                            COMO FUNDAMENTAIS PARA A SAÚDE FÍSICA E MENTAL.</p>
                    </div>
                    <div className="card black">
                        <h3>PROVÉRBIO BÍBLICO:</h3>
                        <p>"NÃO SABEIS QUE O VOSSO CORPO É SANTUÁRIO
                            DO ESPÍRITO SANTO, QUE HABITA EM VÓS?" - 1 CORÍNTIOS 6:19</p>
                    </div>
                </>
            )}

            <Link className="button" to="/Cadastro">Fazer Avaliação</Link>

        </div>
    );
};

export default Metas;
