"use client"
import Link from 'next/link';
import { useState } from 'react';
import SocialLinks from '../../common/social-links';
import Image from 'next/image';
import footer_logo from "../../../public/assets/img/logo/logo.png";

interface footer_links_type {
    id: number;
    title: string;
    links: {
        title: string;
        link: string;
        answer: string; // Tipando a resposta como string
    }[]; 
}

const footer_links: footer_links_type[] = [
    {
        id: 1,
        title: "Benefícios",
        links: [
           { title: "Descontos De Até 60% Na Rede Credenciada", link: "#", answer: "Descrição dos descontos..." },
           { title: "Rede Credenciada Diferenciada", link: "#", answer: "Descrição da rede diferenciada..." },
           { title: "Crédito-Saúde", link: "#", answer: "Descrição do crédito-saúde..." },
           { title: "Rede De Hospitais", link: "#", answer: "Descrição da rede de hospitais..." },
           { title: "Cirurgias Parceladas", link: "#", answer: "Descrição sobre cirurgias parceladas..." },
           { title: "Seguro Pós-Cirurgia", link: "#", answer: "Descrição do seguro pós-cirurgia..." },
        ]
    },
    {
        id: 2,
        title: "FAQ",
        links: [
           { title: "Quais São Os Principais Benefícios De Ter O Efycard?", link: "/faq", answer: "Ao ter o Efycard, você terá acesso a uma ampla rede de médicos, descontos significativos em medicamentos e atendimento prioritário em emergências. É a segurança que você e sua família merecem com um custo que cabe no seu bolso." },
           { title: "Como O Efycard Pode Me Ajudar A Economizar?", link: "/faq", answer: "Com o Efycard, você economiza em cada consulta, exame ou procedimento. Além disso, oferecemos planos de benefícios que incluem uma porcentagem de reembolso em despesas de saúde, o que significa que quanto mais você usa, mais você economiza." },
           { title: "Em Quais Regiões O Efycard É Aceito?", link: "/faq", answer: "O plano de benefícios Efycard possui uma rede seletiva de parceiros, garantindo que você tenha acesso aos melhores serviços em várias regiões pernambucanas, incluindo Caruaru, Recife (matriz e filial) e muitos outros municípios. Estamos constantemente expandindo nossa cobertura para incluir mais áreas e proporcionar maior conveniência aos nossos assinantes." },
           { title: "Existe Algum Período De Carência Para Começar A Usar Os Benefícios Do Efycard?", link: "/faq", answer: "Sim. Os benefícios do Efycard estão disponíveis para o uso da sua família após 30 dias da adesão com a assinatura do contrato. Queremos que você comece a aproveitar suas vantagens e a cuidar da sua saúde sem atrasos, sem burocracia e sem procrastinação" },
        ]
    }
];

// footer content type
interface footer_content_type {
    sub_title: string;
    title: string;
    price_title: string;
    info_us: string;
    mail: string;
    phone: string;
    website: string;
    // footer_info: string;
    addresses: {
        city: string;
        address: string;
        cep: string;
    }[];
}

// footer content here
const footer_content: footer_content_type = {
    sub_title: "Nossos Contatos",
    title: "(81) 98942-7705; (81) 3136-9750",
    price_title: "Nossos Endereços",
    info_us: "Se você tiver alguma dúvida ou quiser saber mais sobre nossos serviços, entre em contato com nossa equipe.",
    mail: "info@efycard.com.br",
    phone: "(81) 98942-7705 | (81) 3136-9750",
    website: "www.efycard.com.br",
    // footer_info: "Os benefícios estão disponíveis em algumas regiões e condições podem variar. Consulte-nos para mais detalhes.",
    addresses: [
        {
            city: "Caruaru:",
            address: "AV PROFESSOR JOSE LEAO, 425 – LOJA 19 MAURICIO DE NASSAU – CARUARU-PE",
            cep: "CEP: 55012-070",
        },
        {
            city: "Recife:",
            address: "RUA JOAQUIM NABUCO, 398 GRAÇAS – RECIFE-PE",
            cep: "CEP: 52011-005",
        },
    ],
};


// Dados do conteúdo do rodapé
const { sub_title, title, price_title, info_us, mail, phone, website, addresses } = footer_content;

const FooterOne = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <footer>
            <section className="footer-area pt-110 pb-90 bg-footer" style={{ backgroundImage: `url(/assets/img/bg/footer-bg.jpg)` }}>
                <div className="container">
                    {/* Seção Contatos e Endereços */}
                    <div className="row d-flex justify-content-start align-items-center">
                        {/* Contatos */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="footer-sing-up mb-30">
                                <h5>{sub_title}</h5>
                                <h2>
                                    {title.split(';').map((part, index) => (
                                        <span key={index}>{part}<br /></span>
                                    ))}
                                </h2>
                            </div>
                        </div>

                        {/* Endereços */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="footer-left-info mb-30">
                                <h5> {price_title}</h5>
                                <div className="row" style={{width: "900px"}}>
                                    {addresses.map((item, index) => (
                                        <div key={index} className="col-md-6">
                                            <h6>{item.city}</h6>
                                            <p className='endereco'>
                                                {item.city}<br />
                                                {item.address}<br />
                                                {item.cep}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="footer-border"></div>

                    {/* Informações adicionais */}
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-11 col-lg-8">
                            <div className="footer-right-box d-flex justify-content-between">
                                {/* Seção de Benefícios */}
                                <div className="benefits-section mb-30">
                                    <div className="widgets-titles">
                                        <h4>{footer_links[0].title}</h4>
                                    </div>
                                    <div className="wegets-body">
                                        <ul>
                                            {footer_links[0].links.map((link, index) => (
                                                <li key={index}>
                                                    <Link href={link.link}>{link.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Seção FAQ */}
                                <div className="faq-section mb-30">
                                    <div className="widgets-titles">
                                        <h4>{footer_links[1].title}</h4>
                                    </div>
                                    <div className="wegets-body">
                                        <ul>
                                            {footer_links[1].links.map((link, index) => (
                                                <li key={index}>
                                                    <div
                                                        className="faq-item"
                                                        style={{ backgroundColor: '#fff', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
                                                        onClick={() => toggleAnswer(index)}
                                                    >
                                                        <h5>{link.title}</h5>
                                                        {activeQuestion === index && (
                                                            <p style={{color: "#000c35"}}>{link.answer}</p>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};




export default FooterOne;
