"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Defina o tipo dos dados
interface CoreFeature {
    id: number;
    icon: string;
    alt: string;
    description: string;
    title: string;
    width?: number;
}

const core_features_content = {
    title_2: "Rede De Serviços",
    sm_des: "Acesso a uma gama de especialidades médicas e exames para atender todas as suas necessidades. A Rede de parceiros Efycard inclui clínicas e profissionais de diversas áreas, garantindo que você tenha acesso a cuidados médicos de qualidade e exames essenciais para manter sua saúde em dia.",
    title_exams: "Exames",
    title_specialties: "Especialidades",
    title_complementary_medicine: "Medicina Complementar / Estética",
};

const CoreFeaturesHomeThree = () => {
    const [coreFeatures, setCoreFeatures] = useState<CoreFeature[]>([]);

    // Carregar os dados do arquivo JSON
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/exames.json");
                if (!response.ok) {
                    throw new Error("Erro ao carregar os dados");
                }
                const data = await response.json();
                setCoreFeatures(data);
            } catch (error) {
                console.error("Erro ao carregar o arquivo JSON:", error);
            }
        };
        fetchData();
    }, []);

    // Função para renderizar seções dinamicamente
    const renderSection = (title: string, items: CoreFeature[], sectionClass: string = "") => (
        <div className={`row mb-50 ${sectionClass}`}>
            <div className="col-xl-12">
                <h3 className="custom-title">{title}</h3>
            </div>
            {items.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                    <div
                        className="services-box style_3 mb-60 wow fadeInUp p-3"
                        data-wow-delay={`${0.3 + i * 0.1}s`} // Atraso sequencial
                    >
                        <div className="services-content service-content-three d-flex align-items-center">
                            <div className="services-icon mb-35">
                                <Image
                                    src={item.icon}
                                    alt={item.alt || item.title} // Fallback para o título
                                    width={item.width || 100}
                                    height={100}
                                />
                            </div>
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    // Categorias de dados
    const exams = coreFeatures.filter((item) => item.id <= 30);
    const specialties = coreFeatures.filter((item) => item.id > 30 && item.id < 65);
    const complementaryMedicine = coreFeatures.filter((item) => item.id >= 65);

    return (
        <section className="core-features-area pt-115 pb-50" id="servicos">
            <div className="container">
                {/* Título e descrição principal */}
                <div className=" align-items-center mb-40">
                    <div className="col-xl-12">
                        <div className="section-title mb-30">
                            <h2>{core_features_content.title_2}</h2>
                            <p>{core_features_content.sm_des}</p>
                        </div>
                    </div>
                </div>

                {/* Renderizar seções */}
                {renderSection(core_features_content.title_exams, exams)}
                {renderSection(core_features_content.title_specialties, specialties, "specialties-background")}
                {renderSection(core_features_content.title_complementary_medicine, complementaryMedicine)}
            </div>
        </section>
    );
};

export default CoreFeaturesHomeThree;
