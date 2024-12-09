import HeaderTwo from "../../layout/headers/header-2";
import HeroHomeTwo from "./HeroHomeTwo";
import DomainSearchHomeTwo from "./DomainSearchHomeTwo";
import CoreFeaturesHomeTwo from "./CoreFeaturesHomeTwo";
import ServicesHomeOne from "../home/QuemSomos";
import PricingHomeTwo from "./PricingHomeTwo";
import MakeBusinessHomeTwo from "./MakeBusinessHomeTwo";
import ChoseAreaHomeOne from "../home/Exames";
import TestimonailHomeOne from "../home/TestimonailHomeOne";
import NewsFeedHomeOne from "../home/NewsFeedHomeOne";
import BrandHomeOne from "../home/BrandHomeOne";
import FooterTwo from "../../layout/footers/FooterTwo";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo style={false} />
      <main>
        <HeroHomeTwo />
        <DomainSearchHomeTwo />
        <CoreFeaturesHomeTwo />
        <ServicesHomeOne />
        <PricingHomeTwo />
        <MakeBusinessHomeTwo />
        <ChoseAreaHomeOne />
        <TestimonailHomeOne />
        <NewsFeedHomeOne />
        <BrandHomeOne />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
