"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import server_img from "../../../public/assets/img/slider/cartoes.png";

interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/banner.png",
    sub_title: "Inclued Every Isometric Illustrations",
    title: "Domain & Hosting In One Platform",
};
const { sub_title, title } = hero_content;

const HeroHomeOne = () => {
    const [bgImg, setBgImg] = useState(hero_content.bg_img);
    const [isVisible, setIsVisible] = useState(true); // Mova para dentro do componente

    useEffect(() => {
        const updateVisibility = () => {
            setIsVisible(window.innerWidth > 540); // Atualizar visibilidade
        };

        // Atualizar na montagem e ao redimensionar
        updateVisibility();
        window.addEventListener("resize", updateVisibility);

        // Cleanup
        return () => window.removeEventListener("resize", updateVisibility);
    }, []);

    useEffect(() => {
        const updateBgImage = () => {
            if (window.innerWidth <= 540) {
                setBgImg("/assets/img/slider/banner_mobile2.png"); // Imagem para telas menores
            } else {
                setBgImg(hero_content.bg_img); // Imagem padrão
            }
        };

        // Atualizar na montagem e ao redimensionar
        updateBgImage();
        window.addEventListener("resize", updateBgImage);

        // Cleanup para evitar problemas de performance
        return () => window.removeEventListener("resize", updateBgImage);
    }, []);

    return (
        <section className="slider-area position-relative">
            <div className="slider-ac">
                <div
                    className="single-slider slider-height"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-xl-8 offset-xl-2">
                                <div className="slider-text pt-180 text-center">
                                    <span
                                        className="d-block wow fadeInUp animated"
                                        data-wow-delay="0.3s"
                                    >
                                        {sub_title}
                                    </span>
                                    <h2
                                        className="wow fadeInUp animated"
                                        data-wow-delay="0.6s"
                                    >
                                        {title}
                                    </h2>
                                    <div
                                        className="slider-btn wow fadeInUp animated"
                                        data-wow-delay="0.9s"
                                    >
                                        <a href="#" className="btn">
                                            Get Started
                                        </a>
                                        <a href="#" className="btn btn-border">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {isVisible && (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="slider-bottom-img wow fadeInUp animated"
                                data-wow-delay="1.3s"
                            >
                                <Image src={server_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroHomeOne;
