import Link from "next/link";
import Image from "next/image"; 
import services_data_type from "../../types/service-types";
// service images 
import service_img_1 from "../../../public/assets/img/icon/s01.png";
import service_img_2 from "../../../public/assets/img/icon/s02.png";
import service_img_3 from "../../../public/assets/img/icon/s03.png";
// import service_img_4 from "../../../public/assets/img/icon/s04.png";
// import service_img_5 from "../../../public/assets/img/icon/s05.png";
// import service_img_6 from "../../../public/assets/img/icon/s06.png"; 
// service data 
const services_data: services_data_type[] = [
    {
        id: 1,
        img: service_img_1,
        title: "NOSSO OBJETIVO",
        sm_des: "O EfyCard é muito mais que um cartão de descontos: é uma rede de benefícios pensada para toda a família. Nosso objetivo é proporcionar mais qualidade de vida aos nossos clientes, facilitando o acesso à saúde, ao lazer e aos serviços de bem-estar. Priorizamos um atendimento completo, eficiente e acessível, com benefícios exclusivos em hospitais de excelência, laboratórios renomados e serviços de atendimento 24 horas. CONSULTAS.<br /><br />",
    },
    {
        id: 2,
        img: service_img_2,
        title: "CONSULTAS",
        sm_des: "O EfyCard oferece acesso a uma ampla rede de médicos, laboratórios, hospitais, academias, restaurantes, seguros e assistência funeral, com descontos exclusivos. Com tecnologia avançada e um aplicativo intuitivo, você gerencia consultas, acompanha benefícios e monitora seus gastos de forma prática. Seja para consultas, exames ou emergências, garantimos soluções completas, personalizadas e econômicas, focadas no bem-estar da sua família.<br /><br />",
    },
    {
        id: 3,
        img: service_img_3,
        title: "ENDEREÇOS",
        sm_des: "Caruaru:<br />AV PROFESSOR JOSE LEAO, 425 - LOJA 19, MAURICIO DE NASSAU, CARUARU-PE<br />CEP: 55012-070<br />(81) 98942-7705<br /><br />Recife:<br />RUA JOAQUIM NABUCO, 398 - GRAÇAS, RECIFE-PE<br />CEP: 52011-005<br />(81) 98942-7778 / (81) 3136-9750"
    },
 ]

 interface service_content_type {
    title: string;
    sub_title: string;
}
 const service_content: service_content_type = {
    title: "Quem Somos",
    sub_title: "O EfyCard é muito mais que um cartão de descontos: é uma rede de benefícios pensada para toda a família.",
 }
 const {title, sub_title} = service_content

 
 const ServicesHomeOne = () => { 
    return (
        <>
            <section className="services-area pt-115 pb-95">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-30">
                                <h2>{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="section-link text-left text-lg-right mb-30">
                                <a href="#" className="btn btn-soft-border">Peça já o seu Cartão</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="services-content">
                                        <h3><Link href="#">{item.title}</Link></h3>
                                        <p dangerouslySetInnerHTML={{ __html: item.sm_des }}></p> {/* Uso do dangerouslySetInnerHTML */}
                                        {/* <a className="services-link" href="#"><i className="far fa-chevron-right"></i></a> */}
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesHomeOne;