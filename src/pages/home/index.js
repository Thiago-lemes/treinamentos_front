import React, { useState } from "react";
import "./style.css";

const Metas = () => {
    const [visibleGroup, setVisibleGroup] = useState(null);

    const toggleGroup = (group) => {
        setVisibleGroup(visibleGroup === group ? null : group);
    };

    const groups = [
        {
            id: "group1",
            title: "Estabelecimento de Metas",
            content: "A importância de definir metas claras e específicas para guiar seu desenvolvimento pessoal.",
            verse: "O coração do homem planeja o seu caminho, mas o Senhor determina os seus passos. - Provérbios 16:9"
        },
        {
            id: "group2",
            title: "Autoconhecimento",
            content: "Compreender suas forças e fraquezas é essencial para o crescimento efetivo.",
            verse: "Pois assim como um homem pensa em seu coração, assim ele é. - Provérbios 23:7"
        },
        {
            id: "group3",
            title: "Leitura e Aprendizado",
            content: "A leitura e o aprendizado contínuo como pilares para o desenvolvimento pessoal.",
            verse: "Em todo o teu conhecimento, adquire o entendimento. - Provérbios 4:7"
        },
        {
            id: "group4",
            title: "Gerenciamento de Prioridades",
            content: "Técnicas para otimizar o uso do tempo e aumentar a produtividade.",
            verse: "Aproveite bem o tempo, porque os dias são maus. - Efésios 5:16"
        },
        {
            id: "group5",
            title: "Habilidades Interpessoais",
            content: "A habilidade de se comunicar e construir relacionamentos saudáveis.",
            verse: "No muito falar não falta transgressão, mas o que modera os lábios é sábio. - Provérbios 10:19"
        },
        {
            id: "group6",
            title: "Mindfulness e Autocuidado",
            content: "A prática de mindfulness e a importância do autocuidado para o bem-estar.",
            verse: "Mais vale um punhado de descanso do que duas mãos-cheias de trabalho e correria. - Eclesiastes 4:6"
        },
        {
            id: "group7",
            title: "Vida Espiritual",
            content: "A exploração das crenças e a prática espiritual como fonte de propósito.",
            verse: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto. - Isaías 55:6"
        },
        {
            id: "group8",
            title: "Condicionamento Físico",
            content: "A prática de exercícios e a alimentação saudável como fundamentais para a saúde física e mental.",
            verse: "Não sabeis que o vosso corpo é santuário do Espírito Santo, que habita em vós? - 1 Coríntios 6:19"
        }
    ];
    return (
        <div className="card-container">
            {groups.map(({ id, title, content,verse }) => (
                <div key={id} className="card-section">
                    <button className="card" onClick={() => toggleGroup(id)}>
                        <span>{title}</span>
                        <span>{visibleGroup === id ? "-" : "+"}</span>
                    </button>
                    {visibleGroup === id && (
                        <div className="details">
                            <p>{content}</p>
                            <p>{verse}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Metas;
