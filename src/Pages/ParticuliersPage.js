import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import bg from "../assests/bg/banner.3.jpeg";
import img1 from "../assests/bg/footer.1.jpeg";
import FooterOne from "../components/FooterOne";
import About from "../components/About";
import Aides from "../components/Aides";
import Borne from "../components/Borne";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const ParticuliersPage = () => {
  window.scroll(0, 0)
  const { t } = useTranslation();

  return (
    <>
      <section id="particliers">
        <Helmet>
          <title>Particuliers | MK Green Energy</title>
          <meta name="description" content="Particuliers MK Green Energy" />
        </Helmet>
        <Navigation />
        <Banner
          bg={bg}
          isCenter={false}
          text={t("Particuliers.Banner.title")}
          bc={'rgb(255 255 255 / 62%)'}
        />
        <Borne />
        <About isDisplay={true} />
        <Aides />
        <FooterOne img={img1} bgColor={"rgb(255 255 255 / 66%)"} invert={true} />
      </section>
    </>
  );
};

export default ParticuliersPage;
