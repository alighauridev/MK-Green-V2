import React from "react";
import WholeSale from "../components/WholeSale";
import "../scss/WholeSalePage.scss";
import img1 from "../assests/Sale.2.jpg";
import img2 from "../assests/Sale.1.jpg";
import img3 from "../assests/Sale.3.jpg";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const WholeSalePage = () => {
  window.scroll(0, 0);
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <section id="wholesalepage">
        <Helmet>
          <title> Nos produits | MK Green Energy</title>
          <meta name="description" content="De Gros MK Green Energy" />
        </Helmet>
        <div className="heading">
          <h1 data-aos="fade-up">{t("WholeSalePage.heading.title")} </h1>
        </div>
        <div className="container1">
          <WholeSale
            reverse={false}
            img={img1}
            heading={t("WholeSalePage.WholeSale.h1")}
            description={t("WholeSalePage.WholeSale.d1")}
            list={false}
          />
          <WholeSale
            reverse={true}
            img={img2}
            heading={t("WholeSalePage.WholeSale.h2")}
            description={t("WholeSalePage.WholeSale.d2")}
            list={false}
          />
          <WholeSale
            reverse={false}
            img={img3}
            heading={t("WholeSalePage.WholeSale.h3")}
            description={t("WholeSalePage.WholeSale.d3")}
            list={true}
            // list={[
            //   "       Conduits & bends",
            //   "  2. AC Conduits",
            //   "    3. Switch boxes",
            //   "4. Light boxes",
            //   "5. Fan boxes",
            //   "6. Junction boxes",
            //   "              7. Wires",
            //   " 8. Switches & Plates",
            //   "              9. MCBs",
            // ]}
          />
        </div>
      </section>
    </>
  );
};

export default WholeSalePage;
