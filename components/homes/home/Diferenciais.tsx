import React from 'react';

const Diferenciais = () => {
    return (
        <div className="chose-us-area item-half" id="diferenciais">
            <div className="container-full">
                <div className="row">
                <div 
                    className="col-md-6 thumb bg-cover" 
                    style={{ backgroundImage: "url(/assets/img/familia.jpg)" }}
                ></div>
                <div className="col-md-6 info server-bg">
                    <div className="heading">
                    <h2>Diferenciais que nenhum outro oferece</h2>
                    <p>
                        No EfyCard, nos dedicamos a proporcionar uma experiência de saúde incomparável. 
                        Nosso compromisso com a excelência é refletido em nossos diferenciais exclusivos, 
                        pensados para oferecer o melhor para você:
                    </p>
                    </div>
                    <ul>
                    <li>
                        <div className="info">
                        <i className="fas fa-check-circle"></i>
                        <h4>Excelente rede de clínicas, médicos e hospitais.</h4>
                        </div>
                    </li>
                    <li>
                        <div className="info">
                        <i className="fas fa-check-circle"></i>
                        <h4>Financiamento para cirurgias e procedimentos de saúde</h4>
                        </div>
                    </li>
                    <li>
                        <div className="info">
                        <i className="fas fa-check-circle"></i>
                        <h4>Pacotes de cirurgias com o melhor preço.</h4>
                        </div>
                    </li>
                    <li>
                        <div className="info">
                        <i className="fas fa-check-circle"></i>
                        <h4>Seguro Cirurgia.</h4>
                        </div>
                    </li>
                    </ul>
                    <a 
                    className="btn btn-theme border btn-md" 
                    href="https://venda.efycard.com.br/" 
                    style={{ marginTop: "30px" }}
                    >
                    Peça o seu cartão
                    </a>
                </div>
                </div>
            </div>
        </div>

    );
};

export default Diferenciais;
