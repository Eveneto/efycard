import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
// import DomainSearch from "./DomainSearchHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import QuemSomos from "./QuemSomos";
// import FAQHomeOne from "./FAQHomeOne";
import Exames from "./Exames";
import Dicas from "./Dicas";
import Diferenciais from "./Diferenciais";
import TestimonailHomeOne from "./TestimonailHomeOne";
import NewsFeedHomeOne from "./NewsFeedHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";
import RedeCompleta from "./RedeCompleta";
import Beneficios from "./Beneficios";
import Solicite from "./Solicite";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        {/* <DomainSearch /> */}
        <QuemSomos />
        <PricingHomeOne />
        {/* <FAQHomeOne /> */}
        <Exames />
        <Diferenciais />
        <RedeCompleta />
        <Beneficios />
        <Solicite />
        <Dicas />
        {/* <TestimonailHomeOne /> */}
        <NewsFeedHomeOne />
        <BrandHomeOne />
      </main>
      {/* <FooterOne /> */}
    </>
  );
};

export default HomeOne;
