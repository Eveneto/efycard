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

    // Filtrar os itens com base no ID
    const exams = coreFeatures.filter((item) => item.id <= 30);
    const specialties = coreFeatures.filter((item) => item.id > 30 && item.id < 65);
    const complementaryMedicine = coreFeatures.filter((item) => item.id >= 65);

    return (
        <section className="core-features-area pt-115 pb-50" id="servicos">
            <div className="container">
                {/* Título e descrição principal */}
                <div className="row align-items-center mb-40">
                    <div className="col-xl-12">
                        <div className="section-title mb-30">
                            <h2>{core_features_content.title_2}</h2>
                            <p>{core_features_content.sm_des}</p>
                        </div>
                    </div>
                </div>

                {/* Exames */}
                <div className="row mb-50">
                    <div className="col-xl-12">
                        <h3 className="custom-title">{core_features_content.title_exams}</h3>
                    </div>
                    {exams.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services-box style_3 mb-60 wow fadeInUp p-3" data-wow-delay="0.3s">
                                <div className="services-content service-content-three d-flex align-items-center">
                                    <div className="services-icon mb-35">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <h4>{item.description}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Especialidades */}
                <div className="specialties-background">
                    <div className="row">
                        <div className="col-xl-12">
                            <h3 className="custom-title">{core_features_content.title_specialties}</h3>
                        </div>
                        {specialties.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box style_3 mb-60 wow fadeInUp p-3" data-wow-delay="0.3s">
                                    <div className="services-content service-content-three d-flex align-items-center">
                                        <div className="services-icon mb-35">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <h4>{item.description}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Medicina Complementar / Estética */}
                <div className="row mb-50 mt-50">
                    <div className="col-xl-12">
                        <h3 className="custom-title">{core_features_content.title_complementary_medicine}</h3>
                    </div>
                    {complementaryMedicine.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services-box style_3 mb-60 wow fadeInUp p-3" data-wow-delay="0.3s">
                                <div className="services-content service-content-three d-flex align-items-center">
                                    <div className="services-icon mb-35">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <h4>{item.description}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreFeaturesHomeThree;
