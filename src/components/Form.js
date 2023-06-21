import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../scss/form.scss";
import Navigation from "./Navigation";
import LoadingAnimation from "./LoadingAnimation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Form = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const check = useRef();
  const form = useRef();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(check.current.checked);
    if (check.current.checked === false) {
      setLoading(false);
      toast.warning("J'accepte les conditions", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    emailjs
      .sendForm(
        "service_bi0twsh",
        "template_70lwzyt",
        form.current,
        "9Pkw4rOqj4QdNqhxr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Email sent successfully!");
          navigate("/");
          toast.success("envoyé «", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("Failed to send email. Please try again later.");
        }
      );
  };
  window.scroll(0, 0);
  return (
    <>
      <Navigation />
      <section id="form">
        <Helmet>
          <title>Form | MK Green Energy</title>
          <meta name="description" content="Form MK Green Energy" />
        </Helmet>
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>{t("Form.heading.title")}</h1>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="inputs-field">
              <div className="input" data-aos="fade-up">
                <span>{t("Form.inputs.i1")}</span>
                <input
                  type="text"
                  className="input"
                  name="first_name"
                  required
                  id=""
                />
              </div>
              <div className="input" required data-aos="fade-up">
                <span>{t("Form.inputs.i2")}</span>
                <input type="text" className="input" name="last_name" id="" />
              </div>
              <div className="input" data-aos="fade-up">
                <span>{t("Form.inputs.i3")} </span>
                <input
                  required
                  type="text"
                  name="user_mail"
                  className="input"
                  id=""
                />
              </div>
              <div className="input" data-aos="fade-up">
                <span>{t("Form.inputs.i4")}</span>
                <input
                  type="text"
                  name="user_telephone"
                  className="input"
                  id=""
                />
              </div>
              <div className="input" data-aos="fade-up">
                <span>{t("Form.inputs.i5")}</span>
                <textarea name="message" required />
              </div>
              <div className="text" data-aos="fade-up">
                <p>{t("Form.inputs.p1")}</p>
                <p>{t("Form.inputs.p2")}</p>
              </div>
              <div className="check" data-aos="fade-up">
                <input ref={check} type="checkbox" name="" id="check" />
                <label htmlFor="check"> {t("Form.inputs.label")}</label>
              </div>

              <div className="btn">
                <button
                  style={{
                    background: "rgb(0, 77, 142)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  {" "}
                  {loading ? <LoadingAnimation /> : t('Form.inputs.btn')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
