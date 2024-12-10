import Link from 'next/link';
import SocialLinks from '../../common/social-links';
import Image from 'next/image';
import footer_logo from "../../../public/assets/img/logo/logo.png";

interface footer_links_type {
    id: number;
    title: string;
    links: {
        title: string;
        link: string;
    }[]; 
}

// footer links data
const footer_links: footer_links_type[] = [
    {
        id: 1,
        title: "Benefícios",
        links: [
           { title: "Descontos De Até 60% Na Rede Credenciada", link: "#"},
           { title: "Rede Credenciada Diferenciada", link: "#"},
           { title: "Crédito-Saúde", link: "#"},
           { title: "Rede De Hospitais", link: "#"},
           { title: "Cirurgias Parceladas", link: "#"},
           { title: "Seguro Pós-Cirurgia", link: "#"},
        ]
    },
    {
        id: 2,
        title: "FAQ",
        links: [
           { title: "Quais São Os Principais Benefícios De Ter O Efycard?", link: "/faq"},
           { title: "Como O Efycard Pode Me Ajudar A Economizar?", link: "/faq"},
           { title: "Em Quais Regiões O Efycard É Aceito?", link: "/faq"},
           { title: "Existe Algum Período De Carência Para Começar A Usar Os Benefícios Do Efycard?", link: "/faq"},
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
    footer_info: string;
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
    footer_info: "Os benefícios estão disponíveis em algumas regiões e condições podem variar. Consulte-nos para mais detalhes.",
    addresses: [
        {
            city: "Caruaru",
            address: "AV PROFESSOR JOSE LEAO, 425 – LOJA 19 MAURICIO DE NASSAU – CARUARU-PE",
            cep: "CEP: 55012-070",
        },
        {
            city: "Recife",
            address: "RUA JOAQUIM NABUCO, 398 GRAÇAS – RECIFE-PE",
            cep: "CEP: 52011-005",
        },
    ],
};


// Dados do conteúdo do rodapé
const { sub_title, title, price_title, info_us, mail, phone, website, footer_info, addresses } = footer_content;

const FooterOne = () => {
    return (
        <footer>
            <section className="footer-area pt-110 pb-90 bg-footer" style={{ backgroundImage: `url(/assets/img/bg/footer-bg.jpg)` }}>
                <div className="container">
                    {/* Seção Contatos e Endereços */}
                    <div className="row d-flex justify-content-start justify-content-md-between align-items-center">
                        {/* Contatos */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="footer-sing-up mb-30">
                                <h5>{sub_title}</h5>
                                <h2>{title.replace(";", "<br />")}</h2>
                            </div>
                        </div>

                        {/* Endereços */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="footer-left-info mb-30">
                                <h5> {price_title}</h5>
                                <div className="row">
                                    {addresses.map((item, index) => (
                                        <div key={index} className="col-md-6">
                                            <h6>{item.city}</h6>
                                            <p>
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

                        <div className="col-xl-8 col-lg-8">
                            <div className="footer-right-box pl-70">
                                {/* Outros links */}
                                <div className="row">
                                    {footer_links.map((item, i) => (
                                        <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="wigets mb-30">
                                                <div className="widgets-titles">
                                                    <h4>{item.title}</h4>
                                                </div>
                                                <div className="wegets-body">
                                                    <ul>
                                                        {item.links.map((link, index) => (
                                                            <li key={index}>
                                                                <Link href={link.link}>{link.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="footer-text">
                                    <p>{footer_info}</p>
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
