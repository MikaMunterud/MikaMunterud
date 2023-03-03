import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import { HiOutlineMail } from "react-icons/hi";
import "../scss/Contact.scss";
import Aos from "aos";
import IconLink from "../components/IconLink";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("xwkjojav");

  useEffect(function () {
    Aos.init();
  }, []);

  function smoothScroll(id) {
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <section className="profileSection" id="contact">
      <h1 data-aos="fade-down" data-aos-duration="800">
        {<HiOutlineMail />}
        {t("contact")}
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="contactSection"
      >
        {!state.succeeded ? (
          <form
            data-aos="fade-up"
            data-aos-duration="1000"
            className="contactForm"
            onSubmit={handleSubmit}
            method="post"
          >
            <label htmlFor="full-name">{t("contact_name")}</label>
            <input
              type="text"
              name="Name"
              id="full-name"
              placeholder={t("contact_name_full")}
              value={name}
              onChange={function (event) {
                setName(event.target.value);
              }}
              required
            />
            <ValidationError prefix="Name" field="Name" errors={state.errors} />
            <label htmlFor="company">{t("contact_company")}</label>
            <input
              type="text"
              name="Company"
              id="company"
              placeholder={t("contact_company")}
              value={companyName}
              onChange={function (event) {
                setCompanyName(event.target.value);
              }}
              required
            />
            <ValidationError
              prefix="Company"
              field="Company"
              errors={state.errors}
            />
            <label htmlFor="email-address">{t("contact_email")}</label>
            <input
              type="email"
              name="Email"
              id="email-address"
              placeholder={t("contact_email")}
              value={email}
              onChange={function (event) {
                setEmail(event.target.value);
              }}
              required
            />
            <ValidationError
              prefix="Email"
              field="Email"
              errors={state.errors}
            />
            <label htmlFor="email-subject">{t("contact_subject")}</label>
            <input
              type="text"
              name="Subject"
              id="email-subject"
              placeholder={t("contact_subject")}
              value={subject}
              onChange={function (event) {
                setSubject(event.target.value);
              }}
              required
            />
            <ValidationError
              prefix="Subject"
              field="Subject"
              errors={state.errors}
            />
            <label htmlFor="message">{t("contact_message")}</label>
            <textarea
              rows="5"
              name="Message"
              id="message"
              placeholder={t("contact_message_placeholder")}
              value={message}
              onChange={function (event) {
                setMessage(event.target.value);
              }}
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              onClick={function () {
                smoothScroll("#contact");
              }}
            >
              {t("contact_submit")}
            </button>
          </form>
        ) : (
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="contactForm message"
          >
            {t("contact_formMessage")}
          </p>
        )}
        <div
          // data-aos="fade-up"
          // data-aos-duration="1000"
          className="contactDetails"
        >
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="sideMessage"
          >
            {t("contact_sideMessage1")}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="sideMessage"
          >
            {t("contact_sideMessage2")}
          </p>
          <div
            className="contactIons"
            id="contactIcons"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <IconLink
              link={"https://www.linkedin.com/in/mikamunterud94/"}
              linkText={t("linkedInLink")}
              icon={<SiLinkedin />}
              description={t("linkedInLink")}
            />
            <IconLink
              link={"https://github.com/MikaMunterud"}
              linkText={t("githubLink")}
              icon={<ImGithub />}
              description={t("githubLink")}
            />
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              id="mailDiv"
              onClick={function () {
                if (window.innerWidth > 900) {
                  smoothScroll("#contact");
                } else {
                  smoothScroll("#mailDiv");
                }
              }}
            >
              <HiOutlineMail className="mail" />
              <span>{t("contact")}!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
