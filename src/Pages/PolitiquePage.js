import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import FooterOne from "../components/FooterOne";
import { useTranslation } from "react-i18next";
import img1 from "../assests/bg/footer.1.jpeg";
import "../scss/politique.scss";
const PolitiquePage = () => {
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
              <h1>{t("Poltique.heading.title")}</h1>
              <div className="para">
                <p>{t("Poltique.des.p1")}</p>
                <p>{t("Poltique.des.p2")}</p>
                <p>{t("Poltique.des.p3")}</p>
                <p>{t("Poltique.des.p4")}</p>
                <p>{t("Poltique.des.p5")}</p>
              </div>
            </div>
            <div className="content">
              <div className="box">
                <h3>{t("Poltique.points.q1")}</h3>
                <div className="para">
                  <p>{t("Cookies.points.p1")}</p>
                  <ul>
                    <li>{t("Poltique.points.pl1")}</li>
                    <li>{t("Poltique.points.pl2")}</li>
                    <li>{t("Poltique.points.pl3")}</li>
                    <li>{t("Poltique.points.pl4")}</li>
                    <li>{t("Poltique.points.pl5")}</li>
                    <li>{t("Poltique.points.pl6")}</li>
                  </ul>
                </div>
              </div>

              <div className="box">
                <h3>{t("Poltique.points.q2")}</h3>
                <div className="para">
                  <p>{t("Poltique.points.p21")}</p>
                  <p>{t("Poltique.points.p22")}</p>
                  <p>{t("Poltique.points.p23")}</p>
                  <p>{t("Poltique.points.p24")}</p>
                </div>
              </div>
              <div className="box">
                <h3>{t("Poltique.points.q3")}</h3>
                <div className="para">
                  <p>{t("Poltique.points.p31")}</p>
                  <p>{t("Poltique.points.p32")}</p>
                  <ul>
                    <li>{t("Poltique.points.p3l1")}</li>
                    <li>{t("Poltique.points.p3l2")}</li>
                  </ul>
                  <p>{t("Poltique.points.p33")}</p>
                  <p>{t("Poltique.points.p34")}</p>
                </div>
              </div>
              <div className="box">
                <h3>{t("Poltique.points.q4")}</h3>
                <div className="para">
                  <p>{t("Poltique.points.p4")}</p>
                </div>
              </div>
              <div className="box">
                <h3>{t("Poltique.points.q5")}</h3>
                <div className="para">
                  <p>{t("Poltique.points.p51")}</p>
                  <p>{t("Poltique.points.p52")}</p>

                  <ul>
                    <li>{t("Poltique.points.p5l1")}</li>
                    <li>{t("Poltique.points.p5l2")}</li>
                    <li>{t("Poltique.points.p5l3")}</li>
                  </ul>
                </div>
              </div>
              <div className="box">
                <h3>{t("Poltique.points.q5")}</h3>
                <div className="para">
                  <p>{t("Poltique.points.p51")}</p>
                  <p>{t("Poltique.points.p52")}</p>

                  <ul>
                    <li>{t("Poltique.points.p5l1")}</li>
                    <li>{t("Poltique.points.p5l2")}</li>
                    <li>{t("Poltique.points.p5l3")}</li>
                  </ul>
                </div>
              </div>
              <div className="box">
                <h3>{t("Poltique.points.q6")}</h3>
                <div className="para">
                  <p>{t("Poltique.points.p61")}</p>
                  <p>{t("Poltique.points.p62")}</p>
                  <div className="link">
                    {t("Poltique.points.p6h")}
                    <a href="http://www.mkgreenenergy.com, " target="blank_">
                      <li style={{ listStyle: "none" }}>
                        {" "}
                        {t("Cookies.points.linkp1")}{" "}
                      </li>
                    </a>
                    <div className="space">
                      <span>{t("Poltique.points.s1")}</span>
                      <span>{t("Poltique.points.s2")}</span>
                      <span>{t("Poltique.points.s3")}</span>
                    </div>
                  </div>
                  <div className="link">
                    {t("Poltique.points.sstart")}
                    <a href="http://www.mkgreenenergy.com, " target="blank_">
                      <li style={{ listStyle: "none" }}>
                        {" "}
                        {t("Cookies.points.linkp1")}{" "}
                      </li>
                    </a>
                    {t("Poltique.points.send")}
                  </div>
                  <div className="center">
                  {t("Poltique.points.center")}

                  </div>
                </div>
              </div>
              <div className="box">
                <h3>{t("Poltique.points.q7")}</h3>
                <div className="para">
                  <p>{t("Poltique.points.p7")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolitiquePage;
