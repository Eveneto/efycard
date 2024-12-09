"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Defina o tipo dos dados para os diferenciais
interface InfoData {
    id: number;
    title: string;
    description: string;
}

const infoData: InfoData[] = [
    {
        id: 1,
        title: "Excelente rede de clínicas, médicos e hospitais.",
        description: "",
    },
    {
        id: 2,
        title: "Financiamento para cirurgias e procedimentos de saúde",
        description: "",
    },
    {
        id: 3,
        title: "Pacotes de cirurgias com o melhor preço.",
        description: "",
    },
    {
        id: 4,
        title: "Seguro Cirurgia.",
        description: "",
    },
];

const FAQHomeOne = () => {
    return (
        <section className="faq-area server-bg pt-120 pb-90">
            <div className="container">
                <div className="row">
                    {/* Imagem (mantida) */}
                    <div className="col-md-6">
                        <div className="faq-img mb-30">
                            <img className="bounce-animate" src="/assets/img/bg/prancheta.png" alt="theme-pure" />
                        </div>
                    </div>

                    {/* Diferenciais */}
                    <div className="col-md-6 info">
                        <div className="heading diferenciais_txt">
                            <h2>Diferenciais que nenhum outro oferece</h2>
                            <p>
                                No EfyCard, nos dedicamos a proporcionar uma experiência de saúde incomparável. Nosso compromisso com a excelência é refletido em nossos diferenciais exclusivos, pensados para oferecer o melhor para você:
                            </p>
                        </div>
                        <ul>
                            {infoData.map((item) => (
                                <li key={item.id} className="differential-item">
                                    <div className="info">
                                        <i className="fas fa-check"></i>
                                        <h4>{item.title}</h4>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <a className="btn btn-theme border btn-md" href="https://venda.efycard.com.br/" style={{ marginTop: "30px" }}>
                            Peça já o seu cartão
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQHomeOne;
