import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsDot } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { HiOutlinePaperAirplane } from "react-icons/hi";

export default function Work({
  companyName,
  startDate,
  endDate,
  position,
  description,
}) {
  const { t } = useTranslation();

  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <div className="resumeSection_details_work">
      <h2 data-aos="fade-up" data-aos-duration="1000">
        {companyName}
        <span className="date">
          <BsDot />
          {startDate} – {endDate}
        </span>
      </h2>
      <p data-aos="fade-up" data-aos-duration="1000" className="work">
        <em>{position}</em>
      </p>

      <details
        data-aos="fade-up"
        data-aos-duration="1200"
        className="jobDescription"
      >
        <summary className="heading">
          {t("job_description")}
          <HiOutlinePaperAirplane className="paperPlane" />
        </summary>
        <p data-aos="fade-up" data-aos-duration="1200">
          {description}
        </p>
      </details>
    </div>
  );
}
