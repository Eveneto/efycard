// import Link from "next/link";


// price data type
interface price_data_type {
    id: number;
    icon: string; // Alterado para string, pois vamos usar classes do FA
    title: string;
    sm_des: string;
}



// price data 
const price_data: price_data_type[] = [
    {
        id: 1,
        icon: "fas fa-user-md", // Ícone Font Awesome para "usuário médico"
        title: "Rede Credenciada",
        sm_des: "Serviços ambulatoriais com baixo custo.",
    },
    {
        id: 2,
        icon: "fas fa-tooth", // Ícone Font Awesome para "dente"
        title: "Serviços Odontológicos",
        sm_des: "Descontos exclusivos em odontologia.",
    },
    {
        id: 3,
        icon: "fas fa-hospital-alt", // Ícone Font Awesome para "hospital"
        title: "Seguro de Vida",
        sm_des: "Seguro de vida acessível e confiável.",
    },
]

const PricingHomeOne = () => {
    return (
        <>
            <section className="pricing-area server-bg pt-115 pb-120">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2 className="titulo-pricing">Efycard é mais acesso à <span className="verde">Saúde</span></h2>
                                <p className="texto-pricing">Faz mais sentido ter o Efycard do que qualquer outro cartão de desconto, pode comparar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {price_data.map((item, i) => 
                            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="pricing-wrapper white-bg text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="price-icon mb-15">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="pricin-title mb-20">
                                        <h3 className={item.id === 3 ? "mb-custom" : ""}>{item.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: item.sm_des }}></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* <div className="row">
                        <div className="col-12">
                            <div className="pricing-more-link text-center mt-50">
                                <p><Link href="#">See plan details</Link> and pricing for more information</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default PricingHomeOne;
