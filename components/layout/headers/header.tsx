"use client";
import Link from 'next/link';  
import NavMenu from './nav-menu';
import { useState } from 'react';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
import Logo from "../../../public/assets/img/logo/logo.png";
import Image from 'next/image';

const HeaderOne = () => { 
    const [sidebarOppen, setSidebarOppen] = useState(false);
    const [searchOppen, setSearchOppen] = useState(false);

    return (
        <>
            <header>
                {/* Barra Azul */}
                <div className="top-bar">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        {/* Ícone do Instagram */}
                        <div className="social">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>

                        {/* E-mail e Telefone */}
                        <div className="contact-info">
                            <span>
                                <i className="far fa-envelope"></i> contato@efycard.com.br
                            </span>
                            <span className="separator">|</span>
                            <span>
                                <i className="fas fa-phone"></i> (81) 98942-7705
                            </span>
                        </div>
                    </div>
                </div>

                {/* Menu Principal */}
                <div className="header-area header-transparent header-space pt-45 pb-45">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                                <div className="logo">
                                    <Link href="/"> 
                                        <Image src={Logo} alt="theme-pure" /> 
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-6 d-none d-lg-block">
                                <div className="main-menu text-center">
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-lg-3 col-md-7 d-flex flex-row-reverse align-items-center justify-content-xl-end">
                                <div className="bar d-none d-xl-block">
                                    <button className="info-bar" onClick={() => setSidebarOppen(true)}>
                                        <i className="far fa-bars"></i>
                                    </button>
                                </div>
                            </div> */}
                            <div className="col-12">
                                <div className="mobile-menu mean-container d-lg-none"> 
                                    <div className="mean-bar">
                                        <MobileMenus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <SlideBar sidebarOppen={sidebarOppen} setSidebarOppen={setSidebarOppen} />
        </>
    );
};

export default HeaderOne;
