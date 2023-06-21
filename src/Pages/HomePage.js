import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Quality from "../components/Quality";
import Aides from "../components/Aides";
import FooterOne from "../components/FooterOne";
import bg from "../assests/bg/banner.1.jpeg";
import img1 from "../assests/bg/footer.1.jpeg";
import Banner from "../components/Banner";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
const HomePage = () => {
  window.scroll(0, 0);
  const { t } = useTranslation();
  return (
    <>
      <section id="home">
        <Helmet>
          <title>Home | MK Green Energy</title>
          <meta name="description" content=" MK Green Energy" />
        </Helmet>
        <Navigation />
        <Banner
          bg={bg}
          isCenter={true}
          text={t("HomePage.Banner.title")}
        />
        <About />
        <Quality />
        <Aides />
        <FooterOne img={img1} bgColor={"#006281a1"} />
      </section>
    </>
  );
};

export default HomePage;
