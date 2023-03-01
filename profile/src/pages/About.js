import "../scss/About.scss";
import { useTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import IconListInfo from "../components/IconListInfo";
import { useEffect } from "react";
import Aos from "aos";
import Attributes from "../components/Attributes";

export default function About() {
  const { t } = useTranslation();

  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <section className="profileSection" id="about">
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="profileImage"
      >
        <img
          src="https://icicathy.sirv.com/profile/profile.JPG?w=400&h=400"
          alt="profilePicture"
        ></img>
      </div>
      <div className="aboutInfo">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          {t("about")}
        </h1>
        <p data-aos="fade-up" data-aos-duration="1200">
          {t("about_text1")}
        </p>

        <Attributes
          attributes={[
            t("attribute_1"),
            t("attribute_2"),
            t("attribute_3"),
            t("attribute_4"),
          ]}
        />

        <ul className="aboutInfo_details">
          <IconListInfo
            icon={<MdLocationOn className="icon location" />}
            heading={t("about_detail1")}
            description={t("about_address")}
          />
          <IconListInfo
            icon={<BsSuitHeartFill className="icon heart" />}
            heading={t("about_detail3")}
            description={t("about_interests")}
          />
          <IconListInfo
            icon={<FaBirthdayCake className="icon cake" />}
            heading={t("about_detail2")}
            description={"28"}
          />
        </ul>
      </div>
    </section>
  );
}
