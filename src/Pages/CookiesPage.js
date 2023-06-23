import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import FooterOne from "../components/FooterOne";
import { useTranslation } from "react-i18next";
import img1 from "../assests/bg/footer.1.jpeg";
import "../scss/cookies-page.scss";
const CookiesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="mentions-page">
        <Helmet>
          <title>POLITIQUE DE COOKIES | MK Green Energy</title>
          <meta name="description" content="Mentions MK Green Energy" />
        </Helmet>

        <Navigation />
        <div className="container-wrapper">
          <div className="container">
            <div className="heading">
              <h1>{t("Cookies.heading.title")}</h1>
              <div className="para">
                <p>{t("Cookies.des.p1")}</p>
              </div>
            </div>
            <div className="content">
              <div className="box">
                <h3>{t("Cookies.points.q1")}</h3>
                <div className="para">
                  <p>{t("Cookies.points.p1")}</p>
                </div>
              </div>
              <div className="box">
                <h3>{t("Cookies.points.q2")}</h3>
                <div className="para">
                  <p>{t("Cookies.points.p21")}</p>
                  <p>{t("Cookies.points.p22")}</p>
                  <p>{t("Cookies.points.p23")}</p>
                  <p>{t("Cookies.points.p24")}</p>
                  <li>{t("Cookies.points.li1")}</li>
                  <li>{t("Cookies.points.li2")}</li>
                  <p>{t("Cookies.points.p25")}</p>
                </div>
              </div>
              <div className="box">
                <h3>{t("Cookies.points.q3")}</h3>
                <div className="para">
                  <p>{t("Cookies.points.p31")}</p>
                  <p>{t("Cookies.points.p32")}</p>
                  <p>{t("Cookies.points.p33")}</p>
                  <p>{t("Cookies.points.p34")}</p>
                  <li>{t("Cookies.points.p35")}</li>
                  <p>{t("Cookies.points.p36")}</p>
                  <p>{t("Cookies.points.p37")}</p>
                  <a
                    href=" https://support.google.com/analytics/answer/6004245?hl=fr ou cliquez ici pour consulter la politique de confidentialité de Google Analytics."
                    target="blank_"
                    className="link"
                  >
                    {t("Cookies.points.linkh1")}
                    <span>{t("Cookies.points.linkp1")}</span>
                  </a>
                  <a
                    href="https://www.hotjar.com/legal/compliance/opt-out"
                    className="link"
                    target="blank_"
                  >
                    {t("Cookies.points.linkh2")}
                    <span>{t("Cookies.points.linkp2")}</span>
                  </a>
                  <p>{t("Cookies.points.p38")}</p>
                  <p>{t("Cookies.points.p39")}</p>
                  <p>{t("Cookies.points.p310")}</p>
                  <a
                    href="http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647"
                    className="link"
                    style={{ textDecoration: "underline", color: "#006281" }}
                  >
                    {t("Cookies.points.linkp1")}{" "}
                  </a>
                </div>
              </div>
              <div className="box">
                <h3>{t("Cookies.points.q4")}</h3>
                <div className="para">
                  <p>{t("Cookies.points.p4")}</p>
                </div>
              </div>
              <div className="box">
                <h3>{t("Cookies.points.q4")}</h3>
                <div className="para">
                  <p>{t("Cookies.points.p41")}</p>
                  <p>{t("Cookies.points.p42")}</p>
                  <p>{t("Cookies.points.li")}</p>
                  <ul>
                    <a href="http://windows.microsoft.com/fr-FR/windows-vista/Block-or-allow-cookies">
                      <li>{t("Cookies.points.Links.l1")}</li>
                    </a>

                    <a
                      href="http://support.mozilla.org/fr/kb/Activer%20et%20d%C3%A9sactiver%20les%20cookies"
                      target="blank_"
                    >
                      <li>{t("Cookies.points.Links.l2")}</li>
                    </a>

                    <a
                      href="http://support.apple.com/kb/ht1677?viewlocale=fr_FR"
                      target="blank_"
                    >
                      <li>{t("Cookies.points.Links.l3")}</li>{" "}
                    </a>

                    <a
                      href="http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647"
                      target="blank_"
                    >
                      <li>{t("Cookies.points.Links.l4")}</li>{" "}
                    </a>

                    <a
                      href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/comment-se-proteger/maitriser-votre-navigateur"
                      target="blank_"
                    >
                      <li>{t("Cookies.points.Links.l5")}</li>
                    </a>

                    <a href="https://www.facebook.com/help/cookies/">
                      {" "}
                      <li>{t("Cookies.points.Links.l6")}</li>
                    </a>
                    <a
                      href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
                      target="blank_"
                    >
                    <li>
                    {t("Cookies.points.linkp1")}{" "}

                    </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiesPage;
