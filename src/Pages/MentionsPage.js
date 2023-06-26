import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import FooterOne from "../components/FooterOne";
import { useTranslation } from "react-i18next";
import img1 from "../assests/bg/footer.1.jpeg";
import "../scss/mention-page.scss";
const MentionsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="mentions-page">
        <Helmet>
          <title>Mentions légales | MK Green Energy</title>
          <meta name="description" content="Mentions MK Green Energy" />
        </Helmet>

        <Navigation />
        <div className="container-wrapper">
          <div className="container">
            <div className="heading">
              <h1>{t("Mention.heading.title")}</h1>
              <div className="para">
                <p>{t("Mention.des.p1")}</p>
                <p>{t("Mention.des.p2")}</p>
              </div>
            </div>
            <div className="content">
              <div className="title">
                <h2>{t("Mention.Presentation.title")}</h2>
                <span>{t("Mention.Presentation.span")}</span>
                <p>{t("Mention.Presentation.p")}</p>
              </div>
              <ul>
                <li>
                  {t("Mention.Presentation.list.li1")}

                  <p>{t("Mention.Presentation.list.p1")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li2")}

                  <p>{t("Mention.Presentation.list.p2")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li3")}

                  <p>{t("Mention.Presentation.list.p3")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li4")}

                  <p>{t("Mention.Presentation.list.p4")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li5")}

                  <p>{t("Mention.Presentation.list.p5")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li6")}

                  <span>{t("Mention.Presentation.list.p6")}</span>
                </li>
                <li>
                  {t("Mention.Presentation.list.li7")}

                  <p>{t("Mention.Presentation.list.p7")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li8")}

                  <p>{t("Mention.Presentation.list.p8")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li9")}

                  <p><a href="mailto:contact@mkgreenenergy.com">
                  {t("Mention.Presentation.list.p9")}
                    </a></p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li10")}

                  <p>{t("Mention.Presentation.list.p10")}</p>
                </li>
                <li>
                  {t("Mention.Presentation.list.li11")}

                  <p>{t("Mention.Presentation.list.p11")}</p>
                </li>
              </ul>
              <div className="bottom">
                <div className="heading-b">
                  <h1>{t("Mention.mentionend.h1")}</h1>
                  <h2>
                    {t("Mention.mentionend.h2")}
                    <p>{t("Mention.mentionend.h2part")}</p>
                  </h2>
                  <span>{t("Mention.mentionend.s1")}</span>
                  <span>{t("Mention.mentionend.s2")}</span>
                  <div className="tel">
                    Tel : <p>{t("Mention.mentionend.tel")}</p>
                  </div>
                </div>
                <div className="para">
                  <p>
                    <b>{t("Mention.mentionend.ph")}</b>
                    {t("Mention.mentionend.p")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentionsPage;
