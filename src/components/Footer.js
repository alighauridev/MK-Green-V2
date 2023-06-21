import React from "react";
import "../scss/footer__.scss";
import { Partners_1, Partners_2 } from "../assests/data";
import img1 from "../assests/Icons/logo.1.png";
import icon from "../assests/icon.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaLinkedin,
} from "react-icons/fa";
import { Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();

  const data = [
    {
      name: "About Us",
      h1: "Company",
      h2: "Diversity",
      h3: "Leadership",
      h4: "Jobs",
      h5: "Press",
      h6: "Wavelength",
    },
    {
      name: "Workflow Solutions",
      h1: "Project Management",
      h2: "Agile",
      h3: "Task Management",
      h4: "Reporting",
      h5: "Work Tracking",
      h6: "See All Uses",
    },
    {
      name: "Team Solutions",
      h1: "Engineering",
      h2: "Designers",
      h3: "Sales",
      h4: "Developers",
      h5: "Developers",
      h6: "See All team",
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="footer-top" data-aos="fade-up">
          <div className="footer-logo">
            <div className="logo" data-aos={"fade-up"}>
              <img src={img1} alt="footer" />
            </div>
            <div className="btn">
              <Link to={"/contact"}>{t("HomePage.Footer.btn1")}</Link>
            </div>
            <div className="contact">
              <p data-aos={"fade-up"}>
                <span>Siret</span> <a href="#"> {t("HomePage.Footer.p1")}</a>
              </p>
              <p data-aos={"fade-up"}>
                <span></span> <a href="#"> {t("HomePage.Footer.p2")}</a>
              </p>
              <p data-aos={"fade-up"}>
                <span></span> <a href="#"> {t("HomePage.Footer.p3")}</a>
              </p>
              <p data-aos={"fade-up"}>
                <span>Tel:</span> <a href="#">{t("HomePage.Footer.p4")}</a>
              </p>

              <p data-aos={"fade-up"}>
                <span>Address:</span> <a href="#">{t("HomePage.Footer.p5")}</a>
              </p>
              <p data-aos={"fade-up"}>
                <span>Email:</span>{" "}
                <a href="mailto:Contact@mkgreenenergy.com">
                  {t("HomePage.Footer.p6")}
                </a>
              </p>
            </div>
            <div className="email">
              <input type="email" placeholder="Email" name="" id="" />
              <button>{t("HomePage.Footer.btn2")}</button>
            </div>
          </div>
        </div>
        <div className="bottom__footer">
          <p>{t("HomePage.Footer.p7")}</p>

          <ul className="icons">
            <a href="https://www.linkedin.com/company/m-k-green-energy/">
              <FaLinkedinIn />{" "}
            </a>

            <a href="https://twitter.com/@mkgreenenergy">
              <FaTwitter />
            </a>
          </ul>
          <ul className="end">
            <Link to={"/contact"}>{t("HomePage.Footer.btn1")}</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
