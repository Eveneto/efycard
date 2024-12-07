// import Image from "next/image";
// import Link from "next/link";
// import Logo from "../../../public/assets/img/logo/logo.png";
import SocialLinks from "../../common/social-links";


const SlideBar = ({sidebarOppen, setSidebarOppen}: any) => {
    return (
        <>
            <div className={`extra-info ${sidebarOppen && "info-open"}`}>
                <div className="close-icon">
                    <button onClick={() => setSidebarOppen(false)}>
                    <i className="far fa-window-close"></i>
                    </button>
                </div>
                {/* <div className="logo-side mb-30">
                    <Link href="/">
                        <Image src={Logo} alt="logo" />
                    </Link>
                </div> */}
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Endereços</h4>
                        <p><strong>Caruaru:</strong></p>
                        <p>AV PROFESSOR JOSE LEAO, 425 - LOJA 19</p>
                        <p>MAURICIO DE NASSAU - CARUARU-PE</p>
                        <p>CEP: 55012-070</p>
                        <p>(81) 98942-7705</p>
                    </div>
                    <div className="contact-list mb-30">
                        {/* <h4>Phone Number</h4> */}
                        <p><strong>Recife:</strong></p>
                        <p>RUA JOAQUIM NABUCO, 398</p>
                        <p>GRAÇAS - RECIFE-PE</p>
                        <p>CEP: 52011-005</p>
                        <p>(81) 98942-7778 / (81) 3136-9750</p>
                    </div>
                    {/* <div className="contact-list mb-30">
                        <h4>E</h4>
                        <p>info@example.com</p>
                        <p>example.mail@hum.com</p>
                    </div> */}
                </div>

                {/* <div className="instagram">
                    <a href="#">
                    <img src="assets/img/blog/ins1.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins2.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins3.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins4.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins5.jpg" alt="theme-pure" />
                    </a>
                    <a href="#">
                    <img src="assets/img/blog/ins1.jpg" alt="theme-pure" />
                    </a>
                </div> */}
                <div className="social-icon-right mt-20">
                    <SocialLinks /> 
                </div>
          </div>
        </>
    );
};

export default SlideBar;