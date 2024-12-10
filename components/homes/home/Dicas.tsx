import React from 'react';

const Dicas = () => {
    return (
        <div className="chose-us-area item-half" id="dicas">
            <div className="container-full">
                <div className="row">
                    <div 
                        className="col-md-6 thumb bg-cover" 
                        style={{ backgroundImage: "url(/assets/img/familia2.jpg)" }}
                    ></div>
                    <div className="col-md-6 info server-bg">
                        <div className="heading">
                            <h2>Dicas de Saúde e Bem-estar</h2>
                            <p>
                                Sua saúde em primeiro lugar: dicas para uma vida mais saudável e equilibrada, pensando sempre no seu bem-estar.
                            </p>
                        </div>

                        {/* Novo conteúdo inserido entre título e lista */}
                        <div className="prevention-info mt-50">
                            <h3 className="section-title">
                                A Importância da Prevenção: Check-ups Regulares para Manter a Saúde em Dia
                            </h3>
                            <p className="section-description">
                                Manter a saúde em dia vai muito além de tratar doenças quando elas surgem. A prevenção é a chave para uma vida longa e saudável, e os check-ups regulares desempenham um papel crucial nesse processo. Mas por que exatamente essas visitas ao médico são tão importantes?
                            </p>
                        </div>

                        <ul>
                            <li>
                                <div className="info">
                                    <i className="fas fa-check-circle"></i>
                                    <h4>Prevenir as doenças</h4>
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    <i className="fas fa-check-circle"></i>
                                    <h4>Detectar problemas precocemente</h4>
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    <i className="fas fa-check-circle"></i>
                                    <h4>Monitoramento contínuo da saúde</h4>
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    <i className="fas fa-check-circle"></i>
                                    <h4>Redução de custos com saúde</h4>
                                </div>
                            </li>
                        </ul>

                        {/* <a 
                            className="btn btn-theme border btn-md" 
                            href="https://venda.efycard.com.br/" 
                            style={{ marginTop: "30px" }}
                        >
                            Peça o seu cartão
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dicas;
