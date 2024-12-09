"use client"
import Image from "next/image";
import Slider from "react-slick";
import testimonial_data from "../../data/testimonial-data";
import React, { useRef } from "react";


// dots: false, 
const setting = {
    arrows: false, 
    infinite: true, 
    speed: 300, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    centerMode: true, 
    centerPadding: '0', 
   responsive: [ 
     { 
       breakpoint: 1200, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll:1, 
         infinite: true, 
         dots: false, 
         centerMode: false, 
       } 
     }, 
     { 
       breakpoint: 992, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll: 1, 
         arrows: false, 
         centerMode: false, 
       } 
     }, 
     { 
       breakpoint: 767, 
       settings: { 
         slidesToShow: 1, 
         slidesToScroll: 1, 
         arrows: false, 
       }
 
     }
 
   ]
}

interface testi_content_type {
  title: string;
  sm_des: string;
}
const testi_content: testi_content_type = {
  title: "Benefícios",
  sm_des: "Descubra todas as vantagens exclusivas que o EfyCard oferece para você e sua família. Com ele você tem acesso a uma rede ampla e diversificada de profissionais e instituições. Cuidar da sua saúde nunca foi tão fácil e acessível.",
}

const {title, sm_des} = testi_content
const TestimonailHomeOne = ({style} : any) => {
    const sliderRef = useRef<Slider | null>(null);

    const handlePrevClick = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    const handleNextClick = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
    return (
        <> 
            <section className={`testimonail-area server-bg pt-115 pb-120`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title section-title-white mb-70">
                                <h2>{title}</h2>
                                <p>{sm_des}</p>
                            </div>
                        </div>
                    </div>
                       <div className="row activ-testimonai wow fadeInUp  slick-initialized slick-slider animated">
                            <button onClick={handlePrevClick} type="button" className="slick-prev slick-arrow">
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button onClick={handleNextClick} type="button" className="slick-next slick-arrow">
                                <i className="fas fa-arrow-right"></i>
                            </button> 
                            <Slider {...setting} ref={sliderRef} data-wow-delay="0.3s">
                                {testimonial_data.map((item, i)   => 
                                    <div key={i} className="col-xl-12">
                                        <div className="pricing-wrapper white-bg text-center mb-30">
                                        <div className="price-icon mb-15">
                                            <i className={item.icon}></i> {/* Ícone do Font Awesome */}
                                        </div>
                                        <div className="pricin-title mb-20">
                                            <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                            
                                        </div>
                                    </div>
                                    </div>                        
                                )}                     
                            </Slider> 
                       </div>


                </div>
            </section>
        </>
    );
};

export default TestimonailHomeOne;