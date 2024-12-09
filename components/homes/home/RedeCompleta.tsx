import Link from "next/link";
import priceing_data from "../../data/priceing-data";

interface priceing_content_type {
    title: string;
    subtitle2: string;  // Novo subtítulo
}

const priceing_content: priceing_content_type = {
    title: "Uma rede completa para o seu bem-estar",
    subtitle2: "No EfyCard, entendemos que bem-estar vai além de cuidados médicos. Por isso, oferecemos uma rede completa de serviços que abrangem todas as áreas da sua vida:", // Novo subtítulo
};

// Nova constante para armazenar as informações do ícone e do título
const icon_title_data = [
    {
        icon: "fas fa-dumbbell",  // Ícone de exemplo, substitua conforme necessário
        title: "Academias"
    },
    {
        icon: "fas fa-pills",  // Ícone de exemplo, substitua conforme necessário
        title: "Farmácias"
    },
    {
        icon: "fas fa-paw",  // Ícone de exemplo, substitua conforme necessário
        title: "Pet-shops"
    }
];

const { title, subtitle2 } = priceing_content;

const PricingHomeTwo = () => {
    return (
        <>
            <section className="pricing-area pt-115 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70 rede">
                                <h3>{title}</h3>
                                <p>{subtitle2}</p> {/* Novo subtítulo */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {icon_title_data.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className="pricing-wrapper pricing-info white-bg mb-30 wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Removendo qualquer conteúdo relacionado a preço */}
                                    <div className="price-body price-body-two">
                                        <div className="icon-container">
                                            {/* Espaço para ícone */}
                                            <i className={item.icon}></i> {/* Usando ícone da constante */}
                                        </div>
                                        <h4 className="icon-title">{item.title}</h4> {/* Título abaixo do ícone */}
                                    </div>

                                    <div className="price-body-bottom mt-25 mb-25">
                                        {/* Removido qualquer conteúdo relacionado a preços */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingHomeTwo;
