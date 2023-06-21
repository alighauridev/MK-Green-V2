import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import About from "../components/About";
import bg from "../assests/bg/banner.2.jpeg"
import img1 from "../assests/bg/footer.1.jpeg";
import Car from "../components/Car";
import FooterOne from "../components/FooterOne";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const ProfessionelPage = () => {
  window.scroll(0, 0)
  const { t } = useTranslation();
  return (
    <>
      <section id="professionel">
        <Helmet>
          <title>Professionel | MK Green Energy</title>
          <meta name="description" content="Professionel MK Green Energy" />
        </Helmet>
        <Navigation />
        <Banner bg={bg} isCenter={false} text={t("Professionals.Banner.title")} />
        <Car />
        <About isDisplay={true} />
        <FooterOne img={img1} bgColor={'#00000090'} />

      </section>
    </>
  );
};

export default ProfessionelPage;
